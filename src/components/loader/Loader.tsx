import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

const Loader = ({ isLoading, setIsLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  const handleLoad = () => {
    let counter = 2;

    const intervalId = setInterval(() => {
      if (counter >= 100) {
        setIsLoading(false);
        clearInterval(intervalId);
      }
      counter += 2;
      setProgress((prev) => prev + 2);
    }, 8);
  };

  useEffect(() => {
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <motion.div
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ ease: [0.74, 0.2, 0.76, 1], duration: 0.8, delay: 0.2 }}
      className="fixed p-10 w-full h-full bg-primary text-secondary-black z-[60]"
    >
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="h-full w-full flex flex-col justify-between md:text-7xl text-4xl"
      >
        <span>RAPHAËL BOURDIN</span>
        <span className="text-right">
          {('000' + progress.toString()).slice(-3)}%
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
