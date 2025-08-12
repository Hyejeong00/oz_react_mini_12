import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

const FavoriteTab = () => {
  const favorites = useSelector((state) => state.favorite);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  // 브라우저 너비에 따라 보여줄 카드 수 설정
  useEffect(() => {
    const calculateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) return setVisibleCount(2);       // 모바일
      if (width < 1024) return setVisibleCount(3);      // 태블릿
      if (width < 1280) return setVisibleCount(4);      // 일반 데스크탑
      return setVisibleCount(5);                        // 큰 화면
    };

    calculateVisibleCount();
    window.addEventListener("resize", calculateVisibleCount);
    return () => window.removeEventListener("resize", calculateVisibleCount);
  }, []);

  return (
    <div className="p-6">
      {/* 상단 제목 + 더보기 버튼 */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">관심 영화</h3>
          <button
            onClick={() => navigate("/favorites")}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            더보기 &gt;
          </button>
      </div>

      {favorites.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">등록된 관심 영화가 없습니다.</p>
      ) : (
        <div className="flex gap-4 overflow-hidden">
          {favorites.slice(0, visibleCount).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteTab;
