import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/ui';
import { useState, useEffect } from 'react';
import AddTask from './AddTask';

interface TimerTask {
  id: string;
  title: string;
  completed: boolean;
  timersEstimated: number;
  timersCompleted: number;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TimerTask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState<TimerTask[]>([]);

  useEffect(() => {
    let filtered = [...tasks];
    if (filter === 'pending') {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filter === 'completed') {
      filtered = filtered.filter((task) => task.completed);
    }
    setFilteredTasks(filtered);
  }, [tasks, filter]);

  const toggleTaskCompleted = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask: TimerTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      completed: false,
      timersEstimated: 1,
      timersCompleted: 0,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTaskTitle('');
  };

  return (
    <div className="space-y-4">
      <AddTask
        value={newTaskTitle}
        setValue={setNewTaskTitle}
        onClick={addTask}
      />
      {filteredTasks.length === 0 ? (
        <div className="text-muted-foreground py-8 text-center">
          {filter === 'pending'
            ? 'No hay tareas pendientes. ¡Añade una nueva tarea!'
            : filter === 'completed'
              ? 'No hay tareas completadas.'
              : 'No hay tareas. ¡Añade una nueva tarea!'}
        </div>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              'border-primary-lighter flex items-start gap-3 rounded-lg border p-4 transition-colors',
              task.completed && 'border-dashed',
            )}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
              className="mt-0.5"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <p className={task.completed ? 'line-through' : ''}>
                    {task.title}
                  </p>
                  {task.completed && (
                    <span className="text-sm text-green-500">(Completada)</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
