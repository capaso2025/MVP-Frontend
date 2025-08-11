import { Module } from '@/shared/types/modules.types';
import team from '@/assets/team.png';
import communication from '/assets/characters/communication.jpg';
import emotionControl from '/assets/characters/emotion-control.png';
import leadership from '/assets/characters/leadership.jpeg';

export interface SkillData {
  id: string;
  title: string;
  bubbleText: string;
  progress: number;
  onClick: () => void;
  isActive?: boolean;
  image: string;
  modules?: Module[];
}
export const IA_SKILLS_SECTIONS: SkillData[] = [
  {
    id: '1',
    title: 'IA para organización y productividad personal',
    bubbleText:
      'Exprésate con claridad y empatía. Haz que tus ideas conecten y generen impacto en cualquier entorno.',
    progress: 50,
    onClick: () => console.log('Section 1 clicked'),
    isActive: true,
    image: communication,
    modules: [
      {
        id: '1',
        title: 'Bases de la productividad con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              '¿Qué es la productividad asistida por IA? Ejemplos reales aplicados al estudio.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Herramientas de IA para crear agendas y calendarios (ej. Notion AI, Google Calendar con IA).',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Cómo crear una rutina diaria con IA: prompt + plantillas personalizadas.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '2',
        title: ' IA para gestión de tareas y metas',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'right',
        objective: 'Aprender a escuchar activamente.',
        lessons: [
          {
            id: '1',
            level: 1,
            title:
              'Cómo escribir prompts para que la IA te cree un plan paso a paso.',
          },
          {
            id: '2',
            level: 2,
            title:
              'Uso de IA para planificar entregas escolares, proyectos o retos personales.',
          },
          {
            id: '3',
            level: 3,
            title:
              'Herramientas tipo task manager AI (ej. Todoist con IA, Motion, Trello con asistentes).',
            type: 'normal',
          },
          { id: '4', level: 4, title: 'Reto de “escuchar sin interrumpir”' },
          {
            id: '5',
            level: 5,
            title:
              'Desbloquea una medalla de “Oído ninja” al superar un diálogo interactivo',
            type: 'final',
          },
        ],
      },
      {
        id: '3',
        title: 'Priorizar con ayuda de la IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Fortalecer la expresión clara y sin temor.',
        lessons: [
          {
            id: '1',
            level: 1,
            title:
              'Matriz de Eisenhower + IA: cómo generar un análisis de urgencia/importancia con prompts.',
          },
          {
            id: '2',
            level: 2,
            title:
              'Aprende a decidir qué hacer primero con la IA como copiloto.',
          },
          {
            id: '3',
            level: 3,
            title:
              'Dilemas reales: IA te da opciones y tú eliges, con feedback.',
          },
        ],
      },
      {
        id: '4',
        title: 'Evitar la procrastinación con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'right',
        objective: 'Gestionar conflictos y tensiones con madurez.',
        lessons: [
          {
            id: '1',
            level: 1,
            title:
              '¿Cómo convertir a ChatGPT en tu coach anti-procrastinación?',
          },
          {
            id: '2',
            level: 2,
            title:
              'Crear sistemas de recordatorios, seguimiento y recompensas automatizadas.',
          },
          {
            id: '3',
            level: 3,
            title:
              'Cómo usar IA para identificar tus distractores y redirigir tu atención.',
          },
          {
            id: '4',
            level: 4,
            title: 'Caso práctico — conversación con un amigo que te falló',
          },
          {
            id: '5',
            level: 5,
            title:
              '“Boss level” — conversación compleja con toma de decisiones',
            type: 'final',
          },
        ],
      },
      {
        id: '5',
        title: 'Automatiza tu organización con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'right',
        objective: 'Gestionar conflictos y tensiones con madurez.',
        lessons: [
          {
            id: '1',
            level: 1,
            title:
              'Automatiza la clasificación de documentos escolares (con IA de Google Drive o Zapier).',
          },
          {
            id: '2',
            level: 2,
            title: 'Aprende a crear flujos de trabajo personalizados con IA.',
          },
          {
            id: '3',
            level: 3,
            title:
              'Introducción a herramientas low-code/no-code para automatización.',
          },
          {
            id: '4',
            level: 4,
            title: 'Caso práctico — conversación con un amigo que te falló',
          },
          {
            id: '5',
            level: 5,
            title:
              '“Boss level” — conversación compleja con toma de decisiones',
            type: 'final',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'IA en el estudio académico',
    bubbleText:
      'Inspira, guía y potencia a los demás. El liderazgo empieza con tu ejemplo y visión.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: leadership,
    modules: [
      {
        id: '1',
        title: 'Aprende a aprender con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Test de estilo de aprendizaje con IA: visual, auditivo, kinestésico o mixto.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Cómo pedirle a la IA que adapte un tema difícil a tu estilo.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Generación de mapas mentales, resúmenes visuales o explicaciones auditivas.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '2',
        title: 'Comprender mejor los temas difíciles',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Cómo usar el método Feynman con IA: enseña lo que entendiste y la IA te corrige.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Desglose de textos académicos: IA como traductor de lenguaje técnico.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title: 'Role play con la IA: conversa con un “experto” en el tema.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '3',
        title: 'Memorizar y practicar con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title: 'Crea tus propios flashcards con IA (Anki + prompts).',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Simuladores de examen: cómo generar preguntas estilo prueba.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title: 'Técnicas mnemotécnicas apoyadas por IA.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '4',
        title: 'Leer, analizar y tomar apuntes con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title: 'Cómo resumir un texto largo sin perder lo importante.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Extraer ideas clave, citas, conceptos y definiciones con herramientas de IA.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'IA como editor de apuntes: pasa tus notas en caos a algo estructurado.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '1',
        title: 'Trabajos, ensayos y proyectos con IA responsable',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Cómo pedirle a la IA que te ayude a estructurar una idea o argumento.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Re escritura y revisión con IA: gramática, claridad, coherencia.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Qué sí y qué no pedirle a la IA (código de uso académico responsable).',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'IA para pensamiento crítico y creatividad',
    bubbleText:
      'Analiza, prioriza y actúa con seguridad. Mejora tu criterio para enfrentar cualquier desafío.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: emotionControl,
    modules: [
      {
        id: '1',
        title: 'Pensar mejor con IA',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              '¿Qué es el pensamiento crítico y cómo la IA puede ayudarte a entrenarlo?',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Detectar sesgos y falacias en argumentos con IA (análisis de noticias falsas).',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title: 'Debate con IA: confronta ideas y aprende a argumentar.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '2',
        title: 'Generar ideas con IA (divergencia creativa)',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Técnicas de ideación con IA: lluvia de ideas guiada, SCAMPER, mapas creativos.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Cómo convertir una idea básica en algo innovador con prompts específicos.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Creatividad combinatoria: mezcla de ideas, analogías y provocaciones con IA.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '3',
        title: 'Resolver problemas con IA (convergencia lógica)',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title: 'Cómo analizar un problema complejo paso a paso con IA.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'Uso de frameworks de resolución (Design Thinking, Árbol de problemas, 5 porqués).',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Evaluar soluciones: IA como herramienta de testeo de ideas.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '4',
        title: 'Escribir y crear con estilo propio',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Cómo escribir cuentos, poemas, ensayos o guiones con IA de apoyo.',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title:
              'IA como editora creativa: mejora sin reemplazar tu originalidad.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Diferenciar entre copiar y co-crear: el uso ético de la IA para expresión personal.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
      {
        id: '5',
        title: 'Innovación y proyectos personales',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title:
              'Cómo convertir una pasión o problema en un proyecto real (con IA como guía).',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title: 'Planificación del proyecto: objetivos, recursos, tareas.',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title:
              'Prototipo y feedback: IA te ayuda a presentar, mejorar y validar.',
            type: 'normal',
            activity: 'QUIZ',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: ' IA para comunicación y expresión',
    bubbleText:
      'Colabora con confianza, escucha activamente y alcanza metas junto a otros. El éxito se construye en equipo.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: team,
  },
  {
    id: '4',
    title: ' IA y ética digital',
    bubbleText:
      'Colabora con confianza, escucha activamente y alcanza metas junto a otros. El éxito se construye en equipo.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: team,
  },
];
