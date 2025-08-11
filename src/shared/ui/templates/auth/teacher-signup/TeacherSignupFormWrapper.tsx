import { Typography } from '@/shared/ui/atoms/Typography';
import logo from '@/assets/capo-logo.png';
import { ReactNode } from 'react';

function TeacherSignupFormWrapper(props: {
  component: ReactNode;
  title?: string;
}) {
  const { component, title } = props;
  return (
    <div className="mx-auto grid min-h-screen w-[80%] grid-cols-1 place-content-center items-center gap-4 lg:grid-cols-2">
      <div className="grid place-content-center">
        {title ? (
          <Typography variant="h3" className="text-primary-2 mt-4 mb-8">
            {title}
          </Typography>
        ) : (
          <></>
        )}
        <img
          alt="capo"
          width={500}
          className="mask-transparent-bottom hidden lg:block"
          src="/assets/characters/capito-teach.png"
        />
      </div>
      {component}
      <img
        src={logo}
        alt=""
        className="absolute right-4 -bottom-0 z-0 opacity-[2%]"
        width={400}
      />
    </div>
  );
}

export default TeacherSignupFormWrapper;
