import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import SearchMovieSkeleton from '../components/skeleton/SearchMovieSkeleton';
import { useSearchParams } from 'react-router-dom';

export default function SearchMovie() {
    const { data, loading, error } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    if (loading) return <SearchMovieSkeleton />;
    if (error) return <p className="text-red-500 text-center mt-10">❌ 에러 발생: {error}</p>;

    return (
        <div className="p-4 max-w-7xl mx-auto text-black dark:text-white">
            <h2 className="text-lg font-semibold mb-4">
                <span className="text-accent">{"${query}"}</span> 에 대한 검색 결과
                <span className="text-gold"> ({data.length}개)</span>
            </h2>

            {data.length === 0 ? (
                <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
                    검색 결과가 없습니다.
                </p>
                ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {data.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} type="search" />
                    ))}
                </div>
            )}
        </div>
    );
}