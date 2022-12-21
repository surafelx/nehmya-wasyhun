import { ImageBlock } from '../components';
import Winter from '../assets/winter.webp';

const WorkPage = () => {
  return (
    <div className="pt-20">
      <h1 className="uppercase md:text-8xl text-4xl md:px-8 px-2 md:my-16 mb-8">
        All work
      </h1>
      <section>
        <ImageBlock path="/work/winter" img={Winter} label="Winter" />
      </section>
    </div>
  );
};

export default WorkPage;
