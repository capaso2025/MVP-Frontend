import { Check, X } from 'lucide-react';
import { Typography } from '../../atoms/Typography';
import { useSortingGame } from './hooks/useSortingGame';

export default function SortingGame(props: {
  finishCallback?: (() => void) | undefined;
}) {
  const { finishCallback } = props;
  const {
    items,
    groups,
    availableItems,
    correctGroups,
    getGroupStatus,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleRemoveFromGroup,
  } = useSortingGame({
    finishCallback,
  });

  return (
    <div className="p-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 grid grid-cols-1 items-start gap-4 text-center md:grid-cols-[30%_auto] lg:text-left">
          <img
            src="/conversation.png"
            alt=""
            width={400}
            className="mask-transparent-right mx-auto rounded"
          />
          <div>
            <Typography variant="h3">Arma la Comunicación</Typography>
            <p className="text-secondary mb-4">
              Arrastra los elementos a los grupos correctos
            </p>

            {/* Available Items */}
            <div className="my-8">
              <div className="w-full">
                <div className="flex flex-wrap gap-3">
                  {availableItems.length === 0 ? (
                    <p className="w-full py-4 text-center text-gray-500">
                      Todos los elementos han sido asignados
                    </p>
                  ) : (
                    availableItems.map((item) => (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id)}
                        className="cursor-move rounded-lg border-2 border-dashed border-gray-300 bg-white p-3 shadow-sm transition-all duration-200 select-none hover:border-blue-400 hover:bg-blue-50"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          {item.text}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const groupItems = items.filter(
              (item) => item.currentGroup === group.id,
            );
            const status = getGroupStatus(group.id);
            return (
              <div key={group.id} className="relative">
                <div className="pb-3">
                  <div className="flex items-center justify-between">
                    <Typography>{group.name}</Typography>
                    <div className="flex items-center">
                      {status === 'correct' && (
                        <div className="rounded-full bg-green-100 p-1">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                      {status === 'incorrect' && (
                        <div className="rounded-full bg-red-100 p-1">
                          <X className="h-5 w-5 text-red-600" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, group.id)}
                    className={`min-h-[120px] rounded-lg border-2 border-dashed p-4 transition-all duration-200 ${
                      status === 'correct'
                        ? 'border-green-300 bg-green-50'
                        : status === 'incorrect'
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
                    }`}
                  >
                    <div className="space-y-2">
                      {groupItems.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleRemoveFromGroup(item.id)}
                          className={`cursor-pointer rounded p-2 transition-all duration-200 select-none ${
                            item.correctGroup === group.id
                              ? 'border border-green-300 bg-green-100 text-green-800 hover:bg-green-200'
                              : 'border border-red-300 bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    {groupItems.length === 0 && (
                      <div className="flex h-full flex-col justify-center text-center text-sm text-gray-400">
                        <div>Arrastra elementos aquí</div>
                        <div className="mt-1 text-xs">
                          (Máximo {group.maxItems} elemento
                          {group.maxItems > 1 ? 's' : ''})
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="bg-foreground rounded-lg">
          <div className="p-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-gray-600">Progreso:</span>
              <div className="flex gap-2">
                {groups.map((group) => {
                  const status = getGroupStatus(group.id);
                  return (
                    <div
                      key={group.id}
                      className={`h-4 w-4 rounded-full transition-colors duration-300 ${
                        status === 'correct'
                          ? 'bg-green-500'
                          : status === 'incorrect'
                            ? 'bg-red-500'
                            : 'bg-secondary/20'
                      }`}
                      title={group.name}
                    />
                  );
                })}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {correctGroups} / {groups.length} completados
              </span>
              {correctGroups === groups.length && (
                <span className="text-sm font-bold text-green-600">
                  ¡Felicidades! 🎉
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
