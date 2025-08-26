import { useRenderStore } from '@/shared/store/render-store';
import { useEffect } from 'react';
import Spinner from '../../atoms/Spinner';
import { Typography } from '../../atoms/Typography';

function Loading() {
  const loading = useRenderStore((state) => state.loading);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [loading]);

  return loading ? (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-[1000] grid place-content-center bg-[#162335bf]">
      <div className='flex items-center justify-center mb-8'>
        <Spinner />
      </div>
      <Typography variant='h5' className="text-white font-normal">Iniciando la sesión...</Typography>
    </div>
  ) : (
    <></>
  );
}

export default Loading;
