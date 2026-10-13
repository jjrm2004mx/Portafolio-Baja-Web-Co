import HeroSection from '@/components/contador/HeroSection';
import ServicesGrid from '@/components/contador/ServicesGrid';
import CPAProfiles from '@/components/contador/CPAProfiles';
import FinancialCaseResults from '@/components/contador/FinancialCaseResults';
import TestimonialsSection from '@/components/contador/TestimonialsSection';
import ConsultationBooking from '@/components/contador/ConsultationBooking';

export function ContadorPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ServicesGrid />
      <CPAProfiles />
      <FinancialCaseResults />
      <TestimonialsSection />
      <ConsultationBooking />
    </div>
  );
}
