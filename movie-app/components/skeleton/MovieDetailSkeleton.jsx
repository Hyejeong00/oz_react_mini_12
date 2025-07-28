export default function MovieDetailSkeleton() {
    return (
        <div className="grid grid-rows-[auto_1fr] gap-6 max-w-3xl mx-auto p-6 text-white bg-darkest rounded-md shadow">
        <div className="w-full h-[300px] bg-gray-700 animate-pulse rounded-lg" />

        <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-700 animate-pulse rounded" />
            <div className="h-4 w-full bg-gray-700 animate-pulse rounded" />
            <div className="h-4 w-5/6 bg-gray-700 animate-pulse rounded" />
            <div className="h-4 w-2/3 bg-gray-700 animate-pulse rounded" />

            <div className="flex gap-2">
            <div className="h-6 w-16 bg-gray-700 animate-pulse rounded-full" />
            <div className="h-6 w-16 bg-gray-700 animate-pulse rounded-full" />
            </div>

            <div className="h-10 w-32 bg-gray-600 animate-pulse rounded" />
        </div>
        </div>
    );
}
