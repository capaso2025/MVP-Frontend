import Spacer from '@/shared/ui/atoms/Spacer';
import InfoSection from './components/organisms/InfoSection';
import Main from './components/organisms/Main';
import Header from './components/molecules/Header';
import Container from '@/shared/ui/atoms/Container';
function Landing() {
  return (
    <div className="animate-fade-in bg-gradient-to-b from-[#ced8df] to-[#42455a]">
      <Container>
        <Header />
        <Main />
        <InfoSection
          id='nosotros'
          title="Respaldado por psicólogos"
          color='text-primary-light'
          image='/assets/characters/capito-university.png' imgPosition="left" description="Cada herramienta y contenido ha sido desarrollado con el acompañamiento de psicólogos especializados en adolescentes y jóvenes. Tu bienestar emocional es tan importante como tu crecimiento académico y personal." />
        <Spacer size="3xl" />
        <InfoSection
          color='text-white'
          title='Mantén tu motivación'
          image='/assets/characters/capito-ladders.png' imgPosition="right" description="En Capo, convertimos tu progreso en pequeñas victorias diarias que te mantienen motivado y con ganas de seguir. Porque avanzar también puede sentirse bien, desde el primer paso." />
        <Spacer size="3xl" />
      </Container>
      <div className='bg-primary'>
        <Spacer size="3xl" />
        <Container>
          <InfoSection
            id='profesores'
            color='text-white'
            title='Eres el pilar de los estudiantes'
            withButton
            buttonText='Comenzar como profesor'
            description='Capo es una herramienta que te permite acompañar a tus estudiantes en su proceso de aprendizaje.'
            descriptionProps={{
              variant: 'h5',
              className: '!text-secondary font-normal text-center'
            }}
            image='/assets/characters/capito-teach.png' imgPosition="left" />
          <Spacer size="3xl" />
          <InfoSection
            id='instituciones'
            color='text-white'
            title='Comenzar como institución'
            withButton
            buttonText='Comenzar como institución'
            description='Capo es una herramienta que te permite acompañar a tus estudiantes en su proceso de aprendizaje.'
            descriptionProps={{
              variant: 'h5',
              className: '!text-secondary font-normal text-center'
            }}
            image='/assets/characters/capito-teach.png' imgPosition="right" />
          <Spacer size="3xl" />
        </Container>
      </div>
    </div>
  );
}

export default Landing;
