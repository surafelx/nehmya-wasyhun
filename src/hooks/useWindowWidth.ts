import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.addEventListener('resize', onResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
