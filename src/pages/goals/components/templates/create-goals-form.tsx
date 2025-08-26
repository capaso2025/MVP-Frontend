import { useCreateGoal } from '@/features/goals/hooks/use-create-goal';
import { CreateGoalPayload } from '@/features/goals/models/create-goal';
import { createGoalValidator } from '@/features/goals/validators/create-goal-validator';
import { CATEGORIES } from '@/shared/constants/categories';
import { FREQUENCY } from '@/shared/constants/frequency';
import { SIZE } from '@/shared/constants/size';
import { useForm } from '@/shared/hooks/useForm';
import { Button, Typography } from '@/shared/ui';
import Input from '@/shared/ui/atoms/Input/Input';
import Select from '@/shared/ui/molecules/Select';

const KEYS_LIST = [
  'title',
  'description',
  'category',
  'type',
  'targetValue',
  'unit',
  'deadline',
  'frequency',
];
function CreateGoalsForm() {
  const { mutate } = useCreateGoal();
  function onSubmit(data: CreateGoalPayload) {
    mutate(
      {
        ...data,
        targetValue: Number(data.targetValue),
      },
      {
        onSuccess: () => {
          console.log('Meta registrada:', data);
        },
        onError: (error) => {
          console.error('Error al registrar la meta:', error);
        },
      },
    );
  }
  const { errors, onChange, handleSubmit, onSelectChange, values, loading } = useForm({
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
        {CATEGORIES.map((el) => {
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
          name="unit"
          value={values.unit}
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
        {FREQUENCY.map((el) => {
          return (
            <div
              onClick={() =>
                onChange({
                  target: { name: 'frequency', value: el.id }
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
              className={`flex items-center cursor-pointer gap-2 rounded-md border border-gray-300 p-2 ${values.frequency === el.id ? 'bg-blue-100' : ''}`}
            >
              <Typography variant='body2'>{el.label}</Typography>
            </div>
          );
        })}
      </div>
      <Button
        className="mt-4 w-full"
        size="md"
        type="submit"
        isLoading={loading}
      >
        Registrar meta
      </Button>
    </form>
  );
}

export default CreateGoalsForm;
