import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';
import SearchMovieSkeleton from '../components/skeleton/SearchMovieSkeleton';
import { useSearchParams } from 'react-router-dom';
import { fetchMoreSearchMovies, fetchSearchMovies } from '../src/RTK/searchThunk';
import useThrottle from '../hooks/useTrottle';

export default function SearchMovie() {
    const dispatch = useDispatch();
    const { data, loading, error, page, hasMore, totalResults } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [movies, setMovies] = useState([]);
    const [prevQuery, setPrevQuery] = useState(""); // 쿼리 변경 감지용

    // 검색어 바뀌면 새 요청 + 로컬 상태 초기화
    useEffect(() => {
        if (!query) return;

        // query가 바뀌었을 경우에만 새 요청
        if (query !== prevQuery) {
            setPrevQuery(query);
            setMovies([]); // 로컬 리스트 초기화 (스크롤 유지용)
            dispatch(fetchSearchMovies(query));
        }
    }, [query]);

    // Redux data가 바뀌면 로컬에 반영 (초기검색 or 추가검색)
    useEffect(() => {
        // 최초 검색 or 첫 페이지 결과 → movies 비었을 때
        if (movies.length === 0) {
            setMovies(data);
        } else if (data.length > movies.length) {
            const newItems = data.slice(movies.length);
            setMovies((prev) => [...prev, ...newItems]);
        }
    }, [data]);

    // 무한스크롤
    useThrottle(() => {
        if (!loading && hasMore) {
            dispatch(fetchMoreSearchMovies({ query, page: page + 1 }));
        }
    });

    if (loading && movies.length === 0) return <SearchMovieSkeleton />;
    if (error) return <p className="text-red-500 text-center mt-10">❌ 에러 발생: {error}</p>;

    return (
        <div className="p-4 max-w-7xl mx-auto text-black dark:text-white">
            <h2 className="text-lg font-semibold mb-4">
                <span className="text-accent">{`"${query}"`}</span> 에 대한 검색 결과
                <span className="text-gold">{` (${totalResults})개`}</span>
            </h2>

            {movies.length === 0 ? (
                <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
                    검색 결과가 없습니다.
                </p>
            ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} type="search" />
                    ))}
                </div>
            )}
        </div>
    );
}
