import { useCreateGoal } from '@/features/goals/hooks/use-create-goal';
import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import { CreateGoalPayload } from '@/features/goals/models/create-goal';
import { createGoalValidator } from '@/features/goals/validators/create-goal-validator';
import { CATEGORIES_CONFIG } from '@/shared/constants/categories';
import { SIZE } from '@/shared/constants/size';
import { Frequency } from '@/shared/enums/frequency';
import { useForm } from '@/shared/hooks/useForm';
import { useRenderStore } from '@/shared/store/render-store';
import { Button, Typography } from '@/shared/ui';
import Input from '@/shared/ui/atoms/Input/Input';
import Select from '@/shared/ui/molecules/Select';
import { toast } from 'react-toastify';

const KEYS_LIST: (keyof CreateGoalPayload)[] = [
  'title',
  'description',
  'category',
  'targetUnit',
  'targetValue',
  'deadline',
  'frequency',
];
function CreateGoalsForm() {
  const { mutate, isPending } = useCreateGoal();
  const closeModal = useRenderStore((state) => state.closeModal);
  const { refetch: refetchGoals } = useGetGoals();
  function onSubmit(data: CreateGoalPayload) {
    mutate(
      {
        ...data,
        targetValue: Number(data.targetValue),
      },
      {
        onSuccess: () => {
          console.log('Meta registrada:', data);
          closeModal();
          refetchGoals();
        },
        onError: (error) => {
          toast.error(error.message || 'Error al registrar la meta');
          console.log(error.message);
        },
      },
    );
  }
  const { errors, onChange, handleSubmit, onSelectChange, values } = useForm({
    onSubmit,
    validator: createGoalValidator,
    keysList: KEYS_LIST,
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className='h-full'
    >
      <Input
        label="Titulo"
        name="title"
        value={values.title}
        onChange={onChange}
        errors={errors}
        placeholder="Ej: Completar un libro mensual"
        containerClassName="mb-2"
      />

      <Input
        label="Descripcion"
        name="description"
        value={values.description}
        onChange={onChange}
        errors={errors}
        placeholder="Ej: Leer 20 páginas al día"
        containerClassName="mb-4"
      />
      <Typography variant="body2" className="mb-2 text-gray-500">
        Categoría
      </Typography>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.values(CATEGORIES_CONFIG).map((el) => {
          return (
            <div
              onClick={() =>
                onChange({
                  target: { name: 'category', value: el.id }
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
              className={`flex items-center cursor-pointer gap-2 rounded-md border border-gray-300 p-2 ${values.category === el.id ? 'bg-blue-100' : ''}`}
            >
              {el.icon}
              <Typography variant='body2'>{el.label}</Typography>
            </div>
          );
        })}
      </div>
      <Select
        label="Tipo"
        name="type"
        onChange={onSelectChange}
        errors={errors}
        placeholder="Selecciona una opción"
        options={
          SIZE.map(size => ({
            label: `${size.label} plazo`,
            value: size.key
          }))
        }
        className='mb-4'
      />
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Valor objetivo"
          name="targetValue"
          value={values.targetValue}
          onChange={onChange}
          errors={errors}
          type="number"
          placeholder="Ej: 10, 1000, 5..."
        />
        <Input
          label="Unidad"
          name="targetUnit"
          value={values.targetUnit}
          onChange={onChange}
          errors={errors}
          placeholder="Ej: libros, km, horas..."
        />
      </div>
      <Input
        label="Fecha limite"
        name="deadline"
        value={values.deadline}
        onChange={onChange}
        errors={errors}
        type="date"
        containerClassName='mb-4'
      />
      <Typography variant="body2" className="mb-2 text-gray-500">
        Categoría
      </Typography>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {Object.values(Frequency).map((el) => {
          return (
            <div
              onClick={() =>
                onChange({
                  target: { name: 'frequency', value: el }
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
              className={`flex items-center cursor-pointer gap-2 rounded-md border border-gray-300 p-2 ${values.frequency === el ? 'bg-blue-100' : ''}`}
            >
              <Typography variant='body2'>{el}</Typography>
            </div>
          );
        })}
      </div>
      <Button
        className="mt-4 w-full"
        size="md"
        type="submit"
        isLoading={isPending}
      >
        Registrar meta
      </Button>
    </form>
  );
}

export default CreateGoalsForm;
