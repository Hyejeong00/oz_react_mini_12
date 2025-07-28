import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="w-full bg-dark p-4 z-50 shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* 로고 */}
                <Link to="/">
                    <h1 className="text-accent text-2xl font-bold tracking-wide text-center sm:text-left">
                        ReelBuzz
                    </h1>
                </Link>

                {/* 검색창 */}
                <input
                    type="text"
                    placeholder="영화 검색"
                    className="w-full sm:flex-1 sm:max-w-md px-3 py-1 rounded bg-darker text-dark2 placeholder-gold border border-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />

                {/* 버튼 그룹 */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <Link to="/login" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-accent text-darker px-4 py-1 rounded font-medium hover:bg-[#D9A491] hover:text-darkest transition">
                            로그인
                        </button>
                    </Link>

                    <Link to="/signup" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-primary text-darker px-4 py-1 rounded font-medium hover:bg-[#BF7950] hover:text-white transition">
                            회원가입
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
