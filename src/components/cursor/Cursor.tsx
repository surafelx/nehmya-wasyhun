import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CursorType } from '../../interfaces';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<CursorType>('default');

  const handleCursor = (e: MouseEvent) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (element?.classList.contains('hover-link')) {
      setCursorType('hover-link');
    } else if (element?.classList.contains('hover-image')) {
      setCursorType('hover-image');
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
      x: cursorPos.x,
      y: cursorPos.y,
      transition: { duration: 0 },
    },
    'hover-link': {
      x: cursorPos.x,
      y: cursorPos.y,
      scale: 4.5,
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
      className="w-4 h-4 bg-secondary-gray rounded-full mix-blend-difference fixed z-50 pointer-events-none"
      variants={variants}
      animate={cursorType}
    />
  );
};

export default Cursor;
