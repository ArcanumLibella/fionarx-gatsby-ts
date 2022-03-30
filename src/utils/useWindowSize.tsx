import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

import { BREAKPOINTS } from "@/constants/Breakpoints";

const isBrowser = () => typeof window !== "undefined";

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = isBrowser() && window;
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
    if (isBrowser()) {
      window.addEventListener("resize", debouncedFunction);
      return () => window.removeEventListener("resize", debouncedFunction);
    }
    return null;
  }, []);

  return windowDimensions;
};

export const useIsMobile = () => {
  const { width } = useWindowSize();

  return width <= BREAKPOINTS.tablet;
};
