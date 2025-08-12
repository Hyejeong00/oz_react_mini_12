import { useState } from "react";
import { useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";

export default function MovieOverview({setActiveTab}) {
    const user = useSelector((state) => state.user.userInfo);
    const { movie } = useSelector((state) => state.detail);
    const baseUrl = "https://image.tmdb.org/t/p/original";

    const handleShowMore = async() => {
        await setActiveTab("detail")
        document.getElementById("detail-tab")?.scrollIntoView({ behavior: "smooth" });
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

            {/* 오버레이 전체 영역 */}
            <div className="absolute top-0 left-0 h-full z-10 p-8 flex flex-col justify-end text-white rounded-lg">

                {/* 배경 그라데이션 (이 부분만 pointer-events-none) */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0F0F0F]/100 via-[#0F0F0F]/40 to-[#0F0F0F]/0 rounded-lg"></div>

                {/* 실제 내용 영역 (pointer-events-auto 기본값) */}
                <h1 className="text-4xl font-bold drop-shadow-lg mb-4 relative">{movie.title}</h1>

                <div className="flex flex-wrap items-center gap-4 mb-4 relative">
                    <button
                        className="bg-[#31bd8a] text-white font-semibold py-2 px-6 rounded-md cursor-pointer"
                    >
                        지금 시청하기
                    </button>

                    {user && (
                        <div className="relative">
                            <FavoriteButton />
                        </div>
                    )}
                </div>

                <p className="w-2/3 text-base md:text-lg drop-shadow-md relative">
                    {movie.overview ? 
                    <>
                        {`${movie.overview.slice(0, 100)}...`}
                        <button
                            onClick={handleShowMore}
                            className="ml-2 text-blue-400 hover:underline cursor-pointer"
                        >
                            더보기
                        </button>
                    </>
                    : null}
                </p>
            </div>
        </div>
    );
}
