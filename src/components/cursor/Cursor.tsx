import { motion } from 'framer-motion';
import { useEffect, useState, useLayoutEffect } from 'react';
import useDeviceType from '../../hooks/useDeviceType';
import { CursorType } from '../../interfaces';

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const deviceType = useDeviceType();

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

  if (deviceType === 'mobile' || deviceType === 'tablet') {
    return;
  }

  const variants = {
    default: {
      x: cursorPos.x - 3,
      y: cursorPos.y - 3,
      transition: { duration: 0.02 },
    },
    'hover-link': {
      x: cursorPos.x - 3,
      y: cursorPos.y - 3,
      scale: 4.5,
      transition: {
        duration: 0.02,
        scale: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <motion.div
      className="w-4 h-4 bg-primary rounded-full mix-blend-difference fixed z-50 pointer-events-none"
      variants={variants}
      animate={cursorType}
    />
  );
};

export default Cursor;
