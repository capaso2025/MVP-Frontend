import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@shared/ui';

/**
 * Página 404 - No encontrada
 * Se muestra cuando el usuario navega a una ruta que no existe
 */
const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-xl text-center">
        <div className="text-primary mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>

        <Typography variant="h2" component="h1" className="mb-2">
          ¡Oops!
        </Typography>

        <Typography variant="h4" component="h2" className="mb-6">
          Página no encontrada
        </Typography>

        <Typography variant="body1" color="secondary" className="mb-8">
          La página que estás buscando no existe o ha sido movida. No te
          preocupes, podemos ayudarte a encontrar tu camino.
        </Typography>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary" onClick={() => navigate('/')}>
            Volver al inicio
          </Button>

          <Button variant="outline" onClick={() => navigate(-1)}>
            Volver atrás
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
