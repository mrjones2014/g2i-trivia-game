import { useEffect, useState } from "react";

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
