import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../src/RTK/userSlice'; // 여기 맞게 수정하세요
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';

export default function DropdownMenu({ onClose }) {
    const dispatch = useDispatch();
    const { logout } = useSupabaseAuth();
    const navigate = useNavigate()

    // 로그아웃 버튼 눌렸을때
    const handleLogout = async (e) => {
        e.preventDefault()
        try{
            await logout();
            dispatch(clearUser());
            onClose(); // 드롭다운 닫힘
            navigate("/") // 메인으로 돌아가기
        }catch(err){
            console.log(err)
        }
    };

    return (
        <ul className="bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 w-40">
            <li>
                <Link
                to="/mypage"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={onClose}
                >
                마이페이지
                </Link>
            </li>
            <li>
                <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                로그아웃
                </button>
            </li>
        </ul>
    );
}
