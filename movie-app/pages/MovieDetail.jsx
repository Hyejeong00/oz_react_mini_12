import { useSelector } from "react-redux";
import { selectMovieById } from "../src/RTK/movieSelectors";
import { useParams } from "react-router-dom";
import { selectGenreById } from "../src/RTK/genreSelector";
import MovieDetailSkeleton from "../components/skeleton/MovieDetailSkeleton";

export default function MovieDetail() {
    const { type, movieId } = useParams();
    const movie = useSelector(selectMovieById(Number(movieId), type));
    const genres = useSelector(selectGenreById(movie.genre_ids));
    const loading = useSelector((state) =>
        type === "search"
            ? state.search?.loading ?? true
            : state.movie[type]?.loading ?? true
    );

    const baseUrl = "https://image.tmdb.org/t/p/original";

    if (loading || !movie) return <MovieDetailSkeleton />;

    return (
        <div className="grid grid-rows-[auto_1fr] gap-6 max-w-3xl mx-auto p-6 rounded-xl border shadow-2xl
                        bg-white text-black border-gray-300
                        dark:bg-[#1f2937] dark:text-white dark:border-gray-600">
            <div>
                <img
                    src={baseUrl + (movie.backdrop_path || movie.poster_path)}
                    alt={movie.title}
                    className="w-full rounded-lg shadow-md"
                />
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-accent dark:text-accent">{movie.title}</h1>
                <p className="text-gray-700 dark:text-gray-300">{movie.overview}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <p className="text-lg sm:text-xl font-semibold text-yellow-700 dark:text-gold flex items-center gap-1">
                        ⭐ 평점: <span>{movie.vote_average.toFixed(1)}</span>
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-dark2">
                        개봉일: <span className="text-yellow-700 dark:text-gold">{movie.release_date}</span>
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-2 font-semibold">장르:</span>
                        <div className="inline-flex flex-wrap gap-2">
                            {genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="inline-block bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm px-3 py-1 rounded-full shadow hover:bg-accent hover:text-white transition-colors duration-200"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="px-4 py-2 bg-primary text-white dark:text-darker font-semibold rounded hover:bg-accent hover:text-darkest transition">
                    ▶ 지금 시청
                </button>
            </div>
        </div>
    );
}
