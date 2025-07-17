import { Typography } from '@/shared/ui';
import { useEffect, useRef, useState } from 'react';

export default function ScrolledText() {
  // scroll handler: el primero texto se mantiene fijo y el de abajo sube
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const thirdTextRef = useRef<HTMLDivElement>(null);
  const fourthTextRef = useRef<HTMLDivElement>(null);
  const [showFirstText, setShowFirstText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  useEffect(() => {
    const checkIfCenteredOrAfter = () => {
      const windowHeight = window.innerHeight;
      if (firstTextRef.current) {
        const rect = firstTextRef.current.getBoundingClientRect();
        // Check if the center of the element is within the center 20% of the viewport
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const threshold = windowHeight * 0.1; // 10% above and below center
        if (Math.abs(elementCenter - viewportCenter) < threshold) {
          setShowFirstText(true);
          setShowSecondText(false);
          setShowThirdText(false);
        }
      }
      if (secondTextRef.current) {
        const rect = secondTextRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const threshold = windowHeight * 0.1; // 10% above and below center
        if (Math.abs(elementCenter - viewportCenter) < threshold) {
          setShowSecondText(true);
          setShowFirstText(false);
          setShowThirdText(false);
        }
      }
      if (thirdTextRef.current) {
        const rect = thirdTextRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const threshold = windowHeight * 0.1; // 10% above and below center
        if (Math.abs(elementCenter - viewportCenter) < threshold) {
          setShowThirdText(true);
          setShowSecondText(false);
          setShowFirstText(false);
        }
      }
      if (fourthTextRef.current) {
        const rect = fourthTextRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const threshold = windowHeight * 0.1; // 10% above and below center
        if (Math.abs(elementCenter - viewportCenter) < threshold) {
          setShowThirdText(false);
          setShowSecondText(false);
          setShowFirstText(false);
        }
      }
    };

    window.addEventListener('scroll', checkIfCenteredOrAfter);
    window.addEventListener('resize', checkIfCenteredOrAfter);
    // Run on mount
    checkIfCenteredOrAfter();

    return () => {
      window.removeEventListener('scroll', checkIfCenteredOrAfter);
      window.removeEventListener('resize', checkIfCenteredOrAfter);
    };
  }, []);

  return (
    <>
      <div
        ref={firstTextRef}
        className={`mx-auto flex h-[100vh] w-[90%] items-center justify-center ${showFirstText ? 'sticky top-0 z-0' : ''}`}
      >
        <div>
          <Typography className="!text-[50px] font-bold text-white md:!text-[75px] lg:!text-[100px]">
            ¿Cuántos días más vas a seguir sintiendo que estás desperdiciando tu
            potencial?
          </Typography>
        </div>
      </div>
      <div
        ref={secondTextRef}
        className={`relative z-10 flex h-[100vh] items-center justify-center ${showSecondText ? 'sticky top-0 z-0' : ''}`}
      >
        <div className="from-primary-dark absolute top-[-300px] left-0 h-[300px] w-full bg-gradient-to-t to-transparent"></div>
        <div className="bg-primary-dark grid h-[100vh] place-content-center px-[5%]">
          <Typography className="!text-[50px] font-bold text-white md:!text-[75px] lg:!text-[100px]">
            Sabes que puedes dar más. Pero algo te está frenando.
          </Typography>
        </div>
        <div className="from-primary-dark absolute bottom-[-300px] left-0 h-[300px] w-full bg-gradient-to-b to-transparent"></div>
      </div>
      {/* add thrid text */}
      <div
        ref={thirdTextRef}
        className={`relative z-10 flex h-[100vh] items-center justify-center ${showThirdText ? 'sticky top-0 z-0' : ''}`}
      >
        <div className="from-primary-dark absolute top-[-300px] left-0 h-[300px] w-full bg-gradient-to-t to-transparent"></div>
        <div className="bg-primary-dark grid h-[100vh] place-content-center px-[5%]">
          <Typography className="!text-[50px] font-bold text-white md:!text-[75px] lg:!text-[100px]">
            El tiempo pasa. Y tú sientes que no avanzas.
          </Typography>
        </div>
        <div className="from-primary-dark absolute bottom-[-300px] left-0 h-[300px] w-full bg-gradient-to-b to-transparent"></div>
      </div>
      {/* add fourth text */}
      <div
        ref={fourthTextRef}
        className={`relative z-10 flex h-[100vh] items-center justify-center`}
      >
        <div className="from-primary-dark absolute top-[-300px] left-0 h-[300px] w-full bg-gradient-to-t to-transparent"></div>
        <div className="bg-primary-dark grid h-[100vh] place-content-center px-[5%]">
          <Typography className="!text-[50px] font-bold text-white md:!text-[75px] lg:!text-[100px]">
            El cambio empieza hoy. Da el primer paso hacia tu mejor versión.
          </Typography>
        </div>
        <div className="from-primary-dark absolute bottom-[-300px] left-0 h-[300px] w-full bg-gradient-to-b to-transparent"></div>
      </div>
    </>
  );
}
