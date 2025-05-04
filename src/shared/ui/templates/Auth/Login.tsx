import { useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Typography } from '../../atoms/Typography/Typography';
import { Icon } from '../../atoms/Icon/Icon';

function Login(props: { onClickSignup?: () => void }) {
  const { onClickSignup } = props;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <Button
        variant="outline"
        className="absolute top-4 right-4"
        onClick={onClickSignup}
      >
        <Typography variant="subtitle1" className="text-primary font-bold">
          Regístrate
        </Typography>
      </Button>
      <div className="mx-auto grid h-screen max-w-5xl grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 lg:gap-16">
        <div className="mx-auto -mt-8 w-full place-content-center px-4">
          <Typography variant="h2" className="text-primary mb-12">
            Ingresa tus credenciales para{' '}
            <span className="text-primary-2">iniciar sesión</span>
          </Typography>
          <Input
            startIcon="mail"
            type="email"
            value={values.email}
            onChange={(ev) => setValues({ ...values, email: ev.target.value })}
            placeholder="Correo electrónico"
            className="mt-4"
          />
          <Input
            startIcon="lock"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={(ev) =>
              setValues({ ...values, password: ev.target.value })
            }
            placeholder="Contraseña"
            className="mt-4 mb-8"
            endContent={
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                className="text-gray-500"
                onClick={togglePasswordVisibility}
              />
            }
          />
          <Button size="lg" variant="primary" className="w-full">
            <Typography
              variant="subtitle1"
              className="ml-2 font-bold text-white"
            >
              Ingresar
            </Typography>
          </Button>
          <div>
            <Typography
              variant="subtitle2"
              className="text-primary mt-4 cursor-pointer text-right"
            >
              Olvidaste tu contraseña?
            </Typography>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/src/assets/wolf.png"
            width={500}
            className="scale-x-[-1] transform"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
