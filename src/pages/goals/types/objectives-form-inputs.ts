import { Difficulty } from '@/shared/enums/difficult';
import { Frequency } from '@/shared/enums/frequency';

export type ObjectivesFormInputs = {
  title: string;
  notes: string;
  checklist: string;
  difficulty: Difficulty;
  startDate: string;
  repeats: Frequency;
  repeatEvery: number;
  repeatOn: string;
  tags: string;
};
