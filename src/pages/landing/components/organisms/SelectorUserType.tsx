import { Button, Typography } from '@/shared/ui';
import Spacer from '@/shared/ui/atoms/Spacer';
function InfoSection() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 place-content-center">
      {
        [{
          image: '/assets/characters/capito-teach.png',
          title: 'Eres el pilar de los estudiantes',
          buttonText: 'Comenzar como profesor',
        }, {
          image: '/assets/characters/capito-teach.png',
          title: 'Eres el líder de la institución',
          buttonText: 'Comenzar como institución',
        }].map(el => (
          <div className='text-center'>
            <Typography variant="h3" className="text-primary">
              {el.title}
            </Typography>
            <Spacer size="md" />
            <Button variant='outline' className={`flex cursor-pointer border-2 border-transparent !bg-primary-lighter hover:!border-primary hover:shadow-2xl !rounded-3xl flex-col w-[60%] !p-8 !transition-all !duration-200`} size="lg">
              <img src={el.image} width={250} />
              <Spacer size="xl" />
              <Typography variant='h5' className="text-primary font-normal">{el.buttonText}</Typography>
            </Button>
          </div>
        ))
      }
    </div>
  );
}

export default InfoSection;
