import { useRenderStore } from '@/shared/store/render-store';
import { Typography } from '../../atoms/Typography';
import { School } from './data';
import UpdateTeacherEmail from '../update-teacher-email';
import TeacherSignupFormWrapper from '../auth/teacher-signup/TeacherSignupFormWrapper';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  const setModalData = useRenderStore((state) => state.setModalData);

  const handleSelectSchool = () => {
    setModalData({
      containerClassName: 'bg-landing-dark',
      fullScreen: true,
      children: (
        <TeacherSignupFormWrapper
          component={<UpdateTeacherEmail />}
          title="Actualiza tu correo electrónico"
        />
      ),
    });
  };
  return (
    <div
      className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
      onClick={handleSelectSchool}
    >
      <div className="space-y-1">
        <Typography variant="h6" className="text-primary-2 font-medium">
          {school.name}
        </Typography>
        <Typography variant="body2">{school.address}</Typography>
      </div>
      <div className="text-right">
        <Typography variant="body2">
          {school.teacherCount}{' '}
          {school.teacherCount === 1 ? 'profesor' : 'profesores'} en Capo
        </Typography>
      </div>
    </div>
  );
}
