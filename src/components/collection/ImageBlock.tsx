import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ImageBlockProps {
  path: string;
  img: string;
  label: string;
  className?: string;
}

const ImageBlock = ({ path, img, label, className }: ImageBlockProps) => {
  return (
    <Link to={path} className={className}>
      <div className="relative h-full">
        <div className="w-full h-full absolute md:p-8 p-4 mix-blend-difference hover-image">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.2 }}
            className=" uppercase md:text-base text-sm hover-image sticky md:top-8 top-5"
          >
            {label}
          </motion.h2>
        </div>
        <div className="h-full rounded-xl overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            src={img}
            className="w-full h-full max-h-[600px] object-cover rounded-xl"
          />
        </div>
      </div>
    </Link>
  );
};

export default ImageBlock;
