import { useState } from "react";
import { useSelector } from "react-redux";

export default function MovieOverview() {
    const user = useSelector((state) => state.user.userInfo);
    const { movie } = useSelector((state) => state.detail);
    const [showFullOverview, setShowFullOverview] = useState(false);
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const handleShowMore = () => {
        if (!showFullOverview) {
            setShowFullOverview(true);
        } else {
            document.getElementById("detail-tab")?.scrollIntoView({ behavior: "smooth" });
            setShowFullOverview(false);
        }
    };

    return (
        <div className="relative w-full rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <img
                    src={baseUrl + (movie.backdrop_path || movie.poster_path)}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                <h1 className="text-3xl font-bold">{movie.title}</h1>

                <div className="flex items-center gap-2 mt-3">
                    {user ? (
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                            ❤️ 관심
                        </button>
                    ) : null}
                </div>

                <p className="text-sm mt-3 text-gray-100 max-w-xl">
                    {showFullOverview ? movie.overview : `${movie.overview.slice(0, 100)}...`}
                    <button
                        onClick={handleShowMore}
                        className="ml-2 text-blue-400 hover:underline"
                    >
                        {showFullOverview ? "접기" : "더보기"}
                    </button>
                </p>
            </div>
        </div>
    );
}
