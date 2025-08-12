import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

export default function FavoritePage() {
    const favorites = useSelector((state) => state.favorite);
    return(
         <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">
                관심 영화
            </h2>
            {favorites.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">등록된 관심 영화가 없습니다.</p>
            ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    )
}