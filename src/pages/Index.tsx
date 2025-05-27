
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import SpiritualWorkSection from '@/components/SpiritualWorkSection';
import RepertoireSection from '@/components/RepertoireSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <JourneySection />
      <SpiritualWorkSection />
      <RepertoireSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
