// components/HomeButton.jsx
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function HomeButton() {
    const navigate = useNavigate();
    return (
        <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-gold"
        >
        <FaHome />
        <span>홈으로</span>
        </button>
    );
}
