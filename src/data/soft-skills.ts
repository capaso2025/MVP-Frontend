import { Module } from '@/shared/types/modules.types';
import team from '@/assets/team.png';
import communication from '/assets/characters/communication.jpg';
import emotionControl from '/assets/characters/emotion-control.png';
import leadership from '/assets/characters/leadership.jpeg';

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
    image: communication,
    modules: [
      {
        id: '1',
        title: 'Fundamentos de la comunicación',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Entender barreras de comunicación y cómo evitarlas.',
        lessons: [
          {
            level: 1,
            title: '¿Qué es la comunicación realmente?',
            id: '1',
            activity: 'FLASH_CARDS',
          },
          {
            id: '2',
            level: 2,
            title: 'Barreras invisibles (emociones, juicios, filtros)',
            activity: 'SORTING_GAME',
          },
          {
            id: '3',
            level: 3,
            title: 'Lenguaje no verbal',
            type: 'normal',
            activity: 'QUIZ',
          },
          {
            id: '4',
            level: 4,
            title: 'Tú crees que fuiste claro… ¿pero lo fuiste?',
            activity: 'FLASH_CARDS',
          },
          {
            id: '5',
            level: 5,
            title:
              'Mini reto interactivo — reconstruye una conversación con fallos y corrígela',
            type: 'final',
            activity: 'RESUME',
          },
        ],
      },
      {
        id: '2',
        title: 'Estilos: pasivo, agresivo, asertivo',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'right',
        objective: 'Aprender a escuchar activamente.',
        lessons: [
          { id: '1', level: 1, title: 'La escucha que no escucha' },
          { id: '2', level: 2, title: 'Escucha activa y empática' },
          { id: '3', level: 3, title: 'Técnica del espejo', type: 'normal' },
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
        title: 'Barreras comunes',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'left',
        objective: 'Fortalecer la expresión clara y sin temor.',
        lessons: [
          { id: '1', level: 1, title: 'Identifica lo que sientes y piensas' },
          { id: '2', level: 2, title: 'Técnicas para hablar desde el “yo”' },
          { id: '3', level: 3, title: 'Lo que callas pesa' },
          {
            id: '4',
            level: 4,
            title: 'Mini juego — Escribe tu opinión con diferentes tonos',
          },
          {
            id: '5',
            level: 5,
            title: '“Defiende tu idea” — reto interactivo estilo diálogo',
            type: 'final',
          },
        ],
      },
      {
        id: '4',
        title: 'Conversaciones difíciles sin drama',
        image: '/assets/characters/capito-happy.png',
        imagePosition: 'right',
        objective: 'Gestionar conflictos y tensiones con madurez.',
        lessons: [
          { id: '1', level: 1, title: '¿Por qué evitamos el conflicto?' },
          { id: '2', level: 2, title: 'Técnica del sándwich' },
          { id: '3', level: 3, title: 'Validar sin ceder' },
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
    image: emotionControl,
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
