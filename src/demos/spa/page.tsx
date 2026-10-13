import HeroSection from '@/components/spa/HeroSection';
import ProblemStatement from '@/components/spa/ProblemStatement';
import SolutionOverview from '@/components/spa/SolutionOverview';
import TestimonialsCarousel from '@/components/spa/TestimonialsCarousel';
import CtaSection from '@/components/spa/CtaSection';

export default function SpaPage() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <TestimonialsCarousel />
      <CtaSection />

      {/* Footer CTA */}
      <section className="bg-[#FDF2F8] border-t border-[#FBCFE8] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#831843] text-lg font-semibold mb-4" style={{ fontFamily: 'Raleway' }}>
            Still exploring?
          </p>
          <p className="text-[#475569] mb-6" style={{ fontFamily: 'Raleway' }}>
            Contact us for a personalized wellness consultation
          </p>
          <button
            className="px-8 py-3 bg-[#EC4899] text-white rounded-lg font-semibold hover:bg-[#8B5CF6] transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
