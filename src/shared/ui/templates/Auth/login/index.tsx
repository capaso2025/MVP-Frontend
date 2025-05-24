import { Button } from '../../../atoms/Button';
import { Typography } from '../../../atoms/Typography';
import { useForm } from '@/shared/hooks/useForm';
import { LoginData } from '@/features/auth/login/types/loginData.types';
import { validateLogin } from '@/features/auth/login/loginValidator';
import { usePassword } from '@/shared/hooks/usePassword';
import { useLogin } from '@/features/auth/login/hooks/useLogin';
import Input from '@/shared/ui/atoms/Input/Input';
import { EyeIcon } from 'lucide-react';

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

  return (
    <>
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={onClickSignup}
      >
        <Typography className="text-primary font-bold">Regístrate</Typography>
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
            Ingresa tus credenciales para{' '}
            <span className="text-primary-2">iniciar sesión</span>
          </Typography>
          <Input
            type="email"
            value={values.email}
            onChange={(ev) => setValue('email', ev.target.value)}
            placeholder="Correo electrónico"
            className="mt-4"
          // errorMessage={errors?.email}
          // error={!!errors?.email}
          />
          <Input
            icon={<EyeIcon />}
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(ev) => setValue('password', ev.target.value)}
            placeholder="Contraseña"
            className="mt-4 mb-8"
            iconOnClick={
              togglePasswordVisibility
            }
          // errorMessage={errors?.password}
          // error={!!errors?.password}
          />
          <Button size="lg" variant="primary" className="w-full" type="submit">
            <Typography className="ml-2 font-bold text-white">
              Ingresar
            </Typography>
          </Button>
          {/* <div>
            <Typography
              variant="subtitle2"
              className="text-primary mt-4 cursor-pointer text-right"
            >
              Olvidaste tu contraseña?
            </Typography>
          </div> */}
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

export default Login;
