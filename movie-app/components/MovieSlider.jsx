import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from './MovieCard';

export default function MovieSlider({ title, movies, type }) {
    if (!movies?.length) return null;

    return (
        <div className="mb-10 relative overflow-visible z-5 ">
            <h2 className="text-xl font-bold text-accent mb-4">{title}</h2>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}

                className='overflow-visible z-6'
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className='overflow-visible z-7'>
                        <MovieCard movie={movie} type={type} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
