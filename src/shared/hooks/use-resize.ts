import { useState, useEffect } from 'react';

export function useResize(params?: { mobileWidth?: number }) {
  const mobileWidth = params?.mobileWidth || 768; // Default mobile width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileWidth);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= mobileWidth);
    };

    const resizeObserver = new ResizeObserver(checkScreenSize);
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { isMobile };
}
