import Spacer from '@/shared/ui/atoms/Spacer';
import InfoSection from './components/organisms/InfoSection';
import SelectorUserType from './components/organisms/SelectorUserType';
import Main from './components/organisms/Main';
function Landing() {
  return (
    <div className="animate-fade-in bg-gradient-to-r from-[#ccdae4] to-[#6b7091]">
      <div className='mx-auto w-[90%] lg:max-w-6xl xl:w-full'>
        <Main />
        <InfoSection
          title="Respaldado por psicólogos"
          color='text-white'
          image='/assets/characters/capito-university.png' imgPosition="left" description="Cada herramienta y contenido ha sido desarrollado con el acompañamiento de psicólogos especializados en adolescentes y jóvenes. Tu bienestar emocional es tan importante como tu crecimiento académico y personal." />
        <Spacer size="3xl" />
        <InfoSection
          title='Mantén tu motivación'
          image='/assets/characters/capito-ladders.png' imgPosition="right" description="En Capo, convertimos tu progreso en pequeñas victorias diarias que te mantienen motivado y con ganas de seguir. Porque avanzar también puede sentirse bien, desde el primer paso." />
        <Spacer size="3xl" />
        <SelectorUserType />
        <Spacer size="3xl" />
      </div>
    </div>
  );
}

export default Landing;
