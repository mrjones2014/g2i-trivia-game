import { useEffect, useState } from "react";

/**
 * Utility hook to get reactive references to the
 * current window width and height.
 */
export default function useWindowSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return {
    height,
    width,
  };
}
