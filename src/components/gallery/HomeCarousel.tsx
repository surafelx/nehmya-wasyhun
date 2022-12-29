import { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface HomeCarouselProps {
  imgs: string[];
}

const HomeCarousel = ({ imgs }: HomeCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div>
      <h2 className="uppercase font-thin text-center">Title</h2>
      <Swiper
        className="md:my-4 my-2 mx-0 w-full overflow-visible md:max-w-[94%] max-w-[88%]"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => {
          if (swiperRef.current) {
            setCurrentImg(swiperRef.current.activeIndex);
          }
        }}
      >
        {imgs.map((img) => (
          <SwiperSlide className="w-full">
            <Link to="/work">
              <img
                src={img}
                className="rounded-xl md:w-full md:max-h-[75vh] h-[70vh] object-cover hover-image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-4 items-center">
        <button
          className="hover-link"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          PREVIOUS
        </button>
        <div className="flex gap-2">
          {imgs.map((img, i) => (
            <span
              key={i}
              className={`carousel-step ${i === currentImg ? 'active' : ''}`}
            ></span>
          ))}
        </div>
        <button
          className="hover-link"
          onClick={() => swiperRef.current?.slideNext()}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
