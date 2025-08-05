// components/NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchSearchMovies } from "../src/RTK/searchThunk";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import useDebounce from "../hooks/useDebounce";
import DropdownMenu from "./DopdownMenu";
import { FiUser } from "react-icons/fi";
import { FaSun, FaMoon } from "react-icons/fa";
import TooltipButton from "./TooltipButton";

export default function NavBar() {
    const [input, setInput] = useState("");
    const debounced = useDebounce(input, 500);
    const { isDark, setIsDark } = useTheme();
    const user = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (debounced.trim()) {
        dispatch(fetchSearchMovies(debounced));
        navigate(`/search?q=${debounced}`);
        }
    }, [debounced]);

    useEffect(() => {
        function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
        }
        if (dropdownOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    return (
        <nav className="w-full max-w-[1240px] mx-auto bg-white dark:bg-[#0F0F0F] text-black dark:text-white py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            {/* 로고 */}
            <Link to="/" className="text-black dark:text-white text-2xl font-bold tracking-wide">
                OKSUSU
            </Link>

            {/* 검색창 */}
            <div className="w-full sm:flex-1 flex justify-center">
            <input
                type="text"
                placeholder="영화 검색"
                className="w-[300px] px-3 py-2 rounded-full 
                        bg-white text-black placeholder-gray-500 
                        dark:bg-[#1A1A1A] dark:text-white dark:placeholder-gray-400 
                        border border-gray-500  focus:outline-none focus:ring-2 focus:ring-[#00FFAE] transition"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            </div>

            {/* 버튼 그룹 */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2">
            
            {/* 다크/라이트 토글 버튼 */}
            <TooltipButton
                tooltip={isDark ? "밝은 테마" : "어두운 테마"}
                onClick={() => setIsDark((prev) => !prev)}
                className="w-10 h-10 flex items-center justify-center 
                        bg-transparent hover:bg-black/10 dark:hover:bg-white/10 
                        text-black dark:text-white transition"
            >
                {isDark ? (
                <FaSun className="text-white" />
                ) : (
                <FaMoon className="text-black" />
                )}
            </TooltipButton>

            {/* 로그인/회원가입 or 유저 드롭다운 */}
            <div className="relative" ref={dropdownRef}>
                {!user ? (
                <div className="flex flex-col sm:flex-row gap-2">
                    <Link to="/login">
                    <button className="px-4 py-2 bg-[#00CFFF] text-black font-medium rounded hover:bg-[#00b5e6] transition">
                        로그인
                    </button>
                    </Link>
                    <Link to="/signup">
                    <button className="px-4 py-2 bg-[#8C52FF] text-white font-medium rounded hover:bg-[#7A42e6] transition">
                        회원가입
                    </button>
                    </Link>
                </div>
                ) : (
                <>
                    <TooltipButton 
                        tooltip="프로필" onClick={() => setDropdownOpen((prev) => !prev)}
                        className="w-10 h-10 flex items-center justify-center rounded-full 
                                    hover:bg-black/10 dark:hover:bg-white/10 hover:ring-2 hover:ring-[#00FFAE] transition duration-200 ease-in-out"
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen}
                    >
                    <FiUser className="w-6 h-6" />
                    </TooltipButton>

                    {dropdownOpen && (
                    <div className="absolute right-0 top-full z-50 mt-2">
                        <DropdownMenu onClose={() => setDropdownOpen(false)} />
                    </div>
                    )}
                </>
                )}
            </div>
            </div>
        </div>
        </nav>
    );
}
