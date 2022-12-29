import { HomeCarousel } from '../components';
import PageTransition from './PageTransition';
import Women from '../assets/women.webp';
import ArrowDiagonal from '../assets/arrow-diagonal.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <PageTransition className="md:px-14 px-4 md:py-20 py-12 w-full h-full">
      <HomeCarousel imgs={[Women, Women, Women]} />
      <Link
        to="/work"
        className="flex items-center gap-4 fixed right-0 bottom-0 w-full md:justify-end justify-center md:px-14 py-4 z-10 hover-link"
      >
        <span className="uppercase md:text-xl pointer-events-none">
          See all work
        </span>
        <div className="bg-white md:w-12 md:h-12 w-8 h-8 rounded-full pointer-events-none">
          <img
            src={ArrowDiagonal}
            alt="Diagonal Arrow"
            className="md:scale-[0.7] scale-[0.6]"
          />
        </div>
      </Link>
    </PageTransition>
  );
};

export default HomePage;
