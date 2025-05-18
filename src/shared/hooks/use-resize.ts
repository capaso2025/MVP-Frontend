import { useState, useEffect } from 'react';

export function useResize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1350);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1350);
    };

    const resizeObserver = new ResizeObserver(checkScreenSize);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { isMobile };
}
