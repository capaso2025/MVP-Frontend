import { create } from 'zustand';

import type {
  IQuestion,
  IQuestionnaireResult,
  IQuestionnaireState,
  IQuestionResponse,
  ISkillCategory,
} from './questionnaire-types';

/**
 * Estado global del cuestionario
 */
export interface IQuestionnaireStore {
  // Estado
  questionnaire: IQuestionnaireState | null;
  selectedCategory: ISkillCategory | null;
  isLoading: boolean;
  error: string | null;
  lastResult: IQuestionnaireResult | null;

  // Acciones
  initQuestionnaire: (category: ISkillCategory, questions: IQuestion[]) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  goToQuestion: (index: number) => void;
  answerQuestion: (questionId: string, selectedOptionIds: string[]) => void;
  completeQuestionnaire: () => void;
  resetQuestionnaire: () => void;
  setResult: (result: IQuestionnaireResult) => void;
  setCategory: (category: ISkillCategory) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

/**
 * Store Zustand para gestionar el estado del cuestionario
 */
export const useQuestionnaireStore = create<IQuestionnaireStore>(
  (set, get) => ({
    // Estado inicial
    questionnaire: null,
    selectedCategory: null,
    isLoading: false,
    error: null,
    lastResult: null,

    // Inicializar un nuevo cuestionario
    initQuestionnaire: (category, questions) => {
      const questionnaireId = `questionnaire_${Date.now()}`;

      set({
        questionnaire: {
          id: questionnaireId,
          currentQuestionIndex: 0,
          questions,
          responses: {},
          isCompleted: false,
          startedAt: Date.now(),
        },
        selectedCategory: category,
        error: null,
      });
    },

    // Avanzar a la siguiente pregunta
    goToNextQuestion: () => {
      const { questionnaire } = get();

      if (!questionnaire) return;

      const nextIndex = questionnaire.currentQuestionIndex + 1;

      if (nextIndex < questionnaire.questions.length) {
        set({
          questionnaire: {
            ...questionnaire,
            currentQuestionIndex: nextIndex,
          },
        });
      }
    },

    // Retroceder a la pregunta anterior
    goToPreviousQuestion: () => {
      const { questionnaire } = get();

      if (!questionnaire) return;

      const prevIndex = questionnaire.currentQuestionIndex - 1;

      if (prevIndex >= 0) {
        set({
          questionnaire: {
            ...questionnaire,
            currentQuestionIndex: prevIndex,
          },
        });
      }
    },

    // Ir a una pregunta específica
    goToQuestion: (index) => {
      const { questionnaire } = get();

      if (!questionnaire) return;

      if (index >= 0 && index < questionnaire.questions.length) {
        set({
          questionnaire: {
            ...questionnaire,
            currentQuestionIndex: index,
          },
        });
      }
    },

    // Responder a una pregunta
    answerQuestion: (questionId, selectedOptionIds) => {
      const { questionnaire } = get();

      if (!questionnaire) return;

      // Encontrar la pregunta
      const question = questionnaire.questions.find((q) => q.id === questionId);

      if (!question) return;

      // Crear objeto de respuesta
      const response: IQuestionResponse = {
        questionId,
        selectedOptionIds,
        timestamp: Date.now(),
      };

      // Obtener valores asociados a las opciones seleccionadas
      if (question.options) {
        const values = selectedOptionIds
          .map((id) => question.options?.find((opt) => opt.id === id)?.value)
          .filter((value) => value !== undefined) as Array<string | number>;

        if (values.length > 0) {
          response.values = values;
        }
      }

      // Actualizar el estado
      set({
        questionnaire: {
          ...questionnaire,
          responses: {
            ...questionnaire.responses,
            [questionId]: response,
          },
        },
      });
    },

    // Completar el cuestionario
    completeQuestionnaire: () => {
      const { questionnaire } = get();

      if (!questionnaire) return;

      set({
        questionnaire: {
          ...questionnaire,
          isCompleted: true,
          completedAt: Date.now(),
        },
      });
    },

    // Reiniciar el cuestionario
    resetQuestionnaire: () => {
      set({
        questionnaire: null,
        error: null,
      });
    },

    // Establecer el resultado
    setResult: (result) => {
      set({ lastResult: result });
    },

    // Establecer la categoría seleccionada
    setCategory: (category) => {
      set({ selectedCategory: category });
    },

    // Establecer estado de carga
    setLoading: (isLoading) => {
      set({ isLoading });
    },

    // Establecer error
    setError: (error) => {
      set({ error });
    },
  }),
);

/**
 * Selector para obtener la pregunta actual
 */
export const selectCurrentQuestion = (state: IQuestionnaireStore) => {
  if (!state.questionnaire) return null;

  const { currentQuestionIndex, questions } = state.questionnaire;
  return questions[currentQuestionIndex] || null;
};

/**
 * Selector para obtener la respuesta actual
 */
export const selectCurrentResponse = (state: IQuestionnaireStore) => {
  const currentQuestion = selectCurrentQuestion(state);

  if (!currentQuestion || !state.questionnaire) return null;

  return state.questionnaire.responses[currentQuestion.id] || null;
};

/**
 * Selector para verificar si hay una pregunta siguiente
 */
export const selectHasNextQuestion = (state: IQuestionnaireStore) => {
  if (!state.questionnaire) return false;

  return (
    state.questionnaire.currentQuestionIndex <
    state.questionnaire.questions.length - 1
  );
};

/**
 * Selector para verificar si hay una pregunta anterior
 */
export const selectHasPreviousQuestion = (state: IQuestionnaireStore) => {
  if (!state.questionnaire) return false;

  return state.questionnaire.currentQuestionIndex > 0;
};

/**
 * Selector para obtener el progreso actual
 */
export const selectProgress = (state: IQuestionnaireStore) => {
  if (!state.questionnaire) return 0;

  const { currentQuestionIndex, questions } = state.questionnaire;
  return Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
};
