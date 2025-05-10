import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  selectCurrentQuestion,
  selectCurrentResponse,
  selectHasNextQuestion,
  selectHasPreviousQuestion,
  useQuestionnaireStore,
} from '@features/questionnaire/model/questionnaire-store';
import {
  MessageScreen,
  QuestionScreen,
  QuestionnaireLayout,
  ResultsView,
  TIconName,
  WelcomeScreen,
} from '@shared/ui';
import type { IOptionItem } from '@shared/ui/molecules/OptionGroup/OptionGroup';

/**
 * Página principal del cuestionario
 * Maneja la lógica y el flujo de la experiencia del cuestionario
 */
const QuestionnairePage = () => {
  const navigate = useNavigate();

  // Acceder al estado global del cuestionario
  const questionnaire = useQuestionnaireStore((state) => state.questionnaire);
  const selectedCategory = useQuestionnaireStore(
    (state) => state.selectedCategory,
  );
  const lastResult = useQuestionnaireStore((state) => state.lastResult);
  const isLoading = useQuestionnaireStore((state) => state.isLoading);
  const error = useQuestionnaireStore((state) => state.error);

  // Acciones del cuestionario
  const goToNextQuestion = useQuestionnaireStore(
    (state) => state.goToNextQuestion,
  );
  const goToPreviousQuestion = useQuestionnaireStore(
    (state) => state.goToPreviousQuestion,
  );
  const answerQuestion = useQuestionnaireStore((state) => state.answerQuestion);
  const completeQuestionnaire = useQuestionnaireStore(
    (state) => state.completeQuestionnaire,
  );
  const resetQuestionnaire = useQuestionnaireStore(
    (state) => state.resetQuestionnaire,
  );

  // Selectores
  const currentQuestion = useQuestionnaireStore(selectCurrentQuestion);
  const currentResponse = useQuestionnaireStore(selectCurrentResponse);
  const hasNextQuestion = useQuestionnaireStore(selectHasNextQuestion);
  const hasPreviousQuestion = useQuestionnaireStore(selectHasPreviousQuestion);

  // Redirigir si no hay cuestionario inicializado
  useEffect(() => {
    if (!questionnaire && !isLoading && !lastResult) {
      navigate('/');
    }
  }, [questionnaire, isLoading, lastResult, navigate]);

  // Efecto para auto-avanzar en preguntas informativas
  useEffect(() => {
    if (
      currentQuestion?.type === 'informative' &&
      currentQuestion.autoAdvanceAfter &&
      currentQuestion.autoAdvanceAfter > 0
    ) {
      const timer = setTimeout(() => {
        if (hasNextQuestion) {
          goToNextQuestion();
        } else {
          completeQuestionnaire();
        }
      }, currentQuestion.autoAdvanceAfter);

      return () => clearTimeout(timer);
    }
    return; // TODO: Corregir retorno  por  por defecto
  }, [
    currentQuestion,
    hasNextQuestion,
    goToNextQuestion,
    completeQuestionnaire,
  ]);

  // Convertir las opciones del modelo de datos al formato esperado por el componente
  const optionItems = useMemo<IOptionItem[]>(() => {
    if (!currentQuestion?.options) return [];

    return currentQuestion.options.map((option) => ({
      id: option.id,
      title: option.text,
      description: option.description,
      // Convertir string de icono a TIconName o usar un icono por defecto
      icon: isIconName(option.icon) ? (option.icon as TIconName) : undefined,
    }));
  }, [currentQuestion]);

  // Obtener los IDs de opciones seleccionadas para la pregunta actual
  const selectedOptionIds = useMemo<string[]>(() => {
    return currentResponse?.selectedOptionIds || [];
  }, [currentResponse]);

  // Manejar la selección de opciones
  const handleSelectionChange = (values: string[]) => {
    if (currentQuestion) {
      answerQuestion(currentQuestion.id, values);
    }
  };

  // Manejar el avance a la siguiente pregunta
  const handleNext = () => {
    if (hasNextQuestion) {
      goToNextQuestion();
    } else {
      completeQuestionnaire();
    }
  };

  // Manejar el retroceso a la pregunta anterior
  const handlePrevious = () => {
    if (hasPreviousQuestion) {
      goToPreviousQuestion();
    }
  };

  // Manejar la salida del cuestionario
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/');
  };

  // Función para manejar el reinicio del cuestionario
  const handleRestart = () => {
    resetQuestionnaire();
    navigate('/categories');
  };

  // Renderizar pantalla según el tipo de pregunta
  const renderQuestionContent = () => {
    if (!currentQuestion || !questionnaire) return null;

    if (currentQuestion.type === 'informative') {
      return (
        <MessageScreen
          message={currentQuestion.title}
          submessage={currentQuestion.informativeContent}
          characterMessage={currentQuestion.characterMessage}
          characterMood={currentQuestion.characterMood}
          onContinue={handleNext}
          autoContinueAfter={currentQuestion.autoAdvanceAfter}
          continueButtonText="Continuar"
        />
      );
    }

    return (
      <QuestionScreen
        id={currentQuestion.id}
        title={currentQuestion.title}
        options={optionItems}
        selectedValues={selectedOptionIds}
        currentIndex={questionnaire.currentQuestionIndex + 1}
        totalQuestions={questionnaire.questions.length}
        characterMessage={currentQuestion.characterMessage || undefined}
        characterMood={currentQuestion.characterMood || undefined}
        multipleSelection={currentQuestion.type === 'multiple-choice'}
        maxSelections={currentQuestion.maxSelections || 1}
        onSelectionChange={handleSelectionChange}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isPreviousDisabled={!hasPreviousQuestion}
        isNextDisabled={
          currentQuestion.type === 'single-choice' ||
          currentQuestion.type === 'multiple-choice' ||
          currentQuestion.type === 'goal-setting'
            ? selectedOptionIds.length === 0
            : false
        }
      />
    );
  };

  // Si hay un error, mostrar pantalla de error
  if (error) {
    return (
      <QuestionnaireLayout onExit={handleExit}>
        <MessageScreen
          message="Ocurrió un error"
          submessage={error}
          characterMood="confused"
          onContinue={handleExit}
          continueButtonText="Volver al inicio"
        />
      </QuestionnaireLayout>
    );
  }

  // Si está cargando, mostrar pantalla de carga
  if (isLoading) {
    return (
      <QuestionnaireLayout showExitButton={false}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="border-primary mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent"></div>
          <p className="text-lg">Cargando...</p>
        </div>
      </QuestionnaireLayout>
    );
  }

  // Si hay un resultado, mostrar la pantalla de resultados
  if (lastResult) {
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
            // Explicitly handle undefined for description
            description: rec.description || '',
            icon: getPriorityIcon(rec.priority),
          }))}
          primaryButtonText="Comenzar mi aprendizaje"
          secondaryButtonText="Hacer otra evaluación"
          onPrimaryButtonClick={() => navigate('/dashboard')}
          onSecondaryButtonClick={handleRestart}
        />
      </QuestionnaireLayout>
    );
  }

  // Si no hay cuestionario, mostrar pantalla de bienvenida
  if (!questionnaire || !currentQuestion) {
    return (
      <QuestionnaireLayout showExitButton={false}>
        <WelcomeScreen
          title="Evaluación de habilidades"
          subtitle="Responde algunas preguntas para personalizar tu experiencia de aprendizaje"
          primaryButtonText="Comenzar"
          onPrimaryButtonClick={() => navigate('/categories')}
        />
      </QuestionnaireLayout>
    );
  }

  // Renderizar el contenido principal del cuestionario
  return (
    <QuestionnaireLayout
      title={selectedCategory?.name || 'Cuestionario'}
      onExit={handleExit}
    >
      {renderQuestionContent()}
    </QuestionnaireLayout>
  );
};

// Función para verificar si una cadena es un nombre de icono válido
function isIconName(icon?: string): boolean {
  if (!icon) return false;
  const validIcons = [
    'arrow-left',
    'arrow-right',
    'check',
    'close',
    'error',
    'info',
    'success',
    'warning',
    'star',
    'user',
    'home',
    'settings',
    'heart',
    'flag',
  ];
  return validIcons.includes(icon);
}

// Función para convertir niveles a nombres legibles
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

// Función para obtener el icono según la prioridad
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

// Exportar como default para facilitar la carga dinámica
export default QuestionnairePage;
