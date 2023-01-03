import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useDeviceType from '../../hooks/useDeviceType';
import { CursorType } from '../../interfaces';
import Arrow from '../../assets/arrow-diagonal.svg';

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
    return <></>;
  }

  const variants = {
    default: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    'hover-link': {
      scale: 4.5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    'hover-image': {
      scale: 4.5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      data-testid="cursor"
      className="mix-blend-difference fixed z-[100] pointer-events-none"
      animate={{ x: cursorPos.x - 3, y: cursorPos.y - 3 }}
      transition={{ duration: 0.02 }}
    >
      <motion.div
        className="w-4 h-4 bg-primary rounded-full mix-blend-difference"
        variants={variants}
        animate={cursorType}
      />
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: cursorType === 'hover-image' ? 5 : 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        src={Arrow}
        className="scale-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
};

export default Cursor;
