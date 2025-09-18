import { ObjectivesFormInputs } from '@/pages/goals/types/objectives-form-inputs';

export const createObjectiveValidator = (data: ObjectivesFormInputs) => {
  const errors: Record<string, string> = {};
  if (!data.title) errors.title = 'El título es obligatorio';
  if (!data.notes) errors.notes = 'Las notas son obligatorias';
  if (!data.checklist) errors.checklist = 'La checklist es obligatoria';
  if (!data.difficulty) errors.difficulty = 'La dificultad es obligatoria';
  if (!data.startDate) errors.startDate = 'La fecha de inicio es obligatoria';
  if (!data.repeats) errors.repeats = 'La frecuencia es obligatoria';
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
