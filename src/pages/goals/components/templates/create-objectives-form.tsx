import { useGetGoals } from '@/features/goals/hooks/use-get-goals';
import { createObjectiveValidator } from '@/features/objectives/validators/create-objective-validator';
import { useCreateObjective } from '@/features/objectives/hooks/use-create-objective';
import { useForm } from '@/shared/hooks/useForm';
import { useRenderStore } from '@/shared/store/render-store';
import { Button, Checkbox, Typography } from '@/shared/ui';
import Input from '@/shared/ui/atoms/Input/Input';
import Select from '@/shared/ui/molecules/Select';
import { WeekDays } from '@/shared/enums/week-days';
import { useTranslation } from 'react-i18next';
import { ObjectivesFormInputs } from '../../types/objectives-form-inputs';
import { toast } from 'react-toastify';

const KEYS_LIST: (keyof ObjectivesFormInputs)[] = [
  'title',
  'notes',
  'checklist',
  'difficulty',
  'startDate',
  'repeats',
  'repeatEvery',
  'repeatOn',
  'tags',
];

function CreateObjectivesForm(props: { goalId: string }) {
  const { goalId } = props;
  const { mutate, isPending } = useCreateObjective();
  const { t } = useTranslation();
  const closeModal = useRenderStore((state) => state.closeModal);
  const { refetch: refetchGoals } = useGetGoals();

  function onSubmit(data: ObjectivesFormInputs) {
    mutate(
      {
        notes: data['notes'],
        checklist: data['checklist'] ? data['checklist'].split(',').map(item => item.trim()) : [],
        tags: data['tags'] ? data['tags'].split(',').map(item => item.trim()) : [],
        goalId,
        title: data['title'],
        difficulty: data['difficulty'],
        startDate: data['startDate'],
        repeatEvery: Number(data.repeatEvery || 1),
        repeats: data['repeats'],
        repeatOn: data['repeatOn'] ? data['repeatOn'].split(',').map(item => item.trim() as WeekDays) : [],
      },
      {
        onSuccess: () => {
          closeModal();
          refetchGoals();
        },
        onError: (error) => {
          toast.error(error.message || 'Error al registrar el objetivo');
          console.error('Error al registrar el objetivo:', error);
        },
      },
    );
  }
  const { errors, onChange, handleSubmit, onSelectChange, values } =
    useForm({
      onSubmit,
      validator: createObjectiveValidator,
      keysList: KEYS_LIST
    });
  const checkboxChange = (day: WeekDays) => {
    const convertedValue = values.repeatOn ? values.repeatOn.split(',') : [];
    const newValue = convertedValue?.includes(day)
      ? convertedValue.filter((d) => d !== day)
      : convertedValue.length === 0 ? [day] : [...convertedValue, day];
    onChange({
      target: { name: 'repeatOn', value: newValue.join(',') },
    } as React.ChangeEvent<HTMLInputElement>);
  }

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
        containerClassName="h-max mb-4"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[40%_auto]">
        <Input
          label="Notas"
          name="notes"
          value={values.notes}
          onChange={onChange}
          errors={errors}
          placeholder="Notas adicionales"
          containerClassName="mb-4"
        />
        <Select
          label="Dificultad"
          name="difficulty"
          onChange={onSelectChange}
          errors={errors}
          placeholder="Selecciona dificultad"
          options={[
            { label: 'Fácil', value: 'EASY' },
            { label: 'Media', value: 'MEDIUM' },
            { label: 'Difícil', value: 'HARD' },
          ]}
          className="mb-4"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          label="Fecha de inicio"
          name="startDate"
          value={values.startDate}
          onChange={onChange}
          errors={errors}
          type="date"
          containerClassName="mb-4"
        />
        <Select
          label="Repetición"
          name="repeats"
          onChange={onSelectChange}
          errors={errors}
          placeholder="Selecciona frecuencia"
          options={[
            { label: 'Diario', value: 'DAILY' },
            { label: 'Semanal', value: 'WEEKLY' },
            { label: 'Mensual', value: 'MONTHLY' },
          ]}
          className="mb-4"
        />
      </div>
      <Input
        label="Repetir cada"
        name="repeatEvery"
        value={values.repeatEvery}
        onChange={onChange}
        errors={errors}
        type="number"
        placeholder="Ej: 1, 2, 3..."
        containerClassName="mb-4"
      />
      <Typography variant="body2" className="mb-2 text-gray-500">
        Repetir los días
      </Typography>
      <div className="mb-4 flex flex-wrap gap-4">
        {Object.values(WeekDays).map((day) => (
          <Checkbox
            key={day}
            label={t(day)}
            name="repeatOn"
            value={String(day)}
            checked={values.repeatOn?.includes(day) || false}
            onChange={() => checkboxChange(day)}
          />
        ))}
      </div>
      <Input
        label="Tags (separado por comas)"
        name="tags"
        value={values.tags}
        onChange={onChange}
        errors={errors}
        placeholder="Ej: salud, estudio, trabajo"
        containerClassName="mb-4"
      />
      <Input
        label="Checklist (separado por comas)"
        name="checklist"
        value={values.checklist}
        onChange={onChange}
        errors={errors}
        placeholder="Notas adicionales"
        containerClassName="mb-4"
      />
      <Button
        className="mt-4 w-full"
        size="md"
        type="submit"
        isLoading={isPending}
      >
        Registrar objetivo
      </Button>
    </form>
  );
}

export default CreateObjectivesForm;
