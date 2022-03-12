import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import { BREAKPOINTS } from '@/constants/Breakpoints';

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const useWindowSize = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, [setWindowDimensions]);

  const debouncedFunction = debounce(handleResize, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedFunction);
    return () => window.removeEventListener('resize', debouncedFunction);
  }, []);

  return windowDimensions;
};

export const useIsMobile = () => {
  const { width } = useWindowSize();

  return width <= BREAKPOINTS.tablet;
};
