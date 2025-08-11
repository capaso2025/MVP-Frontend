import { useForm } from '@/shared/hooks/useForm';
import { SignupData } from '@/features/auth/signup/signupData.types';
import { validateSignup } from '@/features/auth/signup/signupValidator';
import { usePassword } from '@/shared/hooks/usePassword';
import { useSignup } from '@/features/auth/signup/hooks/useSignup';
import { Button } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui/atoms/Typography';
import { DatePicker } from '@/shared/ui/molecules/DatePicker';
import { EyeIcon, EyeOffIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from '@/shared/ui/atoms/Spacer';

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
              type="text"
              value={values.name}
              onChange={(ev) => setValue('name', ev.target.value)}
              label="Nombre"
              name='name'
              errors={errors}
            />
            <Input
              type="text"
              value={values.lastName}
              onChange={(ev) => setValue('lastName', ev.target.value)}
              label="Apellidos"
              name='lastName'
              errors={errors}
            />
          </div>
          <Spacer size='md' />
          <DatePicker
            onChange={(date) => setValue('birthdate', date)}
            label="Fecha de nacimiento"
            placeholder="dd/mm/aaaa"
            name="birthdate"
            errors={errors}
          />
          <Spacer size='md' />
          <Input
            type="email"
            value={values.email}
            onChange={(ev) => setValue('email', ev.target.value)}
            label="Correo electrónico"
            name="email"
            placeholder='example@mail.com'
            errors={errors}
          />
          <Spacer size='md' />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={(ev) => setValue('password', ev.target.value)}
              label="Contraseña"
              placeholder='********'
              iconOnClick={togglePasswordVisibility}
              icon={
                showPassword ? <EyeOffIcon className='text-gray-500' /> : <EyeIcon className='text-gray-500' />
              }
              name='password'
              errors={errors}
            />
            <Input
              type={showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={(ev) => setValue('confirmPassword', ev.target.value)}
              label="Repite tu Contraseña"
              placeholder='********'
              name='confirmPassword'
              errors={errors}
            />
          </div>
          <Spacer size='md' />
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
