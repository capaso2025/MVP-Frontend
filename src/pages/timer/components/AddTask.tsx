import { Button } from '@/shared/ui';
import { PlusIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';

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
        <PlusIcon />
        Añadir
      </Button>
    </div>
  );
}

export default AddTask;
