/**
 * Tipos de datos para el módulo de cuestionario
 */

/**
 * Tipo de pregunta en el cuestionario
 */
export type TQuestionType =
  | 'single-choice' // Selección única
  | 'multiple-choice' // Selección múltiple
  | 'informative' // Pantalla informativa sin selección
  | 'goal-setting'; // Configuración de objetivos

/**
 * Opción individual para una pregunta
 */
export interface IQuestionOption {
  /**
   * Identificador único de la opción
   */
  id: string;

  /**
   * Texto a mostrar para la opción
   */
  text: string;

  /**
   * Descripción adicional opcional
   */
  description?: string;

  /**
   * URL o nombre del icono para la opción
   */
  icon?: string;

  /**
   * Valor asociado a la opción (para cálculos o clasificación)
   */
  value?: string | number;
}

/**
 * Definición de una pregunta del cuestionario
 */
export interface IQuestion {
  /**
   * Identificador único de la pregunta
   */
  id: string;

  /**
   * Título o enunciado de la pregunta
   */
  title: string;

  /**
   * Tipo de pregunta
   */
  type: TQuestionType;

  /**
   * Mensaje que muestra el personaje
   */
  characterMessage?: string;

  /**
   * Estado de ánimo del personaje
   */
  characterMood?:
    | 'default'
    | 'happy'
    | 'excited'
    | 'confused'
    | 'thinking'
    | 'celebrating';

  /**
   * Opciones disponibles para la pregunta
   */
  options?: IQuestionOption[];

  /**
   * Número máximo de selecciones permitidas (para preguntas multiple-choice)
   */
  maxSelections?: number;

  /**
   * Contenido de texto para pantallas informativas
   */
  informativeContent?: string;

  /**
   * Tiempo en milisegundos para auto-avanzar (0 para desactivar)
   */
  autoAdvanceAfter?: number;

  /**
   * Metadata adicional para la pregunta
   */
  metadata?: Record<string, unknown>;
}

/**
 * Respuesta a una pregunta
 */
export interface IQuestionResponse {
  /**
   * ID de la pregunta respondida
   */
  questionId: string;

  /**
   * ID(s) de las opciones seleccionadas
   */
  selectedOptionIds: string[];

  /**
   * Valor(es) asociados a las opciones seleccionadas
   */
  values?: Array<string | number>;

  /**
   * Tiempo empleado en responder (en ms)
   */
  timeSpent?: number;

  /**
   * Marca de tiempo cuando se respondió
   */
  timestamp: number;
}

/**
 * Estado completo del cuestionario
 */
export interface IQuestionnaireState {
  /**
   * ID del cuestionario actual
   */
  id: string;

  /**
   * Índice de la pregunta actual (base 0)
   */
  currentQuestionIndex: number;

  /**
   * Lista completa de preguntas
   */
  questions: IQuestion[];

  /**
   * Respuestas proporcionadas hasta ahora
   */
  responses: Record<string, IQuestionResponse>;

  /**
   * Si se ha completado el cuestionario
   */
  isCompleted: boolean;

  /**
   * Marca de tiempo cuando se inició
   */
  startedAt: number;

  /**
   * Marca de tiempo cuando se completó
   */
  completedAt?: number;
}

/**
 * Categoría de habilidad
 */
export interface ISkillCategory {
  /**
   * Identificador único de la categoría
   */
  id: string;

  /**
   * Nombre visible de la categoría
   */
  name: string;

  /**
   * URL de la imagen o bandera de la categoría
   */
  imageUrl: string;

  /**
   * Texto adicional (por ejemplo, número de estudiantes)
   */
  subtitle?: string;

  /**
   * Código ISO o identificador de idioma (para categorías de idioma)
   */
  languageCode?: string;

  /**
   * Descripción completa de la categoría
   */
  description?: string;
}

/**
 * Resultado del cuestionario
 */
export interface IQuestionnaireResult {
  /**
   * ID del cuestionario
   */
  questionnaireId: string;

  /**
   * Nivel de habilidad determinado
   */
  skillLevel:
    | 'beginner'
    | 'elementary'
    | 'intermediate'
    | 'advanced'
    | 'proficient';

  /**
   * Puntaje numérico (si aplica)
   */
  score?: number;

  /**
   * Recomendaciones basadas en las respuestas
   */
  recommendations: Array<{
    id: string;
    title: string;
    description?: string;
    priority: 'high' | 'medium' | 'low';
  }>;

  /**
   * Fecha de generación del resultado
   */
  generatedAt: number;

  /**
   * Categoría de habilidad asociada
   */
  category: ISkillCategory;
}
