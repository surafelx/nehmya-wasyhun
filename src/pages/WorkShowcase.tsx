import { useParams } from 'react-router-dom';
import { Footer, Gallery, List, MobileGallery } from '../components';
import { motion, useInView } from 'framer-motion';
import PageTransition from './PageTransition';
import Winter from '../assets/winter.webp';
import Women from '../assets/women.webp';
import ArrowBottom from '../assets/arrow-bottom.svg';
import { useRef } from 'react';
import useDeviceType from '../hooks/useDeviceType';

const WorkShowcase = () => {
  const descRef = useRef<HTMLElement>(null);
  const descInView = useInView(descRef);
  const deviceType = useDeviceType();
  const params = useParams();

  const imgs = [
    Women,
    Winter,
    Women,
    Winter,
    Women,
    Winter,
    Women,
    Women,
    Women,
    Women,
  ];

  const sections = [
    {
      title: 'Tech Specs',
      listItems: [
        {
          label: 'Aspect Ratio',
          value: '2:35',
        },
        {
          label: 'Format',
          value: 'Digital',
        },
        {
          label: 'Camera',
          value: 'Placeholder',
        },
        {
          label: 'Lenses',
          value: 'Placeholder',
        },
      ],
    },
    {
      title: 'Credits',
      listItems: [
        {
          label: 'Director',
          value: 'Placeholder',
        },
        {
          label: 'Director of photography',
          value: 'Placeholder',
        },
        {
          label: 'Colorist',
          value: 'Placeholder',
        },
        {
          label: 'Production',
          value: 'Placeholder',
        },
        {
          label: 'Post Production',
          value: 'Placeholder',
        },
      ],
    },
  ];

  return (
    <PageTransition className="pt-20">
      <section className="md:pl-14 px-8">
        {deviceType !== 'desktop' ? (
          <img src={imgs[0]} className="rounded-xl" />
        ) : (
          <Gallery imgs={imgs} />
        )}
        <motion.div
          className="md:py-20 py-6 font-thin uppercase text-sm flex justify-between"
          animate={{
            opacity: descInView ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-4">
            <span>{params.name?.toString()}</span>
            <span className="text-gray-500">tagtagtag</span>
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
        <span className="text-gray-500 text-xl">tagtagtag</span>
        <h1 className="md:text-7xl text-3xl">KALASH FEAT DAMSO - MALPOLIS</h1>
      </section>
      {deviceType !== 'desktop' ? (
        <section className="md:px-14 px-8">
          <h2 className="uppercase md:text-5xl text-3xl md:mb-14 mb-4 mt-20">
            Gallery
          </h2>
          <MobileGallery imgs={imgs.slice(1)} />
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
