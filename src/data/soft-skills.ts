import { Module } from '@/shared/types/modules.types';
import speak from '@/assets/speak.png';
import leadership from '@/assets/leadership.png';
import decision from '@/assets/decisition.png';
import team from '@/assets/team.png';

export const SOFT_SKILLS_SECTIONS: {
  id: string;
  title: string;
  bubbleText: string;
  progress: number;
  onClick: () => void;
  isActive?: boolean;
  image: string;
  modules?: Module[];
}[] = [
  {
    id: '1',
    title: 'Comunicación Efectiva',
    bubbleText:
      'Exprésate con claridad y empatía. Haz que tus ideas conecten y generen impacto en cualquier entorno.',
    progress: 50,
    onClick: () => console.log('Section 1 clicked'),
    isActive: true,
    image: speak,
    modules: [
      {
        title: '¿Por qué nadie me entiende (y cómo evitarlo)?',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          { level: 1, title: '¿Qué es la comunicación realmente?' },
          {
            level: 2,
            title: 'Barreras invisibles (emociones, juicios, filtros)',
          },
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
        lessons: [
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
        lessons: [
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
        lessons: [
          { level: 1, title: '¿Por qué evitamos el conflicto?' },
          { level: 2, title: 'Técnica del sándwich' },
          { level: 3, title: 'Validar sin ceder' },
          {
            level: 4,
            title: 'Caso práctico — conversación con un amigo que te falló',
          },
          {
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
    title: 'Liderazgo',
    bubbleText:
      'Inspira, guía y potencia a los demás. El liderazgo empieza con tu ejemplo y visión.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: leadership,
  },
  {
    id: '3',
    title: 'Toma de Decisiones',
    bubbleText:
      'Analiza, prioriza y actúa con seguridad. Mejora tu criterio para enfrentar cualquier desafío.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: decision,
  },
  {
    id: '4',
    title: 'Trabajo en Equipo',
    bubbleText:
      'Colabora con confianza, escucha activamente y alcanza metas junto a otros. El éxito se construye en equipo.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    image: team,
  },
];
