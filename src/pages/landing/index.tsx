import Spacer from '@/shared/ui/atoms/Spacer';
import InfoSection from './components/organisms/InfoSection';
import Main from './components/organisms/Main';
import Header from './components/molecules/Header';
import Container from '@/shared/ui/atoms/Container';
import { SECTIONS_TEXTS } from './constants/sections-texts';
import { useRenderStore } from '@/shared/store/render-store';
import TeacherSignupForm from '@/shared/ui/templates/auth/teacher-signup/TeacherSignupForm';
import Features from './components/organisms/Features';
import Differentiation from './components/organisms/Differentiation';
import Footer from './components/organisms/Footer';
import Demo from './components/organisms/Demo';
import FAQSection from './components/organisms/Faq/Faq';
import QuestionsWidget from './components/molecules/QuestionsWidget';

function Landing() {
  const setModalData = useRenderStore((state) => state.setModalData);
  const openTeacherModal = () => {
    setModalData({
      containerClassName: 'bg-landing',
      fullScreen: true,
      title: 'Crea tu cuenta como profesor',
      children: <TeacherSignupForm />,
    });
  };
  return (
    <div className="animate-fade-in bg-landing relative">
      <Header />
      <Container>
        <Main />
      </Container>
      <Spacer size="3xl" />
      <Container>
        <InfoSection
          id={SECTIONS_TEXTS.NOSOTROS.ID}
          title={SECTIONS_TEXTS.NOSOTROS.TITLE}
          color="text-primary-light"
          image="/assets/characters/capito-university.png"
          imgPosition="left"
          description={SECTIONS_TEXTS.NOSOTROS.DESCRIPTION}
        />
      </Container>
      <Spacer size="3xl" />
      <Container>
        <InfoSection
          color="text-white"
          title={SECTIONS_TEXTS.NOSOTROS_2.TITLE}
          image="/assets/characters/capito-ladders.png"
          imgPosition="right"
          description={SECTIONS_TEXTS.NOSOTROS_2.DESCRIPTION}
        />
      </Container>
      <Spacer size="3xl" />
      <div className="bg-landing-dark">
        <Spacer size="3xl" />
        <Container>
          <Features />
        </Container>
        <Spacer size="3xl" />
      </div>
      <Spacer size="3xl" />
      <Container>
        <Differentiation />
      </Container>
      <Spacer size="3xl" />
      <div className="bg-landing-dark rounded-t-[4rem]">
        <Spacer size="3xl" />
        <Container>
          <InfoSection
            id={SECTIONS_TEXTS.PROFESORES.ID}
            color="text-white"
            title={SECTIONS_TEXTS.PROFESORES.TITLE}
            description={SECTIONS_TEXTS.PROFESORES.DESCRIPTION}
            withButton
            descriptionProps={{
              variant: 'h5',
              className: '!text-text-secondary font-normal text-center',
            }}
            list={SECTIONS_TEXTS.PROFESORES.LIST}
            buttonProps={{
              children: SECTIONS_TEXTS.PROFESORES.BUTTON_TEXT,
              onClick: openTeacherModal,
            }}
            image="/assets/characters/capito-old.png"
            imgPosition="left"
          />
        </Container>
        <Spacer size="5xl" />
        <Container>
          <InfoSection
            id={SECTIONS_TEXTS.INSTITUCIONES.ID}
            color="text-white"
            title={SECTIONS_TEXTS.INSTITUCIONES.TITLE}
            withButton
            description={SECTIONS_TEXTS.INSTITUCIONES.DESCRIPTION}
            list={SECTIONS_TEXTS.INSTITUCIONES.LIST}
            descriptionProps={{
              variant: 'h5',
              className: '!text-text-secondary font-normal text-center',
            }}
            buttonProps={{
              children: SECTIONS_TEXTS.INSTITUCIONES.BUTTON_TEXT,
            }}
            image="/assets/characters/capito-teach.png"
            imgPosition="right"
          />
        </Container>
        <Spacer size="5xl" />
        <Container>
          <Demo id="demo" />
        </Container>
        <Spacer size="5xl" />
        <Container>
          <FAQSection />
        </Container>
        <Spacer size="3xl" />
        <Container>
          <Footer />
        </Container>
      </div>

      <div className="fixed right-[-145px] bottom-8 z-50 w-max transition-all duration-200 hover:right-0 lg:right-[-165px]">
        <QuestionsWidget as="a" href="#questions" />
      </div>
    </div>
  );
}

export default Landing;
