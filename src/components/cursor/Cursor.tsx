import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CursorType } from '../../interfaces';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<CursorType>('default');

  const handleCursor = (e: MouseEvent) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (element?.tagName === 'BUTTON') {
      setCursorType('hover');
    } else {
      setCursorType('default');
    }

    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleCursor);

    return () => window.removeEventListener('mousemove', handleCursor);
  }, []);

  const variants = {
    default: {
      x: cursorPos.x - 5,
      y: cursorPos.y - 5,
      transition: { duration: 0 },
    },
    hover: {
      x: cursorPos.x - 5,
      y: cursorPos.y - 5,
      scale: 4,
      transition: {
        duration: 0,
        scale: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <motion.div
      className="w-4 h-4 bg-secondary-gray rounded-full mix-blend-difference z-50"
      variants={variants}
      animate={cursorType}
    />
  );
};

export default Cursor;
