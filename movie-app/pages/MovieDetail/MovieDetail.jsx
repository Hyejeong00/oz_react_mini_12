import { useParams } from "react-router-dom";
import MovieDetailSkeleton from "../../components/skeleton/MovieDetailSkeleton";

import MovieOverview from "./MovieOverview";
import MovieTabs from "./MovieTabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../src/RTK/detailThunk";
import { useEffect, useState } from "react";

export default function MovieDetail() {
    const [activeTab, setActiveTab] = useState("trailer");
    const dispatch = useDispatch()
    const { movieId } = useParams();
    const { movie, loading, error } = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [movieId]);

    if (loading || !movie) return <MovieDetailSkeleton />;

    if (error) return <div>에러: {error}</div>;

    return (
        <div className="w-full p-4 sm:p-6  bg-white text-black dark:bg-[#0F0F0F] dark:text-white">
            <MovieOverview setActiveTab={setActiveTab}/>
            <div className="mt-6 space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-lg font-semibold text-yellow-700 dark:text-gold flex items-center gap-1">
                        ⭐ 평점: <span>{movie.vote_average.toFixed(1)}</span>
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-dark2">
                        개봉일: <span className="text-yellow-700 dark:text-gold">{movie.release_date}</span>
                    </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="mr-2 font-semibold">장르:</span>
                    <div className="inline-flex flex-wrap gap-2">
                        {movie.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="inline-block bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm px-3 py-1 rounded-full shadow hover:bg-accent hover:text-white transition-colors duration-200"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <MovieTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    );
}
