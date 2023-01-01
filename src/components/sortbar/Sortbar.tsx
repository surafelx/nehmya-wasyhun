import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowLeft from '../../assets/arrow-left.svg';
import useWindowWidth from '../../hooks/useWindowWidth';

interface SortbarProps {
  options: string[];
  currentOption: string;
  setCurrentOption: (option: string) => void;
}

const Sortbar = ({
  options,
  currentOption,
  setCurrentOption,
}: SortbarProps) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const windowWidth = useWindowWidth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.2 },
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="md:w-[550px] w-3/4 fixed bg-primary left-1/2 -translate-x-1/2 z-30 rounded-full h-10 bottom-5 md:h-14 md:bottom-12"
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
                  option === currentOption ? 'bg-secondary-black' : ''
                }`}
                key={option}
              >
                <button
                  onClick={() => {
                    setCurrentOption(option);
                    setIsListOpen(false);
                  }}
                  className="uppercase font-thin hover-link mix-blend-difference w-full p-2"
                >
                  {option}
                </button>
              </li>
            ))}
          </motion.ul>
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className="flex justify-center items-center h-full w-full hover-link text-sm"
          >
            <span className="text-center text-secondary-black uppercase hover-link">
              {currentOption}
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
            <li className="mx-1 w-full rounded-full relative" key={option}>
              <button
                className="uppercase py-2.5 px-5 w-full hover-link mix-blend-difference whitespace-nowrap"
                onClick={() => setCurrentOption(option)}
              >
                {option}
              </button>
              {currentOption === option ? (
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
