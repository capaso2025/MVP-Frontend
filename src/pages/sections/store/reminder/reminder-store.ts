import { create } from 'zustand';
import { Reminder } from './reminder.types';

interface ReminderStore {
  reminders: Reminder[];
  setReminders: (reminders: Reminder[]) => void;
  addReminder: (reminder: Reminder) => void;
  deleteReminder: (id: string) => void;
  toggleReminderStatus: (id: string) => void;
}
export const useReminderStore = create<ReminderStore>((set) => ({
  reminders: [],
  setReminders: (reminders) => set(() => ({ reminders })),
  addReminder: (reminder) =>
    set((state) => ({ reminders: [...state.reminders, reminder] })),
  deleteReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.filter((reminder) => reminder.id !== id),
    })),
  toggleReminderStatus: (id: string) =>
    set((state) => ({
      reminders: state.reminders.map((reminder) =>
        reminder.id === id
          ? {
              ...reminder,
              status:
                reminder.status === 'completado' ? 'pendiente' : 'completado',
            }
          : reminder,
      ),
    })),
}));
