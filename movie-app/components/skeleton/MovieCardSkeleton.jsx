export default function MovieCardSkeleton() {
    return (
        <div className="animate-pulse bg-gray-800 rounded-lg h-72 w-full">
        <div className="h-40 bg-gray-700 rounded-t-lg" />
        <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-600 rounded w-3/4" />
            <div className="h-3 bg-gray-600 rounded w-1/2" />
        </div>
        </div>
    );
}
