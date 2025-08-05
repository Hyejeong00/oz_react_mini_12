import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, type = "default" }) {
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const handleClick = () => {
        navigate(`/details/${movie.id}`);
    };

    return (
        <div
        onClick={handleClick}
        className="group relative transition-shadow duration-300 ease-in-out cursor-pointer p-2 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1f2937] flex flex-col hover:shadow-xl w-full max-w-[200px] mx-auto"
        >

        {/* 이미지 영역 */}
        <div className="w-full aspect-[2/3] mx-auto overflow-hidden rounded">
        <img
            src={baseUrl + movie.poster_path}
            alt={movie.title}
            className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-[1.05]"
        />
        </div>


        {/* 텍스트 영역 */}
        <div className="text-center mt-2">
            <h2
            className="font-semibold text-sm text-black dark:text-white transition-transform duration-150 ease-in-out group-hover:scale-[1.03]"
            >
            {movie.title}
            </h2>

            {type === "upComing" ? (
            <p className="text-xs text-gray-600 dark:text-gray-300">
                개봉일: {movie.release_date}
            </p>
            ) : (
            <p className="text-xs text-yellow-600">
                ⭐ 평점: {movie.vote_average?.toFixed(1) ?? "N/A"}
            </p>
            )}
        </div>
        </div>
    );
}
