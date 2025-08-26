import { useForm } from '@/shared/hooks/useForm';
import { SignupData } from '@/features/auth/signup/signup-data';
import { validateSignup } from '@/features/auth/signup/signup-validator';
import { usePassword } from '@/shared/hooks/usePassword';
import { useSignup } from '@/features/auth/signup/hooks/use-signup';
import { Button } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui/atoms/Typography';
import { EyeIcon, EyeOffIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from '@/shared/ui/atoms/Spacer';
import { useNavigate } from '@tanstack/react-router';
import Logo from '@/assets/capo-logo.png';
import { getParsedUserFromStorage } from '@/shared/lib/utils';

function Signup(props: { onClickLogin?: () => void }) {
  const { onClickLogin } = props;
  const navigate = useNavigate();
  const { mutate: executeSignup } = useSignup();
  const { showPassword, togglePasswordVisibility } = usePassword();
  const { errors, values, handleSubmit, setValue } = useForm<SignupData>({
    validator: validateSignup,
    keysList: [
      'email',
      'password',
      'lastName',
      'confirmPassword',
    ],
    onSubmit: executeSignup,
  });

  return (
    <div className='bg-landing-dark'>
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={onClickLogin}
      >
        <Typography className='text-white'>
          Iniciar sesión
        </Typography>
      </Button>
      <div className="mx-auto pt-2 max-w-5xl">
        <img
          onClick={() => navigate({
            to: "/"
          })}
          src={Logo}
          width={50}
          height={50}
          alt="logo de capo"
          color="text-primary"
          className="cursor-pointer p-1 ml-2 lg:ml-0"
        />
      </div>
      <div className="mx-auto grid h-[calc(100vh-58px)] max-w-5xl grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 lg:gap-16">
        <form
          className="mx-auto -mt-8 w-full place-content-center px-4"
          onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit();
          }}
        >
          <Typography variant="h2" className="text-white mb-12">
            Completa tus datos para{' '}
            <span className="text-primary-2">registrarte</span>
          </Typography>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              variant="dark"
              inputSize="lg"
              defaultValue={getParsedUserFromStorage()?.firstName}
              disabled
              label="Nombre"
              name='name'
              errors={errors}
            />
            <Input
              type="text"
              variant="dark"
              inputSize="lg"
              value={values.lastName}
              onChange={(ev) => setValue('lastName', ev.target.value)}
              label="Apellidos"
              name='lastName'
              errors={errors}
            />
          </div>
          <Spacer size='md' />
          <Input
            type="email"
            variant="dark"
            inputSize="lg"
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
              variant="dark"
              inputSize="lg"
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
              variant="dark"
              inputSize="lg"
            />
          </div>
          <Spacer size='md' />
          <Button variant="landing" className="w-full mt-4" type="submit">
            <Typography className='text-white'>
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
    </div>
  );
}

export default Signup;
