import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const main = document.getElementById('main');
  const [scrollPosY, setScrollPosY] = useState(0);

  const onScroll = () => {
    if (!main) {
      return;
    }

    setScrollPosY(main.scrollTop);
  };

  useEffect(() => {
    if (!main) {
      return;
    }

    main.addEventListener('scroll', onScroll);

    return () => main.removeEventListener('scroll', onScroll);
  }, [main]);

  return scrollPosY;
};

export default useScrollPosition;
