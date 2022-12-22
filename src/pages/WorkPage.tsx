import { ImageBlock, Sortbar } from '../components';
import Winter from '../assets/winter.webp';
import PageTransition from './PageTransition';
const WorkPage = () => {
  const images = [
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter1',
      className: 'col-span-6',
    },
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter2',
      className: 'col-span-6',
    },
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter3',
      className: 'col-span-12',
    },
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter4',
      className: 'col-span-4',
    },
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter5',
      className: 'col-span-4',
    },
    {
      path: '/work/winter',
      img: Winter,
      label: 'Winter6',
      className: 'col-span-4',
    },
  ];

  return (
    <PageTransition className="pt-20 px-4">
      <h1 className="uppercase md:text-8xl text-4xl md:px-8 px-2 md:my-16 mb-8">
        All work
      </h1>
      <section className="md:grid flex flex-col md:grid-cols-12 grid-cols-1 gap-4">
        {images.map((image) => (
          <ImageBlock
            key={image.label}
            path={image.path}
            img={image.img}
            label={image.label}
            className={image.className}
          />
        ))}
      </section>
      <Sortbar />
    </PageTransition>
  );
};

export default WorkPage;
