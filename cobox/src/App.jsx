import './index.css';
import Navbar from './components/Navbar';
import ScrollIndicator from './components/ScrollIndicator';
import BackToTopButton from './components/BackToTopButton';
import CursorGlow from './components/CursorGlow';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ImpactStatsSection from './sections/ImpactStatsSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import ProcessSection from './sections/ProcessSection';
import TestimonialsSection from './sections/TestimonialsSection';
import TechnologiesSection from './sections/TechnologiesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gradient-dark min-h-screen flex flex-col">
      <CursorGlow />
      <ScrollIndicator />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ImpactStatsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
