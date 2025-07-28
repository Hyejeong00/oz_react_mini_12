import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from './MovieCard';

export default function MovieSlider({ title, movies, type }) {
    if (!movies?.length) return null;

    return (
        <div className="mb-12 relative overflow-visible z-10">
            <h2 className="text-xl font-bold text-accent mb-4">{title}</h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                1024: { slidesPerView: 5 },   // 데스크탑
                768: { slidesPerView: 4 },    // 태블릿
                480: { slidesPerView: 2 },  // 모바일
                }}
                className="overflow-visible"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="overflow-visible z-10">
                        <MovieCard movie={movie} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
