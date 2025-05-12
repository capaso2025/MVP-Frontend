// Tipos para nuestros recordatorios
export type ReminderStatus = 'completado' | 'pendiente';
export type ReminderCategory = 'hoy' | 'programado' | 'todos' | 'marcados';

export interface Reminder {
  id: string;
  title: string;
  status: ReminderStatus;
  category: ReminderCategory;
  date?: string | undefined;
  notes?: string | undefined;
  priority: 'alta' | 'media' | 'baja';
}
