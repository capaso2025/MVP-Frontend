import { Button, Icon, Input } from '@/shared/ui';

function AddTask(props: {
  value: string;
  setValue: (value: string) => void;
  onClick: () => void;
}) {
  const { value, setValue, onClick } = props;
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Añadir nueva tarea..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        className="flex-1"
      />
      <Button onClick={onClick}>
        <Icon name="plus" />
        Añadir
      </Button>
    </div>
  );
}

export default AddTask;
