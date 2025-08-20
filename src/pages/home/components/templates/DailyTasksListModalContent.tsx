import { cn } from '@/shared/lib/utils';
import { useRenderStore } from '@/shared/store/render-store';
import { Button } from '@/shared/ui';
import { useState } from 'react';
import AddDailyTask from './AddDailyTask';
import {
  Reminder,
  ReminderCategory,
} from '../../store/reminder/reminder.types';
import { useReminderStore } from '../../store/reminder/reminder-store';
import { CalendarIcon, CheckIcon, PlusIcon, XIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';

const categoryColors = {
  hoy: 'bg-blue-500',
  programado: 'bg-red-500',
  todos: 'bg-gray-500',
  marcados: 'bg-orange-500',
};

const categoryIcons = {
  hoy: <CalendarIcon />,
  programado: <CalendarIcon />,
  todos: <CheckIcon />,
  marcados: <CheckIcon />,
};

export default function DailyTasksListModalContent() {
  const reminders = useReminderStore((state) => state.reminders);
  const addReminder = useReminderStore((state) => state.addReminder);
  const deleteReminder = useReminderStore((state) => state.deleteReminder);
  const toggleReminderStatus = useReminderStore(
    (state) => state.toggleReminderStatus,
  );
  const [selectedCategory, setSelectedCategory] =
    useState<ReminderCategory>('hoy');

  const setModalData = useRenderStore((state) => state.setModalData);

  const handleAddReminder = (data: Reminder) => {
    if (data.title.trim() === '') return;

    const reminder: Reminder = {
      id: Date.now().toString(),
      title: data.title,
      status: 'pendiente',
      category: data.category,
      date: data.category === 'programado' ? data.date : undefined,
      notes: data.notes || undefined,
      priority: data.priority || 'media',
    };

    addReminder(reminder);
    setModalData({
      children: <DailyTasksListModalContent />,
      containerClassName: '!min-w-[900px] min-h-[500px]',
    });
  };

  const openModalData = () => {
    setModalData({
      children: <AddDailyTask addReminder={handleAddReminder} />,
    });
  };

  const filteredReminders = reminders.filter((reminder) => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'marcados') return reminder.priority === 'alta';
    return reminder.category === selectedCategory;
  });

  const countByCategory = (category: ReminderCategory) => {
    if (category === 'todos') return reminders.length;
    if (category === 'marcados')
      return reminders.filter((r) => r.priority === 'alta').length;
    return reminders.filter((r) => r.category === category).length;
  };

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[35%_auto]">
      <div className="p-4">
        <p className="text-primary mb-4 text-2xl font-semibold">
          Recordatorios
        </p>
        <Input placeholder="Buscar" className="mb-4" />
        <nav className="space-y-1">
          {(
            ['hoy', 'programado', 'todos', 'marcados'] as ReminderCategory[]
          ).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium',
                selectedCategory === category
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100',
              )}
            >
              <div className="flex items-center">
                <div
                  className={cn(
                    'mr-3 items-center justify-center rounded-full p-1 text-white',
                    categoryColors[category],
                  )}
                >
                  {categoryIcons[category]}
                </div>
                <span className="capitalize">{category}</span>
              </div>
              <span className="text-sm text-gray-500">
                {countByCategory(category)}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-3xl">
          <header className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 capitalize">
              {selectedCategory}
            </h2>
            <Button variant="outline" size="md" onClick={openModalData}>
              <PlusIcon />
              Nuevo
            </Button>
          </header>

          <div className="space-y-2">
            {filteredReminders.length === 0 ? (
              <EmptyState category={selectedCategory} />
            ) : (
              filteredReminders.map((reminder) => (
                <ReminderItem
                  key={reminder.id}
                  reminder={reminder}
                  onToggle={toggleReminderStatus}
                  onDelete={deleteReminder}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReminderItem({
  reminder,
  onToggle,
  onDelete,
}: {
  reminder: Reminder;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const priorityColors = {
    alta: 'border-l-4 border-l-red-500',
    media: 'border-l-4 border-l-yellow-500',
    baja: 'border-l-4 border-l-green-500',
  };

  return (
    <div
      className={cn(
        'group flex items-start justify-between rounded-lg border border-transparent bg-gray-100 p-3 shadow-sm transition-all',
        reminder.status === 'completado' ? 'opacity-70' : 'opacity-100',
        reminder.priority ? priorityColors[reminder.priority] : '',
      )}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(reminder.id)}
          className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gray-300"
          aria-label={
            reminder.status === 'completado'
              ? 'Marcar como pendiente'
              : 'Marcar como completado'
          }
        >
          {reminder.status === 'completado' && (
            <CheckIcon />
          )}
        </button>
        <div className="space-y-1">
          <p
            className={cn(
              'font-medium',
              reminder.status === 'completado'
                ? 'text-gray-500 line-through'
                : 'text-gray-900',
            )}
          >
            {reminder.title}
          </p>
          {reminder.date && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <CalendarIcon />
              <span>{new Date(reminder.date).toLocaleDateString()}</span>
            </div>
          )}
          {reminder.notes && (
            <p className="text-xs text-gray-500">{reminder.notes}</p>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onDelete(reminder.id)}
          className="invisible text-gray-400 group-hover:visible hover:text-gray-600"
          aria-label="Eliminar recordatorio"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
}

// Componente para mostrar el estado vacío
function EmptyState({ category }: { category: ReminderCategory }) {
  const messages = {
    hoy: 'No tienes recordatorios para hoy',
    programado: 'No tienes recordatorios programados',
    todos: 'No tienes recordatorios',
    marcados: 'No tienes recordatorios marcados',
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4 rounded-full bg-gray-100 p-4">
        <CheckIcon />
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">
        {messages[category]}
      </h3>
      <p className="text-sm text-gray-500">
        Haz clic en el botón + para añadir un nuevo recordatorio
      </p>
    </div>
  );
}
