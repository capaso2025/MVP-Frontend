// Calcular el progreso
export const getMaxTime = (mode: string) => {
  switch (mode) {
    case 'work':
      return 25 * 60;
    case 'shortBreak':
      return 5 * 60;
    case 'longBreak':
      return 15 * 60;
    default:
      return 25 * 60;
  }
};

export const getModeColor = (mode: string) => {
  switch (mode) {
    case 'work':
      return 'bg-red-500';
    case 'shortBreak':
      return 'bg-green-500';
    case 'longBreak':
      return 'bg-blue-500';
    default:
      return 'bg-red-500';
  }
};

// Obtener el título según el modo
export const getModeTitle = (mode: string) => {
  switch (mode) {
    case 'work':
      return 'Trabajo';
    case 'shortBreak':
      return 'Descanso Corto';
    case 'longBreak':
      return 'Descanso Largo';
    default:
      return 'Trabajo';
  }
};
