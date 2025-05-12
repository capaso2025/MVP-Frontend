import { useRenderStore } from '@/shared/store/render-store';
import { useEffect } from 'react';
import Spinner from '../../atoms/Spinner/Spinner';

function Loading() {
  const loading = useRenderStore((state) => state.loading);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  return loading ? (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-[1000] grid place-content-center bg-[#162335bf]">
      <Spinner />
      <p className="text-2xl text-white">Espera un momento por favor...</p>
    </div>
  ) : (
    <></>
  );
}

export default Loading;
