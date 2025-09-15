import { CreateGoalPayload } from '../models/create-goal';

export const createGoalValidator = (data: CreateGoalPayload) => {
  const errors: Record<string, string> = {};
  if (!data.title) errors.title = 'El título es obligatorio';
  if (!data.description) errors.description = 'La descripción es obligatoria';
  if (!data.category) errors.category = 'La categoría es obligatoria';
  if (!data.targetValue)
    errors.targetValue = 'El valor objetivo es obligatorio';
  if (!data.targetUnit) errors.targetUnits = 'La unidad es obligatoria';
  if (!data.deadline) errors.deadline = 'La fecha límite es obligatoria';
  if (!data.frequency) errors.frequency = 'La frecuencia es obligatoria';

  return {
    isValid: Object.keys(data).every(
      (key) => data[key as keyof typeof data] !== '',
    ),
    errors,
  };
};
