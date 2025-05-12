import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useAuthStore,
} from '@/features/auth/auth-store';
import { useQuestionnaireStore } from '@features/questionnaire/model/questionnaire-store';
import { Button, Card, Typography, Icon } from '@shared/ui';

/**
 * Página de Dashboard
 * Muestra las recomendaciones y plan de aprendizaje personalizado
 */
const DashboardPage: FC = () => {
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);
  const lastResult = useQuestionnaireStore((state) => state.lastResult);
  const selectedCategory = useQuestionnaireStore(
    (state) => state.selectedCategory,
  );

  // Redireccionar si no hay resultado (cuando accede directamente)
  useEffect(() => {
    if (!lastResult && !user) {
      navigate('/categories');
    }
  }, [lastResult, user, navigate]);

  return (
    <div className="bg-background min-h-screen">
      {/* Barra superior */}
      <header className="border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary mr-8 text-2xl font-bold">CAPO</div>
            <nav className="hidden space-x-6 md:flex">
              <a href="#dashboard" className="font-medium text-gray-900">
                Dashboard
              </a>
              <a href="#learning" className="text-gray-600 hover:text-gray-900">
                Aprendizaje
              </a>
              <a href="#progress" className="text-gray-600 hover:text-gray-900">
                Progreso
              </a>
            </nav>
          </div>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              leftIcon="user"
              onClick={() => navigate('/profile')}
            >
              {user?.email || 'Perfil'}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Encabezado de bienvenida */}
        <div className="mb-8">
          <Typography variant="h3" component="h1" className="mb-2">
            ¡Bienvenido a tu dashboard, {user?.email || 'CAPO'}!
          </Typography>
          <Typography variant="body1" color="secondary">
            Aquí puedes ver tu progreso y recomendaciones personalizadas.
          </Typography>
        </div>

        {/* Resumen del plan */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            title="Tu Plan Personalizado"
            subtitle={selectedCategory?.name || 'Habilidad seleccionada'}
            icon="star"
            iconBgColor="bg-yellow-100"
            padded
            className="md:col-span-2"
          >
            <Typography variant="body1" className="mb-4">
              Nivel actual:{' '}
              <strong>
                {lastResult ? getLevelName(lastResult.skillLevel) : 'Pendiente'}
              </strong>
            </Typography>

            <div className="flex items-center justify-between">
              <Button
                variant="primary"
                onClick={() => navigate('/questionnaire')}
              >
                Continuar aprendizaje
              </Button>

              <Typography variant="caption" color="secondary">
                Última actualización:{' '}
                {lastResult
                  ? new Date(lastResult.generatedAt).toLocaleDateString()
                  : 'Pendiente'}
              </Typography>
            </div>
          </Card>

          <Card title="Progreso general" icon="heart" padded>
            <div className="flex h-32 flex-col items-center justify-center">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typography variant="h3" className="text-primary font-bold">
                    {lastResult ? '15%' : '0%'}
                  </Typography>
                </div>
                <svg className="h-24 w-24 -rotate-90 transform">
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="36"
                    stroke="#4ade80"
                    strokeWidth="12"
                    strokeDasharray={226.2}
                    strokeDashoffset={lastResult ? 192.3 : 226.2}
                    fill="transparent"
                  />
                </svg>
              </div>
              <Typography variant="caption" color="secondary" className="mt-2">
                Completa tus primeras lecciones
              </Typography>
            </div>
          </Card>
        </div>

        {/* Recomendaciones */}
        <div className="mb-8">
          <Typography variant="h4" component="h2" className="mb-4">
            Recomendaciones para ti
          </Typography>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lastResult?.recommendations.map((rec) => (
              <Card
                key={rec.id}
                title={rec.title}
                subtitle={`Prioridad: ${getPriorityLabel(rec.priority)}`}
                // icon={getPriorityIcon(rec.priority)} //TODO: Corregir icon
                iconBgColor={getPriorityColor(rec.priority)}
                padded
                hoverable
                onClick={() => {
                  /* Navegar a la lección */
                }}
              >
                <Typography variant="body2" className="mb-4">
                  {rec.description ||
                    'Lección recomendada basada en tu evaluación.'}
                </Typography>

                <div className="text-right">
                  <Button variant="outline" size="sm">
                    Ver lección
                  </Button>
                </div>
              </Card>
            ))}

            {!lastResult?.recommendations.length && (
              <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-8">
                <Icon name="info" size="lg" className="mb-4 text-gray-400" />
                <Typography variant="body1" className="mb-4 text-center">
                  No hay recomendaciones disponibles todavía.
                </Typography>
                <Button
                  variant="primary"
                  onClick={() => navigate('/categories')}
                >
                  Realizar evaluación
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

/**
 * Convierte niveles de habilidad a nombres legibles
 */
function getLevelName(level: string): string {
  const levels: Record<string, string> = {
    beginner: 'Principiante',
    elementary: 'Elemental',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    proficient: 'Experto',
  };

  return levels[level] || level;
}

/**
 * Obtiene etiqueta para nivel de prioridad
 */
function getPriorityLabel(priority: string): string {
  const labels: Record<string, string> = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  };

  return labels[priority] || 'Normal';
}

/**
 * Obtiene el icono según la prioridad
 * TODO: Depende de corrección de icono
 */
// function getPriorityIcon(priority: string): string {
//   switch (priority) {
//     case 'high':
//       return 'star';
//     case 'medium':
//       return 'info';
//     case 'low':
//       return 'flag';
//     default:
//       return 'info';
//   }
// }

/**
 * Obtiene el color de fondo según la prioridad
 */
function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high':
      return 'bg-yellow-100';
    case 'medium':
      return 'bg-blue-100';
    case 'low':
      return 'bg-gray-100';
    default:
      return 'bg-gray-100';
  }
}

export default DashboardPage;
