import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Typography } from '../../atoms/Typography/Typography';
import { Icon } from '../../atoms/Icon/Icon';
import { useForm } from '@/shared/hooks/useForm';
import { SignupData } from '@/features/auth/signup/signupData.types';
import { validateSignup } from '@/features/auth/signup/signupValidator';
import { DatePicker } from '../../molecules/DatePicker/DatePicker';
import { usePassword } from '@/shared/hooks/usePassword';
import { useSignup } from '@/features/auth/signup/hooks/useSignup';

function Signup(props: { onClickLogin?: () => void }) {
  const { onClickLogin } = props;
  const { executeSignup } = useSignup();
  const { showPassword, togglePasswordVisibility } = usePassword();
  const { errors, values, handleSubmit, setValue } = useForm<SignupData>({
    validator: validateSignup,
    keysList: [
      'email',
      'password',
      'name',
      'lastName',
      'birthdate',
      'confirmPassword',
    ],
    onSubmit: executeSignup,
  });

  return (
    <>
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={onClickLogin}
      >
        <Typography className="text-primary font-bold">
          Iniciar sesión
        </Typography>
      </Button>
      <div className="mx-auto grid h-screen max-w-5xl grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 lg:gap-16">
        <form
          className="mx-auto -mt-8 w-full place-content-center px-4"
          onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit();
          }}
        >
          <Typography variant="h2" className="text-primary mb-12">
            Completa tus datos para{' '}
            <span className="text-[#c3a780]">registrarte</span>
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <Input
              startIcon="user"
              type="text"
              value={values.name}
              onChange={(ev) => setValue('name', ev.target.value)}
              placeholder="Nombre"
              className="mt-4"
              errorMessage={errors?.name}
              error={!!errors?.name}
            />
            <Input
              startIcon="user"
              type="text"
              value={values.lastName}
              onChange={(ev) => setValue('lastName', ev.target.value)}
              placeholder="Apellidos"
              className="mt-4"
              errorMessage={errors?.lastName}
              error={!!errors?.lastName}
            />
          </div>
          <DatePicker
            className="mt-4"
            onChange={(date) => setValue('birthdate', date)}
            placeholder="Fecha de nacimiento"
            errorMessage={errors?.birthdate}
          />
          <Input
            startIcon="mail"
            type="email"
            value={values.email}
            onChange={(ev) => setValue('email', ev.target.value)}
            placeholder="Correo electrónico"
            className="mt-4"
            errorMessage={errors?.email}
            error={!!errors?.email}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              startIcon="lock"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={(ev) => setValue('password', ev.target.value)}
              placeholder="Contraseña"
              className="mt-4"
              endContent={
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  className="text-gray-500"
                  onClick={togglePasswordVisibility}
                />
              }
              errorMessage={errors?.password}
              error={!!errors?.password}
            />
            <Input
              startIcon="lock"
              type={showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={(ev) => setValue('confirmPassword', ev.target.value)}
              placeholder="Repite tu Contraseña"
              className="mt-4 mb-8"
              errorMessage={errors?.confirmPassword}
              error={!!errors?.confirmPassword}
            />
          </div>
          <Button size="lg" variant="primary" className="w-full" type="submit">
            <Typography className="ml-2 font-bold text-white">
              Registrarme
            </Typography>
          </Button>
        </form>
        <div className="hidden md:block">
          <img
            src="/assets/characters/capito-running.png"
            width={500}
            className="scale-x-[-1] transform"
          />
        </div>
      </div>
    </>
  );
}

export default Signup;
