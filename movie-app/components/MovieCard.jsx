import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie, type = "default" }) {
    const navigate = useNavigate();
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    const handleClick = () => {
        navigate(`/details/${type}/${movie.id}`);
    };

    return (
        <div
            className="group relative transition-all duration-300 hover:shadow-xl hover:border-2 hover:border-gold hover:bg-dark/80 cursor-pointer p-2 rounded shadow bg-dark text-dark2 flex flex-col h-[320px]"
            onClick={handleClick}
        >
            {/* 이미지 영역 */}
            <div className="w-[160px] h-[240px] mx-auto overflow-hidden">
                <img
                    src={baseUrl + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded"
                />
            </div>

            {/* 텍스트 영역 */}
            <div className="text-center mt-2">
                <h2 className="font-semibold text-sm text-accent group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {movie.title}
                </h2>

                {type === "upComing" ? (
                    <p className="text-xs group-hover:text-gray-300 transition-colors duration-300">
                        개봉일: {movie.release_date}
                    </p>
                ) : (
                    <p className="text-xs text-gold">
                        ⭐ 평점: {movie.vote_average?.toFixed(1) ?? "N/A"}
                    </p>
                )}
            </div>
        </div>
    );
}
