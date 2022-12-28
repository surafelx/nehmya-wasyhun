import { motion } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';

interface MobileGalleryProps {
  imgs: string[];
}

const MobileGallery = ({ imgs }: MobileGalleryProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(
        carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth,
      );
      console.log(
        carouselRef.current?.scrollWidth,
        carouselRef.current?.offsetWidth,
      );
    }
  }, [imgs]);

  return (
    <div>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -carouselWidth }}
        dragElastic={0.8}
        className="flex gap-4"
        ref={carouselRef}
      >
        {imgs.map((img, i) => (
          <img key={i} src={img} className="rounded-xl" />
        ))}
      </motion.div>
    </div>
  );
};

export default MobileGallery;
