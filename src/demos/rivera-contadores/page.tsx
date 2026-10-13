import BrandNav from '@/components/rivera/BrandNav';
import HeroSection from '@/components/rivera/HeroSection';
import ServicesGrid from '@/components/rivera/ServicesGrid';
import WhyUs from '@/components/rivera/WhyUs';
import Testimonials from '@/components/rivera/Testimonials';
import ConsultationCTA from '@/components/rivera/ConsultationCTA';
import BrandFooter from '@/components/rivera/BrandFooter';

export default function RiveraContadoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNav />
      <HeroSection />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <ConsultationCTA />
      <BrandFooter />
    </div>
  );
}
