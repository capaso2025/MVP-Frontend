import { forwardRef, HTMLAttributes, useState } from 'react';
import Input from '@/shared/ui/atoms/Input/Input';
import { Typography } from '@/shared/ui/atoms/Typography';
import Spacer from '@/shared/ui/atoms/Spacer';
import { Button } from '@/shared/ui/atoms/Button';
import { useRenderStore } from '@/shared/store/render-store';
import { SchoolFinder } from '../../school-finder';
import { ChevronDownIcon } from '@/shared/ui/atoms/Icon/Icon';
import TeacherSignupFormWrapper from './TeacherSignupFormWrapper';

const TeacherSignupForm = forwardRef<
  HTMLFormElement,
  HTMLAttributes<HTMLDivElement>
>((props) => {
  const { className, ...rest } = props;
  const [formData, setFormData] = useState({
    email: '',
    title: 'Sr./a',
    firstName: '',
    lastName: '',
    password: '',
    role: 'Maestro',
    referral: '',
  });
  const setModalData = useRenderStore((state) => state.setModalData);
  const handleSchoolFinderModal = () => {
    setModalData({
      containerClassName: 'bg-landing-dark',
      fullScreen: true,
      children: (
        <TeacherSignupFormWrapper
          component={<SchoolFinder />}
          title="Encuentra tu colegio"
        />
      ),
    });
  };

  const handleInscription = () => {
    handleSchoolFinderModal();
    // Aquí puedes agregar la lógica para manejar la inscripción del usuario
  };

  return (
    <div
      className={`animate-fade-in bg-background mx-auto mt-4 max-w-xl rounded-4xl px-8 py-4 ${className}`}
      {...rest}
    >
      <div className="text-md mb-4 text-center">
        ¿Ya tienes una cuenta?{' '}
        <Typography
          as="span"
          variant="h6"
          className="text-primary-2 hover:underline"
        >
          Inicia sesión aquí
        </Typography>
      </div>

      <form className="space-y-4">
        <Typography variant="h5" className="text-primary font-normal">
          Datos Personales
        </Typography>
        <div className="relative">
          <label className={`mb-1.5 text-sm font-medium`}>Título</label>
          <select
            className="bg-foreground h-[40px] w-full appearance-none rounded-lg border border-gray-300 px-4"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          >
            <option value="Sr./a">Sr./a</option>
            <option value="Dr./a">Dr./a</option>
            <option value="Prof./a">Prof./a</option>
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-9 right-3 h-5 w-5 text-gray-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" label="Nombre" />
          <Input type="text" label="Apellidos" />
        </div>
        <Spacer size="xs" />
        <Typography variant="h5" className="text-primary font-normal">
          Datos de Cuenta
        </Typography>

        <Input
          label="Correo electrónico"
          type="email"
          placeholder="ejemplo@gmail.com"
        />
        <Input type="password" label="Contraseña" placeholder="********" />

        <div className="relative">
          <label className={`mb-1.5 text-sm font-medium`}>Rol</label>
          <select
            className="bg-foreground h-[40px] w-full appearance-none rounded-lg border border-gray-300 px-4"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="Maestro">Maestro</option>
            <option value="Profesor">Profesor</option>
            <option value="Instructor">Instructor</option>
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-9 right-3 h-5 w-5 text-gray-500" />
        </div>

        <div className="relative">
          <select className="bg-foreground h-[40px] w-full appearance-none rounded-lg border border-gray-300 px-4">
            <option value="" disabled selected>
              ¿Cómo te enteraste de nosotros? (opcional)
            </option>
            <option value="redes">Redes sociales</option>
            <option value="amigo">Un amigo</option>
            <option value="busqueda">Búsqueda en internet</option>
            <option value="otros">Otros</option>
          </select>
          <ChevronDownIcon className="pointer-events-none absolute top-3 right-3 h-5 w-5 text-gray-500" />
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          Al registrarte, aceptas los{' '}
          <a href="#" className="text-primary-2 font-bold hover:underline">
            Términos de Servicio
          </a>{' '}
          y{' '}
          <a href="#" className="text-primary-2 font-bold hover:underline">
            Política de Privacidad
          </a>
          .
        </div>

        <Button
          size="md"
          className="w-full"
          variant="landing"
          onClick={handleInscription}
        >
          Inscríbete
        </Button>
      </form>
    </div>
  );
});
TeacherSignupForm.displayName = 'TeacherSignupForm';
export default TeacherSignupForm;
