import { Category } from '../types/categories';

export const QUESTIONS: {
  [key in Category]: {
    question: string;
    type: 'single-choice' | 'multiple-choice';
    options: {
      id: string;
      text: string;
    }[];
  }[];
} = {
  'soft-skills': [
    {
      question: '¿Cómo supiste de Capo?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Búsqueda en Google',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
        },
        {
          id: '3',
          text: 'Youtube',
        },
        {
          id: '4',
          text: 'TV',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
        },
        {
          id: '6',
          text: 'TikTok',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
        },
        {
          id: '8',
          text: 'Otros',
        },
      ],
    },
    {
      question: '¿Por qué quieres aprender esta habilidad?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Quiero aprender a hablar con más seguridad ',
        },
        {
          id: '2',
          text: 'Me cuesta expresarme frente a otras personas',
        },
        {
          id: '3',
          text: 'Quiero ser mejor en entrevistas o presentaciones',
        },
        {
          id: '4',
          text: 'Me pongo nervioso al hablar en público.',
        },
        {
          id: '5',
          text: 'No sé cómo empezar una conversación con alguien nuevo',
        },
        {
          id: '6',
          text: 'Quiero mejorar para trabajar bien en equipo',
        },
      ],
    },
    {
      question: '¿Cuanto tiempo puedes dedicar a mejor diariamente?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: '5 minutos',
        },
        {
          id: '2',
          text: '10 minutos',
        },
        {
          id: '3',
          text: '15 minutos',
        },
        {
          id: '4',
          text: '20 minutos',
        },
        {
          id: '5',
          text: '30 minutos',
        },
        {
          id: '6',
          text: '1 hora o más',
        },
      ],
    },

    {
      question: 'En que etapa estas ahora?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Últimos años del colegio',
        },
        {
          id: '2',
          text: 'Tomando un año sabático',
        },
        {
          id: '3',
          text: 'Empezando la universidad',
        },
        {
          id: '4',
          text: 'Estudiando y trabajando a la vez',
        },
      ],
    },
    {
      question:
        '¿Te cuesta hablar en publico o expresar tus ideas con claridad?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
    {
      question:
        '¿Te gustaría sentirte más seguro al comunicarte en clases, entrevistas o reuniones?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
  ],
  'time-management': [
    {
      question: '¿Cómo supiste de Capo?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Búsqueda en Google',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
        },
        {
          id: '3',
          text: 'Youtube',
        },
        {
          id: '4',
          text: 'TV',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
        },
        {
          id: '6',
          text: 'TikTok',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
        },
        {
          id: '8',
          text: 'Otros',
        },
      ],
    },
    {
      question: '¿Por qué quieres aprender esta habilidad?',
      type: 'single-choice',
      options: [
        { id: '1', text: 'Organización real' },
        { id: '2', text: 'Mejores resultados académicos o laborales' },
        { id: '3', text: 'Menos estrés y ansiedad' },
        { id: '4', text: 'Mayor enfoque' },
        { id: '5', text: 'Más tiempo libre' },
        { id: '6', text: 'Sensación de logro diario' },
      ],
    },
    {
      question: '¿Cuanto tiempo puedes dedicar a mejor diariamente?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: '5 minutos',
        },
        {
          id: '2',
          text: '10 minutos',
        },
        {
          id: '3',
          text: '15 minutos',
        },
        {
          id: '4',
          text: '20 minutos',
        },
        {
          id: '5',
          text: '30 minutos',
        },
        {
          id: '6',
          text: '1 hora o más',
        },
      ],
    },
    {
      question: 'En que etapa estas ahora?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Últimos años del colegio',
        },
        {
          id: '2',
          text: 'Tomando un año sabático',
        },
        {
          id: '3',
          text: 'Empezando la universidad',
        },
        {
          id: '4',
          text: 'Estudiando y trabajando a la vez',
        },
      ],
    },
    {
      question: '¿Sientes que siempre haces todo a última hora?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'Tal vez',
        },
        {
          id: '3',
          text: 'No',
        },
      ],
    },
    {
      question: '¿Te cuesta organizar tus tareas y saber por donde empezar?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'Tal vez',
        },
        {
          id: '3',
          text: 'No',
        },
      ],
    },
    {
      question:
        '¿Te gustaría tener mas tiempo libre sin descuidar responsabilidades?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'Tal vez',
        },
        {
          id: '3',
          text: 'No',
        },
      ],
    },
  ],
  'personal well-being': [
    {
      question: '¿Cómo supiste de Capo?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Búsqueda en Google',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
        },
        {
          id: '3',
          text: 'Youtube',
        },
        {
          id: '4',
          text: 'TV',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
        },
        {
          id: '6',
          text: 'TikTok',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
        },
        {
          id: '8',
          text: 'Otros',
        },
      ],
    },
    {
      question: '¿Por qué quieres aprender esta habilidad?',
      type: 'multiple-choice',
      options: [
        { id: '1', text: 'Mas energía diaria' },
        { id: '2', text: 'Mejor concentración' },
        { id: '3', text: 'Mejorar tu estado de animo' },
        { id: '4', text: 'Mas autoestima' },
        { id: '5', text: 'Hábitos saludables' },
        { id: '6', text: 'Menos estrés físico y mental' },
      ],
    },
    {
      question: '¿Cuanto tiempo puedes dedicar a mejor diariamente?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: '5 minutos',
        },
        {
          id: '2',
          text: '10 minutos',
        },
        {
          id: '3',
          text: '15 minutos',
        },
        {
          id: '4',
          text: '20 minutos',
        },
        {
          id: '5',
          text: '30 minutos',
        },
        {
          id: '6',
          text: '1 hora o más',
        },
      ],
    },
    {
      question: 'En que etapa estas ahora?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Últimos años del colegio',
        },
        {
          id: '2',
          text: 'Tomando un año sabático',
        },
        {
          id: '3',
          text: 'Empezando la universidad',
        },
        {
          id: '4',
          text: 'Estudiando y trabajando a la vez',
        },
      ],
    },
    {
      question:
        '¿Te cuesta tener una rutina que te haga sentir bien física y mentalmente?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
    {
      question:
        '¿Te sientes con poca energía o sin motivación en tu día a día?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
    {
      question:
        '¿Te gustaría mejorar tus hábitos (sueño, alimentación, movimiento, descanso)?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
  ],
  'emotional-control': [
    {
      question: '¿Cómo supiste de Capo?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Búsqueda en Google',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
        },
        {
          id: '3',
          text: 'Youtube',
        },
        {
          id: '4',
          text: 'TV',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
        },
        {
          id: '6',
          text: 'TikTok',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
        },
        {
          id: '8',
          text: 'Otros',
        },
      ],
    },
    {
      question: '¿Por qué quieres aprender esta habilidad?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Más paz mental',
        },
        {
          id: '2',
          text: 'Toma de decisiones más claras',
        },
        {
          id: '3',
          text: 'Mejores relaciones',
        },
        {
          id: '4',
          text: 'Autoconocimiento profundo',
        },
        {
          id: '5',
          text: 'Mayor resiliencia',
        },
        {
          id: '6',
          text: 'Confianza emocional',
        },
      ],
    },
    {
      question: '¿Cuanto tiempo puedes dedicar a mejor diariamente?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: '5 minutos',
        },
        {
          id: '2',
          text: '10 minutos',
        },
        {
          id: '3',
          text: '15 minutos',
        },
        {
          id: '4',
          text: '20 minutos',
        },
        {
          id: '5',
          text: '30 minutos',
        },
        {
          id: '6',
          text: '1 hora o más',
        },
      ],
    },
    {
      question: 'En que etapa estas ahora?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Últimos años del colegio',
        },
        {
          id: '2',
          text: 'Tomando un año sabático',
        },
        {
          id: '3',
          text: 'Empezando la universidad',
        },
        {
          id: '4',
          text: 'Estudiando y trabajando a la vez',
        },
      ],
    },
    {
      question:
        '¿Te cuesta manejar tus emociones cuando te sientes estresado, triste o frustrado?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
    {
      question:
        '¿Te siente abrumado fácilmente cuando las cosas no salen como esperas?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
    {
      question:
        '¿Te gustaría aprender a responder con más calma y claridad en momentos difíciles?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
        },
        {
          id: '2',
          text: 'No',
        },
        {
          id: '3',
          text: 'A veces',
        },
      ],
    },
  ],
};
