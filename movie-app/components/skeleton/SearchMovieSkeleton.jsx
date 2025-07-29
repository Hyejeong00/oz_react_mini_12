// components/skeleton/SearchMovieSkeleton.jsx
export default function SearchMovieSkeleton() {
    const dummyArray = Array.from({ length: 12 });

    return (
        <div className="p-4 max-w-7xl mx-auto animate-pulse">
        <h2 className="text-lg font-semibold mb-4 bg-dark h-6 w-40 rounded" />

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {dummyArray.map((_, i) => (
            <div
                key={i}
                className="bg-dark rounded-md p-2 shadow flex flex-col h-[320px]"
            >
                <div className="bg-dark2 w-full h-[240px] rounded mb-3" />
                <div className="bg-dark2 h-4 w-3/4 mb-2 rounded" />
                <div className="bg-dark2 h-3 w-1/2 rounded" />
            </div>
            ))}
        </div>
        </div>
    );
}
