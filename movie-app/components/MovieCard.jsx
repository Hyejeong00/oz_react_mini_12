import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie, type = "default" }) {
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const handleClick = () => {
        navigate(`/details/${type}/${movie.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="group relative transition-transform duration-300 ease-in-out cursor-pointer p-2 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1f2937] text-black dark:text-dark2 flex flex-col h-[320px] hover:-translate-y-1 hover:shadow-xl"
        >
            {/* 이미지 영역 */}
            <div className="w-[160px] h-[240px] mx-auto overflow-hidden rounded">
                <img
                    src={baseUrl + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded"
                />
            </div>

            {/* 텍스트 영역 */}
            <div className="text-center mt-2">
                <h2 className="font-semibold text-sm text-accent dark:group-hover:text-white group-hover:text-black transition-colors duration-300 line-clamp-1">
                    {movie.title}
                </h2>

                {type === "upComing" ? (
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                        개봉일: {movie.release_date}
                    </p>
                ) : (
                    <p className="text-xs text-yellow-600 dark:text-gold">
                        ⭐ 평점: {movie.vote_average?.toFixed(1) ?? "N/A"}
                    </p>
                )}
            </div>
        </div>
    );
}
