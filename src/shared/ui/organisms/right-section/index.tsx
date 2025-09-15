import { X } from 'lucide-react';
import React from 'react';
import UserStats from '../user-stats';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { useGetInfo } from '@/features/auth/info/hooks/use-get-info';

interface RightSectionProps {
  open: boolean;
  onClose: () => void;
}

const RightSection: React.FC<RightSectionProps> = ({ open, onClose }) => {
  const { data } = useGetInfo();
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`fixed top-0 right-0 grid grid-rows-[auto_max-content] z-50 p-6 pt-12 h-full w-[400px] bg-white shadow-lg transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ willChange: 'transform' }}
        role="dialog"
        aria-modal="true"
      >
        <Button variant='ghost' className="absolute top-4 right-4 text-xl" onClick={onClose} aria-label="Cerrar"><X /></Button>
        <div>
          <Typography className='font-semibold mb-4' variant='h4'>Hola, <Typography variant='h4' as="span" className='text-primary-2'>{data?.firstName}</Typography></Typography>
          <UserStats />
        </div>
        <Button variant='outline' onClick={() => {
          localStorage.removeItem('t');
          window.location.replace('/login');
        }}>Cerrar sesión</Button>
      </aside>
    </>
  );
};

export default RightSection;