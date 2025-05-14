import { Module } from '../types/modules.types';

export const MODULES: Module[] = [
  {
    title: '¿Por qué nadie me entiende (y cómo evitarlo)?',
    image: '/assets/characters/capito-happy.png',
    imagePosition: 'left',
    objective: 'Entender barreras de comunicación y cómo evitarlas.',
    levels: [
      { level: 1, title: '¿Qué es la comunicación realmente?' },
      { level: 2, title: 'Barreras invisibles (emociones, juicios, filtros)' },
      { level: 3, title: 'Lenguaje no verbal', type: 'normal' },
      { level: 4, title: 'Tú crees que fuiste claro… ¿pero lo fuiste?' },
      {
        level: 5,
        title:
          'Mini reto interactivo — reconstruye una conversación con fallos y corrígela',
        type: 'final',
      },
    ],
  },
  {
    title: 'El superpoder de escuchar',
    image: '/assets/characters/capito-happy.png',
    imagePosition: 'right',
    objective: 'Aprender a escuchar activamente.',
    levels: [
      { level: 1, title: 'La escucha que no escucha' },
      { level: 2, title: 'Escucha activa y empática' },
      { level: 3, title: 'Técnica del espejo', type: 'normal' },
      { level: 4, title: 'Reto de “escuchar sin interrumpir”' },
      {
        level: 5,
        title:
          'Desbloquea una medalla de “Oído ninja” al superar un diálogo interactivo',
        type: 'final',
      },
    ],
  },
  {
    title: 'Di lo que piensas sin miedo',
    image: '/assets/characters/capito-happy.png',
    imagePosition: 'left',
    objective: 'Fortalecer la expresión clara y sin temor.',
    levels: [
      { level: 1, title: 'Identifica lo que sientes y piensas' },
      { level: 2, title: 'Técnicas para hablar desde el “yo”' },
      { level: 3, title: 'Lo que callas pesa' },
      {
        level: 4,
        title: 'Mini juego — Escribe tu opinión con diferentes tonos',
      },
      {
        level: 5,
        title: '“Defiende tu idea” — reto interactivo estilo diálogo',
        type: 'final',
      },
    ],
  },
  {
    title: 'Conversaciones difíciles sin drama',
    image: '/assets/characters/capito-happy.png',
    imagePosition: 'right',
    objective: 'Gestionar conflictos y tensiones con madurez.',
    levels: [
      { level: 1, title: '¿Por qué evitamos el conflicto?' },
      { level: 2, title: 'Técnica del sándwich' },
      { level: 3, title: 'Validar sin ceder' },
      {
        level: 4,
        title: 'Caso práctico — conversación con un amigo que te falló',
      },
      {
        level: 5,
        title: '“Boss level” — conversación compleja con toma de decisiones',
        type: 'final',
      },
    ],
  },
];
