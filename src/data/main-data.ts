import { Category } from '@/pages/onboarding/types/categories';
import { SkillData, SOFT_SKILLS_SECTIONS } from './soft-skills';
import { IA_SKILLS_SECTIONS } from './ia-skills';

export const MAIN_DATA: {
  [key in Category]?: SkillData[];
} = {
  'capaso-ia': IA_SKILLS_SECTIONS,
  'soft-skills': SOFT_SKILLS_SECTIONS,
  'time-management': [],
  'emotional-control': [],
};
