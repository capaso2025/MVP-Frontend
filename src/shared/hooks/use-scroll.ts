import { useEffect, useState } from 'react';

export const useScroll = ({ height = 0 }: { height?: number }) => {
  const [scrolled, setScrolled] = useState(false);
  console.log('🏝️ ~ useScroll ~ scrolled:', scrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > height);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Llamar al inicio para verificar posición inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [height]);

  return { scrolled };
};
