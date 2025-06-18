import { MAIN_DATA } from '@/data/main-data';
import { useOnboardingStore } from '@/pages/onboarding/store/onboarding-store';

export const useSection = () => {
  const category = useOnboardingStore((state) => state.category);

  const sectionTitle: {
    [key in keyof typeof MAIN_DATA]?: string;
  } = {
    'capaso-ia': 'Capaso IA',
    'soft-skills': 'Habilidades Blandas',
    'time-management': 'Gestión del Tiempo',
    'emotional-control': 'Control Emocional',
  };
  return {
    data: category ? MAIN_DATA[category as keyof typeof MAIN_DATA] : [],
    sectionTitle:
      sectionTitle[category as keyof typeof sectionTitle] ||
      'Sección Desconocida',
  };
};
