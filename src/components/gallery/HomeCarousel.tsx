import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useDeviceType from '../../hooks/useDeviceType';
import { Album } from '../../interfaces';
import { AnimatePresence, motion } from 'framer-motion';

interface HomeCarouselProps {
  albums: Album[];
}

const HomeCarousel = ({ albums }: HomeCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const deviceType = useDeviceType();

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentAlbum}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="uppercase font-thin text-center"
        >
          {albums[currentAlbum].name}
        </motion.h2>
      </AnimatePresence>
      <Swiper
        className="md:my-4 my-2 w-full overflow-visible"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => {
          if (swiperRef.current) {
            setCurrentAlbum(swiperRef.current.activeIndex);
          }
        }}
      >
        {albums.map((album, i) => (
          <SwiperSlide key={i} className="w-full">
            <Link to={`/work/${album.key}`}>
              <img
                src={album.images[0]}
                className="rounded-xl md:w-full md:max-h-[75vh] h-[75vh] object-cover hover-image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {deviceType === 'desktop' ? (
        <div className="flex gap-4 items-center">
          <button
            className="hover-link"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            PREVIOUS
          </button>
          <div className="flex gap-2">
            {albums.map((albums, i) => (
              <span
                key={i}
                className={`carousel-step ${
                  i === currentAlbum ? 'active' : ''
                }`}
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
      ) : null}
    </div>
  );
};

export default HomeCarousel;
