import useWindowSize from "hooks/utilities/use-window-size";
import { useEffect } from "react";

/**
 * 100vh doesn't work as expected on iOS Safari,
 * so as a workaround, we'll compute the adjusted
 * value and set a CSS variable --vh.
 */
export default function useMobileSafariVhShim() {
    const { height } = useWindowSize();

    useEffect(() => {
        document.documentElement.style.setProperty("--vh", `${height * 0.01}px`);
    }, [height]);
}
