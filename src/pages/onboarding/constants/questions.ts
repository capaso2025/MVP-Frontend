export const QUESTIONS: {
  id: string;
  question: string;
  type: 'score' | 'choice';
  alternatives: {
    text: string;
    value: number | string;
  }[];
}[] = [
  {
    id: 'planning',
    question: '¿Con qué frecuencia planificas tus semanas o días?',
    type: 'score',
    alternatives: [
      { text: 'Nunca planifico nada', value: 1 },
      { text: 'A veces lo intento, pero no soy constante', value: 2 },
      {
        text: 'Planifico lo básico (exámenes o entregas importantes)',
        value: 3,
      },
      { text: 'Siempre tengo un plan semanal o diario', value: 4 },
    ],
  },
  {
    id: 'techSkill',
    question:
      '¿Cómo describirías tu relación con la tecnología para estudiar o trabajar?',
    type: 'score',
    alternatives: [
      {
        text: 'Me cuesta usar apps o plataformas, me confundo fácilmente',
        value: 1,
      },
      { text: 'Sé usar lo básico (Google, Word), pero nada más', value: 2 },
      {
        text: 'Me defiendo con algunas herramientas (Notion, Trello, Drive)',
        value: 3,
      },
      { text: 'Me encanta usar herramientas digitales, incluso IA', value: 4 },
    ],
  },
  {
    id: 'selfManagement',
    question: '¿Con qué frecuencia postergas tareas importantes?',
    type: 'score',
    alternatives: [
      { text: 'Siempre dejo todo para último momento', value: 1 },
      { text: 'Casi siempre postergo lo importante', value: 2 },
      { text: 'A veces me pasa, pero suelo cumplir', value: 3 },
      { text: 'Casi nunca procrastino, soy disciplinado/a', value: 4 },
    ],
  },
  {
    id: 'purpose',
    question: '¿Qué tan claro tienes tu propósito o metas personales?',
    type: 'score',
    alternatives: [
      { text: 'No tengo claro qué quiero en este momento', value: 1 },
      { text: 'Tengo ideas, pero nada concreto', value: 2 },
      { text: 'Tengo metas claras, pero me cuesta avanzar', value: 3 },
      { text: 'Sé lo que quiero y actúo en función de ello', value: 4 },
    ],
  },
  {
    id: 'aiFriendly',
    question:
      '¿Qué tan cómodo te sientes usando IA (ChatGPT, Gemini, etc.) en tu vida diaria?',
    type: 'score',
    alternatives: [
      { text: 'Nunca he usado IA', value: 1 },
      { text: 'La he probado pero no sé usarla bien', value: 2 },
      { text: 'La uso para algunas tareas', value: 3 },
      { text: 'Uso IA de forma habitual y estratégica', value: 4 },
    ],
  },
  {
    id: 'cognitiveStyle',
    question: '¿Cuál de estas frases te representa mejor?',
    type: 'choice',
    alternatives: [
      { text: 'Necesito que me den pasos concretos y simples', value: 'a' },
      { text: 'Me gusta aprender con ejemplos y práctica', value: 'b' },
      { text: 'Prefiero entender la teoría antes de actuar', value: 'c' },
      { text: 'Soy autodidacta, me gusta explorar por mi cuenta', value: 'd' },
    ],
  },
  {
    id: 'digitalDistraction',
    question:
      '¿Cuánto tiempo al día pasas en redes sociales o apps no académicas?',
    type: 'score',
    alternatives: [
      { text: 'Más de 5 horas al día', value: 1 },
      { text: 'Entre 3 y 5 horas', value: 2 },
      { text: 'Entre 1 y 2 horas', value: 3 },
      { text: 'Menos de 1 hora', value: 4 },
    ],
  },
  {
    id: 'priority',
    question: '¿Qué te gustaría mejorar primero?',
    type: 'choice',
    alternatives: [
      { text: 'Organizar mejor mi tiempo', value: 'a' },
      { text: 'Concentrarme más y dejar de postergar', value: 'b' },
      {
        text: 'Aprender a usar herramientas digitales (Notion, IA, etc.)',
        value: 'c',
      },
      { text: 'Sentirme más motivado/a y con dirección', value: 'd' },
    ],
  },
  {
    id: 'howFoundUs',
    question: '¿Cómo conociste a Capaso?',
    type: 'choice',
    alternatives: [
      {
        text: 'Mediante redes sociales (Ej: Instagram, Tik Tok, etc)',
        value: 'a',
      },
      { text: 'Me lo recomendó un amigo', value: 'b' },
      { text: 'Busqué en internet y me apareció', value: 'c' },
      { text: 'Otros', value: 'd' },
    ],
  },
];
// public static readonly QUESTIONS = [
//     {
//       id: 'planning',
//       question: 'How often do you plan your week or day?',
//       type: 'score',
//       alternatives: [
//         { text: 'I never plan anything', value: 1 },
//         { text: 'I try, but I’m inconsistent', value: 2 },
//         { text: 'I plan only basic things (exams, deadlines)', value: 3 },
//         { text: 'I always have a weekly or daily plan', value: 4 },
//       ],
//     },
//     {
//       id: 'techSkill',
//       question: 'How do you relate to technology for studying or working?',
//       type: 'score',
//       alternatives: [
//         { text: 'I struggle with apps and platforms', value: 1 },
//         { text: 'I can use basic tools like Google or Word', value: 2 },
//         { text: 'I handle tools like Notion, Trello, Drive', value: 3 },
//         { text: 'I love using digital tools, even AI', value: 4 },
//       ],
//     },
//     {
//       id: 'selfManagement',
//       question: 'How often do you procrastinate important tasks?',
//       type: 'score',
//       alternatives: [
//         { text: 'I always leave things until the last moment', value: 1 },
//         { text: 'I often procrastinate important tasks', value: 2 },
//         { text: 'Sometimes I do, but I usually meet deadlines', value: 3 },
//         { text: 'I rarely procrastinate, I’m disciplined', value: 4 },
//       ],
//     },
//     {
//       id: 'purpose',
//       question: 'How clear are your personal goals or purpose?',
//       type: 'score',
//       alternatives: [
//         { text: 'I have no idea what I want', value: 1 },
//         { text: 'I have some ideas, but nothing concrete', value: 2 },
//         { text: 'I have goals, but struggle to make progress', value: 3 },
//         { text: 'I know what I want and act on it', value: 4 },
//       ],
//     },
//     {
//       id: 'aiFriendly',
//       question:
//         'How comfortable are you using AI (ChatGPT, Gemini, etc.) daily?',
//       type: 'score',
//       alternatives: [
//         { text: 'I’ve never used AI', value: 1 },
//         { text: 'I’ve tried it but don’t know how to use it well', value: 2 },
//         { text: 'I use it for some tasks', value: 3 },
//         { text: 'I use AI regularly and strategically', value: 4 },
//       ],
//     },
//     {
//       id: 'cognitiveStyle',
//       question: 'Which of these best describes your learning style?',
//       type: 'choice',
//       alternatives: [
//         { text: 'I need simple, step-by-step instructions', value: 'a' },
//         { text: 'I like learning through examples and practice', value: 'b' },
//         { text: 'I prefer to understand the theory first', value: 'c' },
//         { text: 'I’m autodidact, I like to explore on my own', value: 'd' },
//       ],
//     },
//     {
//       id: 'digitalDistraction',
//       question:
//         'How much time do you spend on social media or non-academic apps daily?',
//       type: 'score',
//       alternatives: [
//         { text: 'More than 5 hours', value: 1 },
//         { text: 'Between 3 and 5 hours', value: 2 },
//         { text: 'Between 1 and 2 hours', value: 3 },
//         { text: 'Less than 1 hour', value: 4 },
//       ],
//     },
//     {
//       id: 'priority',
//       question: 'What would you like to improve first?',
//       type: 'choice',
//       alternatives: [
//         { text: 'Time management', value: 'a' },
//         { text: 'Focus and stop procrastinating', value: 'b' },
//         { text: 'Learn to use digital tools (Notion, AI, etc.)', value: 'c' },
//         { text: 'Feel more motivated and have direction', value: 'd' },
//       ],
//     },
//     {
//       id: 'howFoundUs',
//       question: 'How did you find Capaso?',
//       type: 'choice',
//       alternatives: [
//         { text: 'Social media (Instagram, TikTok, etc.)', value: 'a' },
//         { text: 'A friend recommended it', value: 'b' },
//         { text: 'I found it while searching online', value: 'c' },
//         { text: 'Other', value: 'd' },
//       ],
//     },
//   ];
