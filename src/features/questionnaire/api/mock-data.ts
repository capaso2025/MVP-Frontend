import type { IQuestion } from '../model/questionnaire-types';

/**
 * Datos de ejemplo para crear un cuestionario tipo Duolingo
 * Simula la estructura de preguntas que se obtendrían de la API
 */

/**
 * Obtiene las preguntas de ejemplo para un cuestionario según la categoría
 * @param categoryId - ID de la categoría seleccionada
 * @returns Lista de preguntas para el cuestionario
 */
export const getMockQuestions = (categoryId: string): IQuestion[] => {
  // Preguntas base que son comunes para todas las categorías
  const baseQuestions: IQuestion[] = [
    {
      id: 'intro_1',
      title: '¡Que empiece la fiesta!',
      type: 'informative',
      characterMessage:
        '¡Hola! Voy a hacerte algunas preguntas para personalizar tu experiencia de aprendizaje.',
      characterMood: 'excited',
      autoAdvanceAfter: 4000, // Auto-avanzar después de 4 segundos
    },
    {
      id: 'source',
      title: '¿Cómo supiste de esta plataforma?',
      type: 'single-choice',
      characterMessage: '¿Cómo supiste de CAPO?',
      characterMood: 'thinking',
      options: [
        {
          id: 'source_news',
          text: 'Noticias/artículos/blog',
          icon: 'info',
        },
        {
          id: 'source_friends',
          text: 'Amigos/familia',
          icon: 'heart',
        },
        {
          id: 'source_google',
          text: 'Búsqueda en Google',
          icon: 'search',
        },
        {
          id: 'source_youtube',
          text: 'YouTube',
          icon: 'play',
        },
        {
          id: 'source_tv',
          text: 'TV',
          icon: 'tv',
        },
        {
          id: 'source_tiktok',
          text: 'TikTok',
          icon: 'tiktok',
        },
        {
          id: 'source_social',
          text: 'Facebook/Instagram',
          icon: 'social',
        },
        {
          id: 'source_other',
          text: 'Otra',
          icon: 'more',
        },
      ],
    },
    {
      id: 'motivation',
      title: '¿Por qué quieres aprender este idioma?',
      type: 'single-choice',
      characterMessage:
        'Cuéntame, ¿por qué te interesa este idioma en particular?',
      characterMood: 'thinking',
      options: [
        {
          id: 'motivation_career',
          text: 'Impulsar mi carrera profesional',
          icon: 'briefcase',
        },
        {
          id: 'motivation_travel',
          text: 'Prepararme para viajar',
          icon: 'plane',
        },
        {
          id: 'motivation_fun',
          text: 'Para divertirme',
          icon: 'star',
        },
        {
          id: 'motivation_school',
          text: 'Impulsar mis estudios',
          icon: 'book',
        },
        {
          id: 'motivation_connect',
          text: 'Conectarme con personas',
          icon: 'users',
        },
        {
          id: 'motivation_brain',
          text: 'Ejercitar mi mente',
          icon: 'brain',
        },
        {
          id: 'motivation_other',
          text: 'Otros',
          icon: 'more',
        },
      ],
    },
    {
      id: 'experience_feedback',
      title: '¡Me encanta! La diversión es mi especialidad.',
      type: 'informative',
      characterMessage:
        '¡Excelente elección! El aprendizaje divertido es más efectivo y motivador.',
      characterMood: 'happy',
      autoAdvanceAfter: 3000,
    },
    {
      id: 'proficiency',
      title: '¿Cuánto conoces de este idioma?',
      type: 'single-choice',
      characterMessage: '¿Cuánto sabes de este idioma?',
      characterMood: 'thinking',
      options: [
        {
          id: 'proficiency_beginner',
          text: 'Recién empiezo a aprender',
          icon: 'level-1',
          value: 'beginner',
        },
        {
          id: 'proficiency_some',
          text: 'Conozco algunas palabras comunes',
          icon: 'level-2',
          value: 'elementary',
        },
        {
          id: 'proficiency_basic',
          text: 'Puedo mantener conversaciones simples',
          icon: 'level-3',
          value: 'intermediate',
        },
        {
          id: 'proficiency_intermediate',
          text: 'Puedo conversar sobre varios temas',
          icon: 'level-4',
          value: 'advanced',
        },
        {
          id: 'proficiency_advanced',
          text: 'Puedo debatir en detalle sobre la mayoría de los temas',
          icon: 'level-5',
          value: 'proficient',
        },
      ],
    },
    {
      id: 'practice_goal',
      title: '¿Cuál es tu meta diaria de aprendizaje?',
      type: 'single-choice',
      characterMessage: '¿Cuánto tiempo quieres dedicar cada día?',
      characterMood: 'thinking',
      options: [
        {
          id: 'goal_5min',
          text: '5 min/día',
          description: 'Relajado',
          value: 5,
        },
        {
          id: 'goal_10min',
          text: '10 min/día',
          description: 'Normal',
          value: 10,
        },
        {
          id: 'goal_15min',
          text: '15 min/día',
          description: 'Serio',
          value: 15,
        },
        {
          id: 'goal_20min',
          text: '20 min/día',
          description: 'Intenso',
          value: 20,
        },
      ],
    },
    {
      id: 'goal_feedback',
      title: '¡Perfecto! Aprenderás 75 palabras en tu primera semana.',
      type: 'informative',
      characterMessage:
        '¡Genial! Con esa dedicación, conseguirás resultados muy pronto.',
      characterMood: 'excited',
      autoAdvanceAfter: 3000,
    },
    {
      id: 'path_selection',
      title: 'Ahora, vamos al lugar ideal desde donde empezar.',
      type: 'single-choice',
      characterMessage:
        'Vamos a encontrar el punto perfecto para comenzar tu aprendizaje.',
      characterMood: 'thinking',
      options: [
        {
          id: 'path_beginner',
          text: 'Desde el principio',
          description: 'Completar la lección más fácil del curso de idioma',
          icon: 'level-1',
        },
        {
          id: 'path_placement',
          text: 'Descubrir mi nivel',
          description: 'Duo te recomendará desde dónde empezar a aprender',
          icon: 'test',
        },
      ],
    },
    {
      id: 'final_message',
      title:
        'Por eso, Duolingo está diseñado para ser tan divertido como un juego.',
      type: 'informative',
      characterMessage:
        '¡Perfecto! Ya tengo todo lo que necesito para crear tu plan personalizado.',
      characterMood: 'celebrating',
      autoAdvanceAfter: 4000,
    },
  ];

  // Si es necesario, podríamos añadir preguntas específicas según la categoría
  // Ejemplo: preguntas adicionales para idiomas específicos
  if (categoryId === 'fr') {
    baseQuestions.splice(5, 0, {
      id: 'french_specific',
      title: '¿Has visitado Francia alguna vez?',
      type: 'single-choice',
      characterMessage: '¿Has tenido la oportunidad de visitar Francia?',
      characterMood: 'thinking',
      options: [
        {
          id: 'fr_visit_yes',
          text: 'Sí, he visitado Francia',
          icon: 'flag',
        },
        {
          id: 'fr_visit_no',
          text: 'No, nunca he estado en Francia',
          icon: 'close',
        },
      ],
    });
  }

  return baseQuestions;
};

/**
 * Genera un resultado simulado del cuestionario
 * @param categoryId - ID de la categoría
 * @param answers - Respuestas proporcionadas
 * @returns Resultado simulado
 */
export const generateMockResult = (
  categoryId: string,
  answers: Record<string, string[]>,
) => {
  // Aquí se procesarían las respuestas para generar un resultado
  // Por ahora, usamos valores simulados

  // Determinar nivel basado en la respuesta de "proficiency"
  let skillLevel = 'beginner';
  const proficiencyAnswer = answers['proficiency']?.[0] || '';

  if (proficiencyAnswer.includes('proficiency_')) {
    const level = proficiencyAnswer.split('proficiency_')[1];
    switch (level) {
      case 'beginner':
        skillLevel = 'beginner';
        break;
      case 'some':
        skillLevel = 'elementary';
        break;
      case 'basic':
        skillLevel = 'intermediate';
        break;
      case 'intermediate':
        skillLevel = 'advanced';
        break;
      case 'advanced':
        skillLevel = 'proficient';
        break;
      default:
        skillLevel = 'beginner';
    }
  }

  return {
    questionnaireId: `questionnaire_${Date.now()}`,
    skillLevel,
    score: Math.floor(Math.random() * 100) + 1,
    recommendations: [
      {
        id: 'rec1',
        title: 'Lecciones básicas de vocabulario',
        description:
          'Aprende las palabras más comunes para construir una base sólida.',
        priority: 'high',
      },
      {
        id: 'rec2',
        title: 'Práctica de pronunciación diaria',
        description: 'Ejercicios de 5 minutos para mejorar tu acento.',
        priority: 'medium',
      },
      {
        id: 'rec3',
        title: 'Gramática fundamental',
        description:
          'Comprende las estructuras básicas para formar oraciones correctas.',
        priority: 'high',
      },
      {
        id: 'rec4',
        title: 'Ejercicios de comprensión auditiva',
        description: 'Mejora tu capacidad para entender conversaciones reales.',
        priority: 'medium',
      },
      {
        id: 'rec5',
        title: 'Práctica de escritura',
        description: 'Desarrolla habilidades para expresarte por escrito.',
        priority: 'low',
      },
    ],
    generatedAt: Date.now(),
    category: {
      id: categoryId,
      name: getCategoryName(categoryId),
      imageUrl: `/assets/flags/${getCategoryFlag(categoryId)}.svg`,
    },
  };
};

/**
 * Obtiene el nombre de la categoría según su ID
 */
function getCategoryName(categoryId: string): string {
  const categories: Record<string, string> = {
    eng: 'Inglés',
    fr: 'Francés',
    pt: 'Portugués',
    it: 'Italiano',
    de: 'Alemán',
    ru: 'Ruso',
    ca: 'Catalán',
    sv: 'Sueco',
  };
  return categories[categoryId] || 'Idioma';
}

/**
 * Obtiene el código de bandera según el ID de categoría
 */
function getCategoryFlag(categoryId: string): string {
  const flags: Record<string, string> = {
    eng: 'us',
    fr: 'fr',
    pt: 'br',
    it: 'it',
    de: 'de',
    ru: 'ru',
    ca: 'catalonia',
    sv: 'se',
  };
  return flags[categoryId] || 'globe';
}
