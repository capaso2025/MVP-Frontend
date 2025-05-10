import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuestionnaireStore } from '@features/questionnaire/model/questionnaire-store';
import { getMockQuestions } from '@features/questionnaire/api/mock-data';
import { QuestionnaireLayout, Button, Typography } from '@shared/ui';

/**
 * Estados posibles para la animación de mensajes
 */
type TIntroState = 'initial' | 'reaction' | 'continue';

/**
 * Página de introducción al cuestionario
 * Muestra una animación antes de iniciar las preguntas
 */
const QuestionnaireIntro: FC = () => {
  const navigate = useNavigate();
  const selectedCategory = useQuestionnaireStore(
    (state) => state.selectedCategory,
  );
  const initQuestionnaire = useQuestionnaireStore(
    (state) => state.initQuestionnaire,
  );
  const resetQuestionnaire = useQuestionnaireStore(
    (state) => state.resetQuestionnaire,
  );

  // Estados para manejar la animación
  const [introState, setIntroState] = useState<TIntroState>('initial');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Verificar que exista una categoría seleccionada
  useEffect(() => {
    if (!selectedCategory) {
      navigate('/categories');
    }
  }, [selectedCategory, navigate]);

  /**
   * Manejador para el botón "Nací Listo"
   */
  const handleReadyClick = () => {
    setIsAnimating(true);

    // Cambiar al estado de reacción
    setTimeout(() => {
      setIntroState('reaction');

      // Después de mostrar la reacción, cambiar al estado de continuar
      setTimeout(() => {
        setIntroState('continue');
        setIsAnimating(false);
      }, 2000);
    }, 300);
  };

  /**
   * Manejador para iniciar el cuestionario
   */
  const handleStartQuestionnaire = () => {
    if (!selectedCategory) return;

    // Obtener preguntas del mock (en un caso real, vendrían de una API)
    const questions = getMockQuestions(selectedCategory.id);

    // Inicializar el cuestionario con las preguntas
    initQuestionnaire(selectedCategory, questions);

    // Navegar a la página principal del cuestionario
    navigate('/questionnaire/questions');
  };

  /**
   * Manejador para salir
   */
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/categories');
  };

  // Determinar el título según el estado
  const getTitle = (): string => {
    switch (introState) {
      case 'initial':
        return 'Antes que inicies tu camino...';
      case 'reaction':
        return '¡Wow!';
      case 'continue':
        return 'No pensé que elegirías tan rápido';
      default:
        return 'Antes que inicies tu camino...';
    }
  };

  return (
    <QuestionnaireLayout
      title={selectedCategory?.name || 'Cuestionario'}
      onExit={handleExit}
    >
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-6">
        <div
          className={`transform transition-all duration-300 ${
            isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {/* Logo CAPO */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
              <div className="border-primary flex h-24 w-24 items-center justify-center rounded-lg border-2">
                <Typography
                  variant="h4"
                  component="p"
                  className="text-primary font-bold"
                >
                  CAPO
                </Typography>
              </div>
            </div>
          </div>

          {/* Título animado */}
          <Typography
            variant="h3"
            component="h1"
            className="mb-12 text-center transition-all duration-300"
          >
            {getTitle()}
          </Typography>

          {/* Botón según el estado */}
          {introState === 'initial' && (
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleReadyClick}
            >
              ¡Nací listo!
            </Button>
          )}

          {introState === 'continue' && (
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleStartQuestionnaire}
            >
              Continuar
            </Button>
          )}
        </div>
      </div>
    </QuestionnaireLayout>
  );
};

export default QuestionnaireIntro;
