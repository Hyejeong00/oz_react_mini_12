export default function BannerSkeleton() {
    return (
        <div className="w-full max-w-[1024px] h-[500px] mx-auto relative rounded-md overflow-hidden bg-gray-800 animate-pulse">
        {/* 이미지 영역 */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700"></div>

        {/* 오버레이 텍스트 영역 */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent p-8 flex flex-col justify-center text-white">
            <div className="w-3/4 h-10 bg-gray-600 rounded mb-6"></div>
            <div className="w-1/4 h-4 bg-gray-600 rounded mb-4"></div>
            <div className="w-full h-3 bg-gray-700 rounded mb-2"></div>
            <div className="w-5/6 h-3 bg-gray-700 rounded mb-2"></div>
            <div className="w-2/3 h-3 bg-gray-700 rounded"></div>
        </div>
        </div>
    );
}
