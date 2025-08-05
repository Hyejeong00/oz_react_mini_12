import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function BannerSlider() {
    const popularMovies = useSelector(state => state.movie.popular.data);
    const [activeIndex, setActiveIndex] = useState(0);

    const banners = popularMovies.slice(0, 3).map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        image: `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`,
    }));

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={700}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-[500px] mx-auto relative rounded-xl"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={banner.id} className="relative">
                    {/* 배경 이미지 */}
                    <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                    />

                    {/* 오버레이 텍스트 */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-r from-black/80 via-black/50 to-black/0 p-8 flex flex-col justify-end text-white z-10">
                        <div
                        className={`w-2/3 space-y-4 text-base md:text-lg drop-shadow-md transition-all duration-1000 ease-out transform
                            ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}
                        `}
                        >
                            <h2 className="text-4xl font-bold drop-shadow-lg mb-4">{banner.title}</h2>
                            <p className="text-base md:text-lg drop-shadow-md line-clamp-2">{banner.overview}</p>
                        </div>

                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
