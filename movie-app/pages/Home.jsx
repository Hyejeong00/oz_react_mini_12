import { useSelector } from "react-redux"
import MovieSlider from '../components/MovieSlider'
import BannerSlider from '../components/BannerSlider'
import BannerSkeleton from "../components/skeleton/BannerSkeleton"
import MovieSliderSkeleton from "../components/skeleton/MovieSliderSkeleton"

function Home() {
    const popular = useSelector(state => state.movie.popular);
    const nowPlaying = useSelector(state => state.movie.nowPlaying);
    const upComing = useSelector(state => state.movie.upComing);
    const topRated = useSelector(state => state.movie.topRated);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-black dark:text-white px-4 py-6 space-y-12">
            {popular.loading ? <BannerSkeleton /> : <BannerSlider />}

            {popular.loading
                ? <MovieSliderSkeleton title="인기영화" />
                : <MovieSlider title="인기 영화" movies={popular.data} type="popular" />
            }

            {nowPlaying.loading
                ? <MovieSliderSkeleton title="상영 중" />
                : <MovieSlider title="상영 중" movies={nowPlaying.data} type="nowPlaying" />
            }

            {topRated.loading
                ? <MovieSliderSkeleton title="평점 높은 영화" />
                : <MovieSlider title="평점 높은 영화" movies={topRated.data} type="topRated" />
            }

            {upComing.loading
                ? <MovieSliderSkeleton title="상영 예정" />
                : <MovieSlider title="상영 예정" movies={upComing.data} type="upComing" />
            }
        </div>
    )
}

export default Home;
