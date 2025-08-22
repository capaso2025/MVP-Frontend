import { useCreateGoals } from '@/features/goals/hooks/useCreateGoals';
import { CreateGoalPayload } from '@/features/goals/models/create-goal';
import { createGoalValidator } from '@/features/goals/validators/create-goal-validator';
import { useForm } from '@/shared/hooks/useForm';
import { Button } from '@/shared/ui';
import Input from '@/shared/ui/atoms/Input/Input';

const KEYS_LIST = [
  'title',
  'description',
  'category',
  'type',
  'targetValue',
  'unit',
  'deadline',
  'frequency',
]
function AddGoalsForm() {
  const { mutate } = useCreateGoals();
  function onSubmit(data: CreateGoalPayload) {
    mutate({
      ...data,
      targetValue: Number(data.targetValue),
    }, {
      onSuccess: () => {
        console.log('Meta registrada:', data);
      },
      onError: (error) => {
        console.error('Error al registrar la meta:', error);
      },
    });
  }
  const { errors, onChange, handleSubmit, values, loading } = useForm({
    onSubmit,
    validator: createGoalValidator,
    keysList: KEYS_LIST
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
        placeholder="Ej: Aprender React"
        containerClassName='mb-2'
      />

      <Input
        label="Descripcion"
        name="description"
        value={values.description}
        onChange={onChange}
        errors={errors}
        placeholder="Describe tu meta"
        containerClassName='mb-4'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <Input
          label="Categoria"
          name="category"
          value={values.category}
          onChange={onChange}
          errors={errors}
          placeholder="Ej: Educación, Salud, Finanzas..."
        />
        <Input
          label="Tipo"
          name="type"
          value={values.type}
          onChange={onChange}
          errors={errors}
          placeholder="Ej: Hábito, Objetivo puntual..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
      <Input
        label="Frecuencia"
        name="frequency"
        value={values.frequency}
        onChange={onChange}
        containerClassName='mb-4'
        errors={errors}
        placeholder="Ej: Diario, Semanal, Mensual..."
      />
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

export default AddGoalsForm;
