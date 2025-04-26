import { FC, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  selectCurrentQuestion,
  selectCurrentResponse,
  selectHasNextQuestion,
  selectHasPreviousQuestion,
  // selectProgress,
  useQuestionnaireStore,
} from '@features/questionnaire/model/questionnaire-store';
import { generateMockResult } from '@features/questionnaire/api/mock-data';
import {
  QuestionScreen,
  MessageScreen,
  QuestionnaireLayout,
  Typography,
  TIconName,
} from '@shared/ui';
import type { IOptionItem } from '@shared/ui/molecules/OptionGroup/OptionGroup';

/**
 * Página principal del cuestionario que muestra las preguntas
 * y maneja la navegación entre ellas
 */
const QuestionnaireQuestionsPage: FC = () => {
  const navigate = useNavigate();

  // Acceder al estado global del cuestionario
  const questionnaire = useQuestionnaireStore((state) => state.questionnaire);
  const selectedCategory = useQuestionnaireStore(
    (state) => state.selectedCategory,
  );
  const isLoading = useQuestionnaireStore((state) => state.isLoading);
  const error = useQuestionnaireStore((state) => state.error);
  const setResult = useQuestionnaireStore((state) => state.setResult);

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
  // const progress = useQuestionnaireStore(selectProgress);

  // Redireccionar si no hay cuestionario inicializado
  useEffect(() => {
    if (!questionnaire && !isLoading) {
      navigate('/categories');
    }
  }, [questionnaire, isLoading, navigate]);

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
          handleCompleteQuestionnaire();
        }
      }, currentQuestion.autoAdvanceAfter);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, hasNextQuestion, goToNextQuestion]);

  // Convertir las opciones al formato esperado por el componente
  const optionItems = useMemo<IOptionItem[]>(() => {
    if (!currentQuestion?.options) return [];

    return currentQuestion.options.map((option) => ({
      id: option.id,
      title: option.text,
      description: option.description,
      icon: isIconName(option.icon) ? (option.icon as TIconName) : undefined,
    }));
  }, [currentQuestion]);

  // Obtener los IDs de opciones seleccionadas para la pregunta actual
  const selectedOptionIds = useMemo<string[]>(() => {
    return currentResponse?.selectedOptionIds || [];
  }, [currentResponse]);

  /**
   * Maneja la selección de opciones
   */
  const handleSelectionChange = (values: string[]) => {
    if (currentQuestion) {
      answerQuestion(currentQuestion.id, values);
    }
  };

  /**
   * Maneja el avance a la siguiente pregunta
   */
  const handleNext = () => {
    if (hasNextQuestion) {
      goToNextQuestion();
    } else {
      handleCompleteQuestionnaire();
    }
  };

  /**
   * Maneja el retroceso a la pregunta anterior
   */
  const handlePrevious = () => {
    if (hasPreviousQuestion) {
      goToPreviousQuestion();
    }
  };

  /**
   * Maneja la finalización del cuestionario
   */
  const handleCompleteQuestionnaire = () => {
    if (!questionnaire || !selectedCategory) return;

    // Marcar como completado
    completeQuestionnaire();

    // Generar resultado (en un caso real, se enviaría a una API)
    const responses: Record<string, string[]> = {};
    Object.keys(questionnaire.responses).forEach((questionId) => {
      responses[questionId] =
        questionnaire.responses[questionId].selectedOptionIds;
    });

    const result = generateMockResult(selectedCategory.id, responses);
    setResult(result);

    // Navegar a la página de resultados
    navigate('/questionnaire/results');
  };

  /**
   * Maneja la salida/cancelación
   */
  const handleExit = () => {
    resetQuestionnaire();
    navigate('/categories');
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
          continueButtonText="Volver a las categorías"
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
          <Typography variant="body1">Cargando...</Typography>
        </div>
      </QuestionnaireLayout>
    );
  }

  // Si no hay cuestionario, redireccionar (ya manejado en useEffect)
  if (!questionnaire || !currentQuestion) {
    return null;
  }

  // Renderizar pregunta informativa
  if (currentQuestion.type === 'informative') {
    return (
      <QuestionnaireLayout
        title={selectedCategory?.name || 'Cuestionario'}
        onExit={handleExit}
      >
        <MessageScreen
          message={currentQuestion.title}
          submessage={currentQuestion.informativeContent}
          characterMessage={currentQuestion.characterMessage}
          characterMood={currentQuestion.characterMood}
          onContinue={handleNext}
          autoContinueAfter={currentQuestion.autoAdvanceAfter}
          continueButtonText="Continuar"
        />
      </QuestionnaireLayout>
    );
  }

  // Renderizar pregunta normal
  return (
    <QuestionnaireLayout
      title={selectedCategory?.name || 'Cuestionario'}
      onExit={handleExit}
    >
      <QuestionScreen
        id={currentQuestion.id}
        title={currentQuestion.title}
        options={optionItems}
        selectedValues={selectedOptionIds}
        currentIndex={questionnaire.currentQuestionIndex + 1}
        totalQuestions={questionnaire.questions.length}
        characterMessage={currentQuestion.characterMessage}
        characterMood={currentQuestion.characterMood}
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
    </QuestionnaireLayout>
  );
};

// Función para verificar si una cadena es un nombre de icono válido
function isIconName(icon?: string): boolean {
  if (!icon) return false;

  const validIcons: TIconName[] = [
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
    'search',
    'tv',
    'social',
    'more',
    'play',
    'tiktok',
    'level-1',
    'level-2',
    'level-3',
    'level-4',
    'level-5',
    'briefcase',
    'plane',
    'book',
    'users',
    'brain',
    'test',
  ];

  return validIcons.includes(icon as TIconName);
}

export default QuestionnaireQuestionsPage;
