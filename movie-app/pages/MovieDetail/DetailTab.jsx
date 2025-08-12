import { useSelector } from "react-redux";

export default function DetailTab() {
    const { movie } = useSelector((state) => state.detail);

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
            <div className="mb-8">{movie.overview}</div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-white">
                <li>원제: {movie.original_title}</li>
                <li>언어: {movie.original_language}</li>
                <li>등급: {movie.adult ? "청불" : "전체 관람가"}</li>
                <li>인기도: {movie.popularity}</li>
                <li>총 투표수: {movie.vote_count}</li>
            </ul>
        </div>
    );
}
