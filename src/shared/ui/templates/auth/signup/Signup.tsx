
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/shared/ui/atoms/Button';
import { Typography } from '@/shared/ui/atoms/Typography';
import Logo from '@/assets/capo-logo.png';
import SignupForm from './signup-form';

function Signup(props: { onClickLogin?: () => void }) {
  const { onClickLogin } = props;
  const navigate = useNavigate();

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
        <SignupForm />
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
