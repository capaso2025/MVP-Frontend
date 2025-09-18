import { useGetObjectiveEvents } from "@/features/objectives-event/hooks/use-get-objective-events";
import { Progress, Typography } from "@/shared/ui";
import Badge from "@/shared/ui/atoms/Badge";
import { Checkbox } from "@/shared/ui/atoms/Checkbox";
import { Calendar, GoalIcon } from "lucide-react";
import { useState } from "react";

function ObjectiveEventsDetails(props: { objectiveId: string }) {
  const { objectiveId } = props;
  const { data: objectiveEvents } = useGetObjectiveEvents(objectiveId);

  // Estado temporal para los eventos - esto debería venir de la API
  const [events, setEvents] = useState([
    { id: '1', title: 'Evento #1', date: '14/09/2025', completed: true },
    { id: '2', title: 'Evento #2', date: '15/09/2025', completed: false },
    { id: '3', title: 'Evento #3', date: '16/09/2025', completed: false },
    { id: '4', title: 'Evento #4', date: '17/09/2025', completed: false },
  ]);

  const toggleEventStatus = (eventId: string) => {
    setEvents(prev => prev.map(event =>
      event.id === eventId
        ? { ...event, completed: !event.completed }
        : event
    ));
  };

  const completedEvents = events.filter(event => event.completed).length;
  const progressPercentage = Math.round((completedEvents / events.length) * 100);

  return <div>
    <div className="flex items-start gap-4 text-primary mt-8">
      <div className="bg-primary/10 rounded-full p-2 hidden md:block">
        <GoalIcon size={24} className="text-primary" />
      </div>
      <div>
        <Typography className="font-semibold" variant="h5">
          Titulo de mi objetivo en curso
        </Typography>
        <Typography variant="body1" className="text-foreground-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis.
        </Typography>
      </div>
    </div>
    <div className="flex items-center justify-start gap-4">
      <div className="flex items-center gap-1 bg-red-100/50 w-max rounded-sm px-2 py-1 mt-4">
        <Calendar className="text-foreground-secondary" size={16} />
        <Typography className="text-foreground-secondary" variant="body2">Fecha limite: 18-09-2025</Typography>
      </div>
      <div className="flex items-center gap-1 bg-red-100/50 w-max rounded-sm px-2 py-1 mt-4">
        <GoalIcon className="text-foreground-secondary" size={16} />
        <Typography className="text-foreground-secondary" variant="body2">
          {completedEvents}/{events.length} eventos completados
        </Typography>
      </div>
    </div>
    <div className="mt-8 mb-1 flex justify-between">
      <Typography variant="caption">Progreso del objetivo</Typography>
      <Typography variant="caption">{progressPercentage}%</Typography>
    </div>
    <Progress className='bg-gradient-to-br from-primary to-primary-light mb-4' value={progressPercentage} />
    <div className="mt-8 flex items-center justify-between">
      <Typography variant="body1">
        Eventos del objetivo
      </Typography>
      <Badge text={`${events.length} eventos totales`} className="text-primary border border-primary/50 w-max " />
    </div>
    <div className="mt-6 space-y-3">
      {events.map((event) => (
        <div
          key={event.id}
          className={`
        flex items-center justify-between p-4 rounded-lg border transition-colors duration-200
        ${event.completed
              ? 'bg-green-50 border-green-200'
              : 'bg-gray-50 border-gray-200'
            }
      `}
        >
          <div className="flex items-center gap-3">
            <Checkbox
              checked={event.completed}
              onChange={() => toggleEventStatus(event.id)}
              className="flex-shrink-0"
            />
            <div className="flex items-center gap-3">
              <Typography
                variant="body1"
                className={`
              font-medium transition-all duration-200
              ${event.completed
                    ? 'text-green-700 line-through'
                    : 'text-gray-900'
                  }
            `}
              >
                {event.title}
              </Typography>
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-gray-500" />
                <Typography
                  variant="body2"
                  className={`
                ${event.completed
                      ? 'text-green-600'
                      : 'text-gray-600'
                    }
              `}
                >
                  {event.date}
                </Typography>
              </div>
            </div>
          </div>

          {event.completed && (
            <Badge
              text="Completado"
              className="bg-green-100 text-green-700 border-green-300"
            />
          )}
        </div>
      ))}
    </div>  </div>
};

export default ObjectiveEventsDetails;