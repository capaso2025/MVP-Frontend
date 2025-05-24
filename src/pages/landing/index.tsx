import Spacer from '@/shared/ui/atoms/Spacer';
import InfoSection from './components/organisms/InfoSection';
import Main from './components/organisms/Main';
import Header from './components/molecules/Header';
import Container from '@/shared/ui/atoms/Container';
import { SECTIONS_TEXTS } from './constants/sections-texts';
import { useRenderStore } from '@/shared/store/render-store';
import TeacherSignupForm from '@/shared/ui/templates/Auth/teacher-signup/TeacherSignupForm';
function Landing() {
  const setModalData = useRenderStore((state) => state.setModalData);

  const openTeacherModal = () => {
    setModalData({
      containerClassName: "bg-landing",
      fullScreen: true,
      title: "Crea tu cuenta como profesor",
      children: <TeacherSignupForm />,
    })
  }
  return (
    <div className="relative animate-fade-in bg-landing">
      <Header />
      <Container>
        <Main />
        <Spacer size="xl" />
        <InfoSection
          id={SECTIONS_TEXTS.NOSOTROS.ID}
          title={SECTIONS_TEXTS.NOSOTROS.TITLE}
          color='text-primary-light'
          image='/assets/characters/capito-university.png' imgPosition="left" description={SECTIONS_TEXTS.NOSOTROS.DESCRIPTION} />
        <Spacer size="3xl" />
        <InfoSection
          color='text-white'
          title={SECTIONS_TEXTS.NOSOTROS_2.TITLE}
          image='/assets/characters/capito-ladders.png' imgPosition="right" description={SECTIONS_TEXTS.NOSOTROS_2.DESCRIPTION} />
        <Spacer size="3xl" />
      </Container>
      <div className='bg-primary'>
        <Spacer size="3xl" />
        <Container>
          <InfoSection
            id={SECTIONS_TEXTS.PROFESORES.ID}
            color='text-white'
            title={SECTIONS_TEXTS.PROFESORES.TITLE}
            description={SECTIONS_TEXTS.PROFESORES.DESCRIPTION}
            withButton
            descriptionProps={{
              variant: 'h5',
              className: '!text-secondary font-normal text-center'
            }}
            buttonProps={{
              children: SECTIONS_TEXTS.PROFESORES.BUTTON_TEXT,
              onClick: openTeacherModal
            }}
            image='/assets/characters/capito-teach.png' imgPosition="left" />
          <Spacer size="3xl" />
          <InfoSection
            id={SECTIONS_TEXTS.INSTITUCIONES.ID}
            color='text-white'
            title={SECTIONS_TEXTS.INSTITUCIONES.TITLE}
            withButton
            description={SECTIONS_TEXTS.INSTITUCIONES.DESCRIPTION}
            descriptionProps={{
              variant: 'h5',
              className: '!text-secondary font-normal text-center'
            }}
            buttonProps={{
              children: SECTIONS_TEXTS.INSTITUCIONES.BUTTON_TEXT
            }}
            image='/assets/characters/capito-teach.png' imgPosition="right" />
          <Spacer size="3xl" />
        </Container>
      </div>
    </div>
  );
}

export default Landing;
