import Spacer from '@/shared/ui/atoms/Spacer';
import Main from './components/organisms/Main';
import Header from './components/molecules/Header';
import Container from '@/shared/ui/atoms/Container';
import Footer from './components/organisms/Footer';
import FAQSection from './components/organisms/Faq/Faq';
import QuestionsWidget from './components/molecules/QuestionsWidget';
import ScrollTextTransition from './components/organisms/ScrollText';
import Pricing from './components/organisms/pricing';
import Features from './components/organisms/Features';
import DiferenciasSection from './components/organisms/Differentiation';
import WhatIs from './components/organisms/WhatIs';
import HorizontalScroll from './components/organisms/HorizontalScroll';
function Landing() {
  return (
    <div className="animate-fade-in bg-landing-dark relative">
      <Header />
      <Container className="relative">
        <Main />
      </Container>
      <Spacer size="xl" />
      <ScrollTextTransition />
      <Spacer size="5xl" />
      <Container>
        <WhatIs />
      </Container>
      <Spacer size="5xl" />
      <HorizontalScroll />
      <div id="funcionalidades" />
      <Spacer size="5xl" />
      <Container>
        <Features />
      </Container>
      <Spacer size="5xl" />
      <Container>
        <DiferenciasSection />
      </Container>
      <div id="precios" />
      <Spacer size="5xl" />
      <div className="bg-primary-dark relative">
        <div className="from-primary-dark absolute top-[-300px] left-0 h-[300px] w-full bg-gradient-to-t to-transparent"></div>
        <Container>
          <Pricing />
        </Container>
        <div className="from-primary-dark absolute bottom-[-300px] left-0 h-[300px] w-full bg-gradient-to-b to-transparent"></div>
      </div>

      <Spacer size="5xl" />
      <Container>
        <FAQSection />
      </Container>
      <Spacer size="3xl" />
      <Container>
        <Footer />
      </Container>

      <div className="fixed right-[-165px] bottom-8 z-50 w-max transition-all duration-200 hover:right-0 lg:right-[-185px]">
        <QuestionsWidget as="a" href="#questions" />
      </div>
    </div>
  );
}

export default Landing;
