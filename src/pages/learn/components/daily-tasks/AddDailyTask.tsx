import { Button, Input, Radio, Typography } from '@/shared/ui';
import {
  Reminder,
  ReminderCategory,
} from '../../store/reminder/reminder.types';
import { useState } from 'react';

function AddDailyTask(props: { addReminder: (data: Reminder) => void }) {
  const { addReminder } = props;
  const [newReminder, setNewReminder] = useState({
    title: '',
    category: 'hoy' as ReminderCategory,
    date: '',
    notes: '',
    priority: 'media',
  });
  return (
    <div>
      <div className="sm:max-w-md">
        <Typography className="text-center">Nuevo Recordatorio</Typography>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Input
              placeholder="Título"
              className="border-0 border-b border-gray-200 px-0 text-lg font-medium placeholder:text-gray-400 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={newReminder.title}
              onChange={(e) =>
                setNewReminder({ ...newReminder, title: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Typography className="text-xs font-medium text-gray-500 uppercase">
              Categoría
            </Typography>

            {(['hoy', 'programado', 'todos'] as ReminderCategory[]).map(
              (category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Radio
                    onClick={() => {
                      setNewReminder({ ...newReminder, category });
                    }}
                    value={category}
                    checked={category === newReminder.category}
                    id={category}
                    label={category}
                    name="category"
                  />
                </div>
              ),
            )}
          </div>

          {newReminder.category === 'programado' && (
            <div className="space-y-2">
              <Typography>Fecha</Typography>
              <Input
                id="date"
                type="date"
                value={newReminder.date}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, date: e.target.value })
                }
                className="border-gray-200"
              />
            </div>
          )}

          <div className="space-y-2">
            <Typography>Prioridad</Typography>

            <div className="flex items-center space-x-4">
              {['alta', 'media', 'baja'].map((priority) => (
                <Radio
                  key={priority}
                  onClick={() => {
                    setNewReminder({ ...newReminder, priority });
                  }}
                  value={priority}
                  checked={priority === newReminder.priority}
                  id={priority}
                  label={priority}
                  name="priority"
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Typography className="text-xs font-medium text-gray-500 uppercase">
              Notas
            </Typography>
            <textarea
              id="notes"
              rows={3}
              placeholder="Añadir notas..."
              className="w-full rounded-md border border-gray-200 p-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              value={newReminder.notes}
              onChange={(e) =>
                setNewReminder({ ...newReminder, notes: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button
              onClick={() => {
                addReminder(newReminder);
              }}
              variant="primary"
            >
              Añadir
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDailyTask;
