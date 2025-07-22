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
    description: 'Includes',
    features: [
      { iconColor: 'text-green-500', text: 'Pro two-week trial' },
      { iconColor: 'text-green-500', text: 'Limited agent requests' },
      { iconColor: 'text-green-500', text: 'Limited tab completions' },
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
    price: '$20',
    priceNote: '/mo',
    description: 'Everything in Hobby, plus',
    features: [
      { iconColor: 'text-green-400', text: 'Extended limits on agent' },
      { iconColor: 'text-green-400', text: 'Unlimited tab completions' },
      { iconColor: 'text-green-400', text: 'Access to Background Agents' },
      { iconColor: 'text-green-400', text: 'Access to Bug Bot' },
      {
        iconColor: 'text-green-400',
        text: 'Access to maximum context windows',
      },
    ],
    actions: [
      {
        type: 'button',
        props: {
          variant: 'secondary',
          children: 'Get Pro',
        },
      },
      {
        type: 'button',
        props: {
          variant: 'ghost',
          className: 'text-white hover:bg-white/10 flex items-center gap-2',
          children: ['More info', 'external'],
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
    title: 'Ultra',
    price: '$200',
    priceNote: '/mo',
    description: 'Everything in Pro, plus',
    features: [
      {
        iconColor: 'text-green-500',
        text: '20x usage on all OpenAI, Claude, Gemini models',
      },
      { iconColor: 'text-green-500', text: 'Priority access to new features' },
    ],
    actions: [
      {
        type: 'button',
        props: {
          variant: 'secondary',
          children: 'Get Ultra',
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
