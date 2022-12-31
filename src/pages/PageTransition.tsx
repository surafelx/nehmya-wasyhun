import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: 'top' }}
      initial={{
        x: '150%',
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      exit={{
        x: '-150%',
        scale: 0.8,
        opacity: 0,
        transition: {
          scale: {
            duration: 0.5,
          },
          opacity: {
            delay: 0.5,
            duration: 0.8,
          },
          x: {
            delay: 0.6,
            duration: 0.7,
          },
        },
      }}
      transition={{
        opacity: {
          delay: 0.2,
          duration: 1,
        },
        x: {
          duration: 0.8,
        },
        scale: {
          delay: 1,
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
