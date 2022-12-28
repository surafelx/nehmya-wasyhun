import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryProps {
  imgs: string[];
}

const Gallery = ({ imgs }: GalleryProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (carouselRef.current) {
      setCarouselHeight(
        carouselRef.current?.scrollHeight - carouselRef.current?.offsetHeight,
      );
    }
  }, [imgs]);

  return (
    <div className="w-full">
      <div className="h-full max-h-[700px] flex gap-4 justify-between md:flex-row flex-col">
        <div className="w-full">
          <img
            src={imgs[currentImg]}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-xl">
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: -carouselHeight }}
            dragElastic={0.8}
            className="flex md:flex-col flex-row gap-4 md:max-w-[180px] md:max-h-[700px]"
            ref={carouselRef}
          >
            {imgs.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImg(i)}
                className={`gallery-item hover-link ${
                  currentImg === i ? 'active' : ''
                }`}
              >
                <img
                  src={img}
                  className="rounded-xl pointer-events-none hover-link"
                />
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
