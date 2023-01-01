import { Link } from 'react-router-dom';
import ArrowDiagonal from '../assets/arrow-diagonal.svg';
import PageTransition from './PageTransition';

const NotFound = () => {
  return (
    <PageTransition className="py-20 px-10 h-full">
      <section className="flex justify-center items-center h-full flex-col">
        <h1 className="uppercase md:text-8xl  text-5xl text-center">
          Page not found
        </h1>
        <Link
          to="/work"
          className="flex items-center gap-4 w-full justify-center md:px-14 py-4 z-10 hover-link"
        >
          <span className="uppercase md:text-xl pointer-events-none">
            Go back home
          </span>
          <div className="bg-white md:w-12 md:h-12 w-8 h-8 rounded-full pointer-events-none">
            <img
              src={ArrowDiagonal}
              alt="Diagonal Arrow"
              className="md:scale-[0.7] scale-[0.6]"
            />
          </div>
        </Link>
      </section>
    </PageTransition>
  );
};

export default NotFound;
