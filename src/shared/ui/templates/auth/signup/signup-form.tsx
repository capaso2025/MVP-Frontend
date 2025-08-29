import { useForm } from '@/shared/hooks/useForm';
import { SignupData } from '@/features/auth/signup/signup-data';
import { validateSignup } from '@/features/auth/signup/signup-validator';
import { usePassword } from '@/shared/hooks/usePassword';
import { useSignup } from '@/features/auth/signup/hooks/use-signup';
import { EyeIcon, EyeOffIcon } from '@/shared/ui/atoms/Icon/Icon';
import Input from '@/shared/ui/atoms/Input/Input';
import Spacer from '@/shared/ui/atoms/Spacer';
import { Typography } from '@/shared/ui/atoms/Typography';
import { Button } from '@/shared/ui/atoms/Button';

function SignupForm(props: {
  theme?: "default" | "dark",
  noTitle?: boolean,
  successAction?: ((email: string, password: string) => void) | undefined
}) {
  const { theme = "dark", noTitle = false, successAction } = props;
  const { mutate: executeSignup } = useSignup({
    successAction
  });
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
  return <form
    className="mx-auto w-full place-content-center px-4"
    onSubmit={(ev) => {
      ev.preventDefault();
      handleSubmit();
    }}
  >
    {!noTitle && <Typography variant="h2" className="text-white mb-12">
      Completa tus datos para{' '}
      <span className="text-primary-2">registrarte</span>
    </Typography>}
    <div className="grid grid-cols-2 gap-4">
      <Input
        type="text"
        variant={theme}
        inputSize="lg"
        defaultValue={sessionStorage.getItem('user.firstName') || ''}
        disabled
        label="Nombre"
        name='name'
        errors={errors}
      />
      <Input
        type="text"
        variant={theme}
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
      variant={theme}
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
        variant={theme}
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
        variant={theme}
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
};

export default SignupForm;