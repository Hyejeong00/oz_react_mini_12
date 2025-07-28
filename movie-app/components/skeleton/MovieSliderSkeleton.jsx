import MovieCardSkeleton from './MovieCardSkeleton';

export default function MovieSliderSkeleton({ title = "로딩 중..." }) {
    return (
        <div className="mb-12">
            <h2 className="text-xl font-bold text-accent mb-4">{title}</h2>
            <div className="flex gap-4 overflow-x-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                    <MovieCardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}