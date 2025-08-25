import { Button } from '../../../atoms/Button';
import { Typography } from '../../../atoms/Typography';
import { useForm } from '@/shared/hooks/useForm';
import { LoginData } from '@/features/auth/login/login-data';
import { validateLogin } from '@/features/auth/login/login-validator';
import { usePassword } from '@/shared/hooks/usePassword';
import { useLogin } from '@/features/auth/login/hooks/useLogin';
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from '@/shared/ui/atoms/Spacer';
import Logo from '@/assets/capo-logo.png';
import { useNavigate } from '@tanstack/react-router';

function Login(props: { onClickSignup?: () => void }) {
  const { onClickSignup } = props;
  const { executeLogin } = useLogin();
  const { showPassword, togglePasswordVisibility } = usePassword();
  const { errors, values, handleSubmit, setValue } = useForm<LoginData>({
    validator: validateLogin,
    keysList: ['email', 'password'],
    initialValues: {},
    onSubmit: executeLogin,
  });
  const navigate = useNavigate();

  return (
    <div className='bg-landing-dark'>
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={onClickSignup}
      >
        <Typography className='text-white'>Regístrate</Typography>
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
          <Typography variant="h2" className="mb-12">
            Iniciar sesión
          </Typography>
          <Input
            type="email"
            name="email"
            label="Correo electrónico"
            value={values.email}
            onChange={(ev) => setValue('email', ev.target.value)}
            placeholder="example@mail.com"
            errors={errors}
            inputSize="lg"
            variant="dark"
          />
          <Spacer size="md" />
          <Input
            variant="dark"
            inputSize="lg"
            name="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(ev) => setValue('password', ev.target.value)}
            placeholder="********"
            iconOnClick={togglePasswordVisibility}
            errors={errors}
          />
          <Spacer size="md" />
          <Button variant="landing" className="w-full mt-4" type="submit">
            <Typography className='text-white'>
              Ingresar a Capaso
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

export default Login;
