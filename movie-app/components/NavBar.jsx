import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce"
import { useEffect, useState } from "react";
import { fetchSearchMovies } from "../src/RTK/searchThunk";
import { useDispatch } from "react-redux";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
    const [input, setInput] = useState("")
    const debounced = useDebounce(input, 500)
    const {isDark, setIsDark} = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (debounced.trim()) {
            dispatch(fetchSearchMovies(debounced));
            navigate(`/search?q=${debounced}`);
        }
    }, [debounced])

    return (
  <nav className="w-full bg-gray-100 text-black dark:bg-dark dark:text-white py-4 shadow-md border-b border-gray-200 dark:border-gray-700">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
      
      {/* 로고 */}
      <Link to="/" className="text-accent text-2xl font-bold tracking-wide shrink-0">
        🍿 ㅇㅅㅅ
      </Link>

      {/* 검색창 */}
      <div className="w-full sm:flex-1 flex justify-center">
        <input
          type="text"
          placeholder="영화 검색"
          className="w-[300px] px-3 py-2 rounded bg-white text-black dark:bg-darker dark:text-dark2 placeholder-gold border border-primary focus:outline-none focus:ring-2 focus:ring-accent"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* 버튼 그룹 (다크모드 토글 + 로그인/회원가입) */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2">
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="w-full sm:w-auto bg-gray-300 text-black dark:bg-gray-700 dark:text-white px-3 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          {isDark ? "Light" : "Dark"}
        </button>

        <Link to="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-accent text-darker px-4 py-2 rounded font-medium hover:bg-[#D9A491] hover:text-darkest transition">
            로그인
          </button>
        </Link>

        <Link to="/signup" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-primary text-darker px-4 py-2 rounded font-medium hover:bg-[#BF7950] hover:text-white transition">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  </nav>
)

}