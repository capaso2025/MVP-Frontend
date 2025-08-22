export interface PricingPlanFeature {
  iconColor: string;
  text: string;
}

export interface PricingPlanAction {
  type: 'button';
  props: {
    variant?: string;
    className?: string;
    leftIcon?: 'download' | 'external';
    children: string | [string, 'external'];
  };
}

export interface PricingPlan {
  key: string;
  title: string;
  price: string;
  priceNote: string | null;
  description: string;
  features: PricingPlanFeature[];
  actions: PricingPlanAction[];
  containerClass: string;
  priceClass: string;
  priceNoteClass?: string;
  descriptionClass: string;
  gradientClass?: string;
  innerClass?: string;
  image: string; // Nueva propiedad
}

export const pricingPlans: PricingPlan[] = [
  {
    key: 'hobby',
    title: 'Hobby',
    price: 'Free',
    priceNote: null,
    description: 'Incluye',
    features: [
      {
        iconColor: 'text-green-500',
        text: 'Acceso al onboarding completo y diagnóstico inicial.',
      },
      {
        iconColor: 'text-green-500',
        text: 'Primer roadmap básico (Nivel 1) desbloqueado.',
      },
      {
        iconColor: 'text-green-500',
        text: 'Avatar inicial sin personalización premium.',
      },
      {
        iconColor: 'text-green-500',
        text: 'Retos diarios limitados (hasta 7 por semana).',
      },
      { iconColor: 'text-green-500', text: 'Métricas de progreso básicas.' },
      {
        iconColor: 'text-green-500',
        text: 'Acceso a comunidad general de Capaso.',
      },
    ],
    actions: [
      {
        type: 'button',
        props: {
          variant: 'secondary',
          children: 'Comenzar',
        },
      },
    ],
    containerClass: 'bg-white/2',
    priceClass: 'text-5xl font-bold',
    descriptionClass: 'text-sm text-gray-400 mb-4',
    image: '/assets/characters/capito-happy.png',
  },
  {
    key: 'pro',
    title: 'Pro',
    price: '$7',
    priceNote: '/mo',
    description: 'Todo lo de Hobby, más',
    features: [
      {
        iconColor: 'text-green-400',
        text: 'Acceso ilimitado a todos los módulos y niveles.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Personalización avanzada del roadmap.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Avatar premium y evoluciones exclusivas.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Misiones semanales con recompensas especiales.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Estadísticas avanzadas y reportes para padres.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Retos y eventos en cohortes.',
      },
      {
        iconColor: 'text-green-400',
        text: 'Soporte prioritario.',
      },
    ],
    actions: [
      {
        type: 'button',
        props: {
          variant: 'secondary',
          children: 'Obtener Pro',
        },
      },
      {
        type: 'button',
        props: {
          variant: 'ghost',
          className: 'text-white hover:bg-white/10 flex items-center gap-2',
          children: ['Más info', 'external'],
        },
      },
    ],
    containerClass: 'bg-landing-dark rounded-2xl',
    gradientClass:
      'absolute inset-0 bg-gradient-to-br rounded-[36px] from-primary-dark border border-white/10 via-primary-2 to-primary-dark',
    innerClass:
      'relative rounded-0 bg-primary-dark/80 backdrop-blur-sm h-full text-white',
    priceClass: 'text-5xl font-bold',
    priceNoteClass: 'text-sm text-gray-300',
    descriptionClass: 'text-sm text-gray-300 mb-4',
    image: '/assets/characters/capito-excited-2.png',
  },
  {
    key: 'ultra',
    title: 'Pro Anual',
    price: '$70',
    priceNote: '/mo',
    description: 'Todo lo de Pro Mensual, más:',
    features: [
      {
        iconColor: 'text-green-500',
        text: 'Ahorro de 17% (equivalente a $5,83/mes).',
      },
      {
        iconColor: 'text-green-500',
        text: 'Acceso prioritario a nuevas funcionalidades',
      },
      {
        iconColor: 'text-green-500',
        text: 'Invitación a eventos exclusivos de Capaso',
      },
      {
        iconColor: 'text-green-500',
        text: '2 meses adicionales gratis para un amigo o familiar',
      },
      {
        iconColor: 'text-green-500',
        text: 'Badge de “Miembro Fundador” en perfil y avatar',
      },
    ],
    actions: [
      {
        type: 'button',
        props: {
          variant: 'secondary',
          children: 'Obtener anual',
        },
      },
    ],
    containerClass: 'bg-landing-dark',
    priceClass: 'text-5xl font-bold',
    priceNoteClass: 'text-sm text-gray-400',
    descriptionClass: 'text-sm text-gray-400 mb-4',
    image: '/assets/characters/capito-director.png',
  },
];
