export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  subSkills: SubSkill[];
}
export interface SubSkill {
  id: string;
  name: string;
}
export const CATEGORIES = [
  {
    id: 'soft-skills',
    name: 'Habilidades blandas',
    imageUrl: '/assets/characters/soft-skills.png',
    subSkills: [
      { id: 'comm', name: 'Comunicación efectiva' },
      { id: 'team', name: 'Trabajo en equipo' },
      { id: 'adapt', name: 'Adaptabilidad y resiliencia' },
      { id: 'creative', name: 'Creatividad e innovación' },
    ],
  },
  {
    id: 'personal well-being',
    name: 'Bienestar social',
    imageUrl: '/assets/characters/personal-well-being.png',
    subSkills: [
      { id: 'self-care', name: 'Auto cuidado y límites saludables' },
      { id: 'gratitude', name: 'Gratitud y reciprocidad' },
      { id: 'social-adapt', name: 'Adaptabilidad social' },
      { id: 'empathy', name: 'Empatía y conexión humana' },
    ],
  },
  {
    id: 'time-management',
    name: 'Optimización de tiempo',
    imageUrl: '/assets/characters/time-management.png',
    subSkills: [
      { id: 'prioritization', name: 'Priorización inteligente' },
      { id: 'planning', name: 'Planificación efectiva' },
      { id: 'anti-procrastination', name: 'Técnicas anti procrastinación' },
    ],
  },
  {
    id: 'emotional-control',
    name: 'Control de emociones',
    imageUrl: '/assets/characters/emotion-control.png',
    subSkills: [
      { id: 'emotional-awareness', name: 'Autoconciencia emocional' },
      { id: 'discomfort-tolerance', name: 'Tolerancia al malestar' },
      { id: 'self-compassion', name: 'Autocompasión' },
      { id: 'positive-emotions', name: 'Cultivo de emociones positivas' },
    ],
  },
];
