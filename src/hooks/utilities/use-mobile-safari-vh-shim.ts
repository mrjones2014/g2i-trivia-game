import useWindowSize from "hooks/utilities/use-window-size";
import { useEffect } from "react";
// @ts-ignore no types package
import is from "is_js";

/**
 * 100vh doesn't work as expected on iOS Safari,
 * so as a workaround, we'll compute the adjusted
 * value and set a CSS variable --vh.
 */
export default function useMobileSafariVhShim() {
  const { height } = useWindowSize();

  useEffect(() => {
    // we can use regular vh if not safari
    if (!is.safari()) {
      return;
    }

    document.documentElement.style.setProperty("--vh", `${height * 0.01}px`);
  }, [height]);
}
