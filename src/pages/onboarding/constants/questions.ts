import { Category } from '../types/categories';
import yes from '@/assets/yes.png';
import no from '@/assets/no.png';
import question from '@/assets/question.png';

export const QUESTIONS: {
  [key in Category]: {
    question: string;
    type: 'single-choice' | 'multiple-choice';
    options: {
      id: string;
      text: string;
      icon?: string;
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
          icon: '/assets/social-media/google.svg',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
          icon: '/assets/social-media/fb-ig.png',
        },
        {
          id: '3',
          text: 'Youtube',
          icon: '/assets/social-media/yt.svg',
        },
        {
          id: '4',
          text: 'TV',
          icon: '/assets/social-media/tv.png',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
          icon: '/assets/social-media/news.svg',
        },
        {
          id: '6',
          text: 'TikTok',
          icon: '/assets/social-media/tiktok.png',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
          icon: '/assets/social-media/person.png',
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
      question: '¿En qué estapa estás ahora?',
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: '/assets/social-media/google.svg',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
          icon: '/assets/social-media/fb-ig.png',
        },
        {
          id: '3',
          text: 'Youtube',
          icon: '/assets/social-media/yt.svg',
        },
        {
          id: '4',
          text: 'TV',
          icon: '/assets/social-media/tv.png',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
          icon: '/assets/social-media/news.svg',
        },
        {
          id: '6',
          text: 'TikTok',
          icon: '/assets/social-media/tiktok.png',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
          icon: '/assets/social-media/person.png',
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
      question: '¿En qué estapa estás ahora?',
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
          icon: yes,
        },
        {
          id: '2',
          text: 'Tal vez',
          icon: question,
        },
        {
          id: '3',
          text: 'No',
          icon: no,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'Tal vez',
          icon: question,
        },
        {
          id: '3',
          text: 'No',
          icon: no,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'Tal vez',
          icon: question,
        },
        {
          id: '3',
          text: 'No',
          icon: no,
        },
      ],
    },
  ],
  'capaso-ia': [
    {
      question: '¿Cómo supiste de Capo?',
      type: 'multiple-choice',
      options: [
        {
          id: '1',
          text: 'Búsqueda en Google',
          icon: '/assets/social-media/google.svg',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
          icon: '/assets/social-media/fb-ig.png',
        },
        {
          id: '3',
          text: 'Youtube',
          icon: '/assets/social-media/yt.svg',
        },
        {
          id: '4',
          text: 'TV',
          icon: '/assets/social-media/tv.png',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
          icon: '/assets/social-media/news.svg',
        },
        {
          id: '6',
          text: 'TikTok',
          icon: '/assets/social-media/tiktok.png',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
          icon: '/assets/social-media/person.png',
        },
        {
          id: '8',
          text: 'Otros',
        },
      ],
    },
    {
      question:
        '¿Por qué te interesa aprender a usar la inteligencia artificial ahora?',
      type: 'multiple-choice',
      options: [
        { id: '1', text: 'Quiero organizarme mejor y dejar de procrastinar.' },
        {
          id: '2',
          text: 'Me gustaría aprender más rápido en el colegio o universidad.',
        },
        {
          id: '3',
          text: 'Siento que si no aprendo IA, me voy a quedar atrás.',
        },
        { id: '4', text: 'Quiero aprovechar el tiempo y ser más productivo.' },
        {
          id: '5',
          text: 'Me interesa usar IA para mis proyectos o emprendimientos.',
        },
        {
          id: '6',
          text: 'No sé bien por qué, pero sé que es importante y no quiero ignorarla.',
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
      question: '¿En qué estapa estás ahora?',
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
        '¿Sientes que a veces tienes ideas o metas, pero no sabes por dónde empezar?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
        },
      ],
    },
    {
      question:
        '¿Te cuesta mantenerte enfocado cuando estudias o intentas organizarte?',
      type: 'single-choice',
      options: [
        {
          id: '1',
          text: 'Sí',
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: '/assets/social-media/google.svg',
        },
        {
          id: '2',
          text: 'Facebook/Instagram',
          icon: '/assets/social-media/fb-ig.png',
        },
        {
          id: '3',
          text: 'Youtube',
          icon: '/assets/social-media/yt.svg',
        },
        {
          id: '4',
          text: 'TV',
          icon: '/assets/social-media/tv.png',
        },
        {
          id: '5',
          text: 'Noticias/artículos/blog',
          icon: '/assets/social-media/news.svg',
        },
        {
          id: '6',
          text: 'TikTok',
          icon: '/assets/social-media/tiktok.png',
        },
        {
          id: '7',
          text: 'Amigos/familiares',
          icon: '/assets/social-media/person.png',
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
      question: '¿En qué estapa estás ahora?',
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
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
          icon: yes,
        },
        {
          id: '2',
          text: 'No',
          icon: no,
        },
        {
          id: '3',
          text: 'A veces',
          icon: question,
        },
      ],
    },
  ],
};
