import { useEffect, useState } from 'react';

interface IResolutionProps {
  width: number;
  height: number;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IResolutionProps>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize((prev) => {
        return {
          ...prev,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
