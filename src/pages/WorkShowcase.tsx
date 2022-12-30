import { useParams } from 'react-router-dom';
import { Footer, Gallery, List, MobileGallery } from '../components';
import { motion, useInView } from 'framer-motion';
import PageTransition from './PageTransition';
import ArrowBottom from '../assets/arrow-bottom.svg';
import { useEffect, useRef, useState } from 'react';
import useDeviceType from '../hooks/useDeviceType';
import albums from '../data/albums.json';
import { Album } from '../interfaces';

const WorkShowcase = () => {
  const [album, setAlbum] = useState<Album | undefined>(undefined);
  const params = useParams();
  const descRef = useRef<HTMLElement>(null);
  const descInView = useInView(descRef);
  const deviceType = useDeviceType();

  useEffect(() => {
    const index = albums.findIndex((album) => params.key === album.key);
    setAlbum(albums[index]);
  }, []);

  const sections = [
    {
      title: 'Tech Specs',
      listItems: [
        {
          label: 'Aspect Ratio',
          value: album?.specs.aspect || '-',
        },
        {
          label: 'Format',
          value: album?.specs.format || '-',
        },
        {
          label: 'Camera',
          value: album?.specs.camera || '-',
        },
        {
          label: 'Lenses',
          value: album?.specs.lenses || '-',
        },
      ],
    },
    {
      title: 'Credits',
      listItems: [
        {
          label: 'Director',
          value: album?.credits.direc || '-',
        },
        {
          label: 'Director of photography',
          value: album?.credits.photoDirec || '-',
        },
        {
          label: 'Colorist',
          value: album?.credits.colorist || '-',
        },
        {
          label: 'Production',
          value: album?.credits.prod || '-',
        },
        {
          label: 'Post Production',
          value: album?.credits.postProd || '-',
        },
      ],
    },
  ];

  return (
    <PageTransition className="pt-20">
      <section className="md:pl-14 px-8">
        {deviceType !== 'desktop' ? (
          <img
            src={album?.images[0]}
            alt={album?.name}
            className="rounded-xl"
          />
        ) : (
          <Gallery imgs={album?.images} />
        )}
        <motion.div
          className="md:py-20 py-6 font-thin uppercase text-sm flex justify-between"
          animate={{
            opacity: descInView ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-4">
            <span>{album?.name}</span>
            <span className="text-gray-500">{album?.tag}</span>
          </div>
          <a href="#desc" tabIndex={descInView ? -1 : 0}>
            <img src={ArrowBottom} className="scale-[1.8] hover-link" />
          </a>
        </motion.div>
      </section>
      <section
        id="desc"
        ref={descRef}
        className="uppercase md:mb-52 mb-28 work-section"
      >
        <span className="text-gray-500 text-xl">{album?.tag}</span>
        <h1 className="md:text-7xl text-3xl">{album?.name}</h1>
      </section>
      {deviceType !== 'desktop' ? (
        <section className="md:px-14 px-8">
          <h2 className="uppercase md:text-5xl text-3xl md:mb-14 mb-4 mt-20">
            Gallery
          </h2>
          <MobileGallery imgs={album?.images.slice(1)} />
        </section>
      ) : null}
      {sections.map((section) => (
        <section key={section.title} className="work-section">
          <h2 className="uppercase md:text-5xl text-3xl md:mb-14 mb-4 mt-20">
            {section.title}
          </h2>
          <List items={section.listItems} />
        </section>
      ))}
      <Footer />
    </PageTransition>
  );
};

export default WorkShowcase;
