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
      initial={{
        x: '200%',
        opacity: 0,
        scale: 0.8,
        position: 'absolute',
      }}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        position: 'initial',
        transformOrigin: 'top',
      }}
      exit={{
        x: '-200%',
        scale: 0.8,
        transformOrigin: 'top',
        position: 'absolute',
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
          delay: 0.5,
          duration: 1,
        },
        x: {
          delay: 0.4,
          duration: 0.7,
        },
        scale: {
          delay: 1.2,
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
