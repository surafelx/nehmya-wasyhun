import { useParams } from 'react-router-dom';
import { Gallery } from '../components';
import PageTransition from './PageTransition';
import Winter from '../assets/winter.webp';
import Women from '../assets/women.webp';

const WorkShowcase = () => {
  const params = useParams();
  const imgs = [Women, Winter, Women, Winter, Women, Winter, Women];

  return (
    <PageTransition className="py-20 md:px-14 px-8  ">
      <div>
        <h1>{params.name?.toString()}</h1>
        <Gallery imgs={imgs} />
      </div>
    </PageTransition>
  );
};

export default WorkShowcase;
