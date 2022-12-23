import { motion } from 'framer-motion';
import { useState } from 'react';
import { SortOptions } from '../../interfaces';
import ArrowLeft from '../../assets/arrow-left.svg';
import useWindowWidth from '../../hooks/useWindowWidth';

interface OptionsArray {
  id: SortOptions;
  label: string;
}

const Sortbar = () => {
  const [sortOption, setSortOption] = useState<SortOptions>('all');
  const [isListOpen, setIsListOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const options: OptionsArray[] = [
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
    <motion.div
      transition={{ duration: 0.3 }}
      className={`md:w-[550px] w-3/4 fixed bg-primary left-1/2 -translate-x-1/2 z-40 rounded-full ${
        windowWidth <= 768 ? 'h-10 bottom-5' : 'h-14 bottom-12'
      }`}
    >
      {windowWidth <= 768 ? (
        <>
          <motion.ul
            initial={false}
            animate={{
              y: isListOpen ? 0 : 50,
              opacity: isListOpen ? 1 : 0,
              pointerEvents: isListOpen ? 'auto' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-12 left-0 bg-primary w-full rounded-3xl p-1.5 text-sm"
          >
            {options.map((option) => (
              <li
                className={`text-center rounded-full ${
                  option.id === sortOption ? 'bg-secondary-black' : ''
                }`}
                key={option.id}
              >
                <button
                  onClick={() => {
                    setSortOption(option.id);
                    setIsListOpen(false);
                  }}
                  className="uppercase font-thin hover-link mix-blend-difference w-full p-2"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </motion.ul>
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className="flex justify-center items-center h-full w-full hover-link text-sm"
          >
            <span className="text-center text-secondary-black uppercase hover-link">
              {sortOption}
            </span>
            <motion.img
              animate={{
                rotate: isListOpen ? -90 : 90,
              }}
              src={ArrowLeft}
              className="absolute right-5 mix-blend-difference"
            />
          </button>
        </>
      ) : (
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
      )}
    </motion.div>
  );
};

export default Sortbar;
