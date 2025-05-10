import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuestionnaireStore } from '@features/questionnaire/model/questionnaire-store';
import { QuestionnaireLayout, ResultsView, TIconName } from '@shared/ui';

/**
 * Página de resultados del cuestionario
 * Muestra el resultado personalizado y recomendaciones
 */
const QuestionnaireResultsPage: FC = () => {
  const navigate = useNavigate();
  const lastResult = useQuestionnaireStore((state) => state.lastResult);
  const selectedCategory = useQuestionnaireStore(
    (state) => state.selectedCategory,
  );
  const resetQuestionnaire = useQuestionnaireStore(
    (state) => state.resetQuestionnaire,
  );

  // Redireccionar si no hay resultado
  useEffect(() => {
    if (!lastResult) {
      navigate('/categories');
    }
  }, [lastResult, navigate]);

  /**
   * Manejador para iniciar el aprendizaje
   */
  const handleStartLearning = () => {
    // En un caso real, esto llevaría al dashboard o página de aprendizaje
    navigate('/dashboard');
  };

  /**
   * Manejador para hacer otra evaluación
   */
  const handleNewAssessment = () => {
    resetQuestionnaire();
    navigate('/categories');
  };

  /**
   * Manejador para salir
   */
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/');
  };

  // Si no hay resultado, no renderizar (useEffect redireccionará)
  if (!lastResult) {
    return null;
  }

  return (
    <QuestionnaireLayout
      title={`Resultados - ${selectedCategory?.name || ''}`}
      onExit={handleExit}
    >
      <ResultsView
        title="¡Tu plan personalizado está listo!"
        subtitle={`Has sido clasificado en nivel: ${getLevelName(lastResult.skillLevel)}`}
        characterMessage="¡Perfecto! Ahora sabemos exactamente por dónde empezar."
        characterMood="celebrating"
        resultItems={lastResult.recommendations.map((rec) => ({
          id: rec.id,
          title: rec.title,
          description: rec.description || '',
          icon: getPriorityIcon(rec.priority),
        }))}
        primaryButtonText="Comenzar mi aprendizaje"
        secondaryButtonText="Hacer otra evaluación"
        onPrimaryButtonClick={handleStartLearning}
        onSecondaryButtonClick={handleNewAssessment}
      />
    </QuestionnaireLayout>
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
 * Obtiene el icono según la prioridad de la recomendación
 */
function getPriorityIcon(priority: string): TIconName {
  switch (priority) {
    case 'high':
      return 'star';
    case 'medium':
      return 'info';
    case 'low':
      return 'flag';
    default:
      return 'info';
  }
}

export default QuestionnaireResultsPage;
