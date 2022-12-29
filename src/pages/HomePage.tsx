import { HomeCarousel } from '../components';
import PageTransition from './PageTransition';
import Women from '../assets/women.webp';

const HomePage = () => {
  return (
    <PageTransition className="md:px-14 px-4 md:py-20 py-10 relative">
      <div className="w-screen h-screen">
        <HomeCarousel imgs={[Women, Women, Women]} />
      </div>
    </PageTransition>
  );
};

export default HomePage;
