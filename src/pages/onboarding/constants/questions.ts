export const QUESTIONS: {
  id: number;
  question: string;
  alternatives: {
    text: string;
    score: number;
  }[];
}[] = [
  {
    id: 1,
    question: '¿Con qué frecuencia planificas tus semanas o días?',
    alternatives: [
      { text: 'Nunca planifico nada', score: 1 },
      { text: 'A veces lo intento, pero no soy constante', score: 2 },
      {
        text: 'Planifico lo básico (exámenes o entregas importantes)',
        score: 3,
      },
      { text: 'Siempre tengo un plan semanal o diario', score: 4 },
    ],
  },
  {
    id: 2,
    question:
      '¿Cómo describirías tu relación con la tecnología para estudiar o trabajar?',
    alternatives: [
      {
        text: 'Me cuesta usar apps o plataformas, me confundo fácilmente',
        score: 1,
      },
      { text: 'Sé usar lo básico (Google, Word), pero nada más', score: 2 },
      {
        text: 'Me defiendo con algunas herramientas (Notion, Trello, Drive)',
        score: 3,
      },
      { text: 'Me encanta usar herramientas digitales, incluso IA', score: 4 },
    ],
  },
  {
    id: 3,
    question: '¿Con qué frecuencia postergas tareas importantes?',
    alternatives: [
      { text: 'Siempre dejo todo para último momento', score: 1 },
      { text: 'Casi siempre postergo lo importante', score: 2 },
      { text: 'A veces me pasa, pero suelo cumplir', score: 3 },
      { text: 'Casi nunca procrastino, soy disciplinado/a', score: 4 },
    ],
  },
  {
    id: 4,
    question: '¿Qué tan claro tienes tu propósito o metas personales?',
    alternatives: [
      { text: 'No tengo claro qué quiero en este momento', score: 1 },
      { text: 'Tengo ideas, pero nada concreto', score: 2 },
      { text: 'Tengo metas claras, pero me cuesta avanzar', score: 3 },
      { text: 'Sé lo que quiero y actúo en función de ello', score: 4 },
    ],
  },
  {
    id: 5,
    question:
      '¿Qué tan cómodo te sientes usando IA (ChatGPT, Gemini, etc.) en tu vida diaria?',
    alternatives: [
      { text: 'Nunca he usado IA', score: 1 },
      { text: 'La he probado pero no sé usarla bien', score: 2 },
      { text: 'La uso para algunas tareas', score: 3 },
      { text: 'Uso IA de forma habitual y estratégica', score: 4 },
    ],
  },
  {
    id: 6,
    question: '¿Cuál de estas frases te representa mejor?',
    alternatives: [
      { text: 'Necesito que me den pasos concretos y simples', score: 1 },
      { text: 'Me gusta aprender con ejemplos y práctica', score: 2 },
      { text: 'Prefiero entender la teoría antes de actuar', score: 3 },
      { text: 'Soy autodidacta, me gusta explorar por mi cuenta', score: 4 },
    ],
  },
  {
    id: 7,
    question:
      '¿Cuánto tiempo al día pasas en redes sociales o apps no académicas?',
    alternatives: [
      { text: 'Más de 5 horas al día', score: 1 },
      { text: 'Entre 3 y 5 horas', score: 2 },
      { text: 'Entre 1 y 2 horas', score: 3 },
      { text: 'Menos de 1 hora', score: 4 },
    ],
  },
  {
    id: 8,
    question: '¿Qué te gustaría mejorar primero?',
    alternatives: [
      { text: 'Organizar mejor mi tiempo', score: 1 },
      { text: 'Concentrarme más y dejar de postergar', score: 2 },
      {
        text: 'Aprender a usar herramientas digitales (Notion, IA, etc.)',
        score: 3,
      },
      { text: 'Sentirme más motivado/a y con dirección', score: 4 },
    ],
  },
  {
    id: 9,
    question: '¿Cómo conociste a Capaso?',
    alternatives: [
      {
        text: 'Mediante redes sociales (Ej: Instagram, Tik Tok, etc)',
        score: 1,
      },
      { text: 'Me lo recomendó un amigo', score: 2 },
      { text: 'Busqué en internet y me apareció', score: 3 },
      { text: 'Otros', score: 4 },
    ],
  },
];
