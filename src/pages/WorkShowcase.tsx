import { useParams } from 'react-router-dom';
import { Gallery, List } from '../components';
import { motion, useInView } from 'framer-motion';
import PageTransition from './PageTransition';
import Winter from '../assets/winter.webp';
import Women from '../assets/women.webp';
import ArrowBottom from '../assets/arrow-bottom.svg';
import { useRef } from 'react';

const WorkShowcase = () => {
  const descRef = useRef<HTMLElement>(null);
  const descInView = useInView(descRef);
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
    <PageTransition className="py-20">
      <section className="md:px-14 px-8">
        <h1>{params.name?.toString()}</h1>
        <Gallery imgs={imgs} />
        <motion.div
          className="md:py-16 py-6 font-thin uppercase text-sm flex justify-between"
          animate={{
            opacity: descInView ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-4">
            <span>{params.name?.toString()}</span>
            <span className="text-gray-500">tagtagtag</span>
          </div>
          <a href="#desc">
            <img src={ArrowBottom} className="scale-[1.8] hover-link" />
          </a>
        </motion.div>
      </section>
      <section
        id="desc"
        ref={descRef}
        className="uppercase md:mb-52 mb-28 md:px-14 px-8"
      >
        <span className="text-gray-500 text-xl">tagtagtag</span>
        <h1 className="md:text-7xl text-3xl">KALASH FEAT DAMSO - MALPOLIS</h1>
      </section>
      {sections.map((section) => (
        <section className="md:px-14 px-8">
          <h2 className="uppercase md:text-5xl text-3xl md:mb-14 mb-4 mt-20">
            {section.title}
          </h2>
          <List items={section.listItems} />
        </section>
      ))}
    </PageTransition>
  );
};

export default WorkShowcase;
