import { LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
import { SortOptions } from '../../interfaces';

const Sortbar = () => {
  const [sortOption, setSortOption] = useState<SortOptions>('all');

  const options = [
    {
      id: 'all',
      label: 'All',
    },
    {
      id: 'ocean',
      label: 'Ocean',
    },
    {
      id: 'winter',
      label: 'Winter',
    },
    {
      id: 'commercials',
      label: 'Commercials',
    },
  ];

  return (
    <div className="md:w-[550px] w-3/4 h-14 fixed bg-primary bottom-12 left-1/2 -translate-x-1/2 z-40 rounded-full ">
      <ul className="w-full h-full flex justify-evenly items-center">
        {options.map((option) => (
          <li className="mx-1 w-full rounded-full relative" key={option.id}>
            <button
              className="uppercase py-2.5 px-5 w-full hover-link mix-blend-difference"
              onClick={() => setSortOption(option.id)}
            >
              {option.label}
            </button>
            {sortOption === option.id ? (
              <motion.div
                layoutId="active"
                className="w-full h-full bg-black rounded-full absolute top-0 -z-10"
              />
            ) : null}
          </li>
        ))}
        <motion.div layoutId="blob" />
      </ul>
    </div>
  );
};

export default Sortbar;
