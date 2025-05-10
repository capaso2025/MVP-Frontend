export const CARDS_SECTIONS = [
  {
    title: 'Comunicación Efectiva',
    bubbleText:
      'Exprésate con claridad y empatía. Haz que tus ideas conecten y generen impacto en cualquier entorno.',
    progress: 50,
    onClick: () => console.log('Section 1 clicked'),
    detailsRoute: '/learn/section-1',
    isActive: true,
    image: '/src/assets/speak.png',
  },
  {
    title: 'Liderazgo',
    bubbleText:
      'Inspira, guía y potencia a los demás. El liderazgo empieza con tu ejemplo y visión.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    detailsRoute: '/learn/section-2',
    image: '/src/assets/leadership.png',
  },
  {
    title: 'Toma de Decisiones',
    bubbleText:
      'Analiza, prioriza y actúa con seguridad. Mejora tu criterio para enfrentar cualquier desafío.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    detailsRoute: '/learn/section-2',
    image: '/src/assets/decisition.png',
  },
  {
    title: 'Trabajo en Equipo',
    bubbleText:
      'Colabora con confianza, escucha activamente y alcanza metas junto a otros. El éxito se construye en equipo.',
    progress: 0,
    onClick: () => console.log('Section 2 clicked'),
    detailsRoute: '/learn/section-2',
    image: '/src/assets/team.png',
  },
];
