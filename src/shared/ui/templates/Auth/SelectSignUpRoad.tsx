import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Typography } from '../../atoms/Typography/Typography';

function SelectSignUpRoad(props: {
  onClickMail?: () => void;
  onClickLogin?: () => void;
}) {
  const { onClickMail, onClickLogin } = props;
  return (
    <>
      <Button variant="outline" className="absolute top-4 right-4">
        <Typography
          variant="subtitle1"
          className="text-primary font-bold"
          onClick={onClickLogin}
        >
          Iniciar sesión
        </Typography>
      </Button>
      <div className="mx-auto grid h-screen max-w-5xl grid-cols-1 place-content-center md:grid-cols-2 md:gap-2 lg:gap-16">
        <div className="mx-auto -mt-8 w-full place-content-center px-4">
          <Typography variant="h2" className="text-primary mb-12">
            Elige una opción para{' '}
            <span className="text-[#c3a780]">registrarte</span>
          </Typography>
          <Button
            size="lg"
            variant="outline"
            className="mt-4 w-full"
            onClick={onClickMail}
          >
            <Icon name="mail" />
            <Typography
              variant="subtitle1"
              className="text-primary ml-2 font-bold"
            >
              Email
            </Typography>
          </Button>
          <div className="mx-auto my-8 flex w-[80%] items-center justify-center">
            <span className="via-primary h-[1px] flex-1 bg-gradient-to-r from-transparent to-transparent" />
            <span className="px-3">o</span>
            <span className="via-primary h-[1px] flex-1 bg-gradient-to-r from-transparent to-transparent" />
          </div>
          <Button size="lg" variant="primary" className="w-full">
            <Icon name="google" fill="none" stroke="none" />
            <Typography
              variant="subtitle1"
              className="ml-2 font-bold text-white"
            >
              Google
            </Typography>
          </Button>
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

export default SelectSignUpRoad;
