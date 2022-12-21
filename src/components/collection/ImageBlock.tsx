import { Link } from 'react-router-dom';

interface ImageBlockProps {
  path: string;
  img: string;
  label: string;
}

const ImageBlock = ({ path, img, label }: ImageBlockProps) => {
  return (
    <Link to={path}>
      <div className="relative w-96 h-96 rounded-xl">
        <h2 className="uppercase absolute md:p-8 p-4 mix-blend-difference hover-image text-sm">
          {label}
        </h2>
        <img src={img} className="rounded-xl hover-image" />
      </div>
    </Link>
  );
};

export default ImageBlock;
