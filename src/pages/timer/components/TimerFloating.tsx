import { useEffect, useRef, useState } from 'react';
import { useTimer } from '../hooks/use-timer';
import MinimizedTimer from './MinimizedTimer';
import { useLocation } from '@tanstack/react-router';

export function TimerFloating() {
  const { isActive, isMinimized, toggleMinimized, position, updatePosition } =
    useTimer();
  const location = useLocation();
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0,
  });
  const floatingRef = useRef<HTMLDivElement>(null);

  // Minimizar automáticamente cuando no estamos en la página de Timer
  useEffect(() => {
    if (location.pathname !== '/timer' && !isMinimized) {
      toggleMinimized();
    }
  }, [location.pathname, isMinimized, toggleMinimized]);

  // Iniciar el arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    if (floatingRef.current) {
      const rect = floatingRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  // Manejar el movimiento durante el arrastre
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && floatingRef.current) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Asegurarse de que el componente no salga de la pantalla
      const maxX = window.innerWidth - floatingRef.current.offsetWidth;
      const maxY = window.innerHeight - floatingRef.current.offsetHeight;

      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));

      updatePosition({ x: boundedX, y: boundedY });
    }
  };

  // Finalizar el arrastre
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Agregar y eliminar event listeners para el arrastre
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Solo mostrar el flotante cuando:
  // 1. No estamos en la página de Timer
  // 2. El temporizador está activo
  if (location.pathname === '/timer' || !isActive) {
    return null;
  }

  return (
    <div
      ref={floatingRef}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 50,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        className="cursor-grab active:cursor-grabbing"
      >
        <MinimizedTimer />
      </div>
    </div>
  );
}
