import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosY, setScrollPosY] = useState(0);

  const onScroll = () => {
    setScrollPosY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollPosY;
};

export default useScrollPosition;
