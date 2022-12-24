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
      <div className="relative">
        <div className="w-full h-full absolute md:p-8 p-4 mix-blend-difference hover-image">
          <motion.h2 className="uppercase md:text-base text-sm hover-image sticky md:top-8 top-5">
            {label}
          </motion.h2>
        </div>
        <img
          src={img}
          className="w-full h-full max-h-[600px] object-cover rounded-xl"
        />
      </div>
    </Link>
  );
};

export default ImageBlock;
