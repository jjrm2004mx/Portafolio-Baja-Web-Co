import HeroSection from '@/components/gimnasio/HeroSection';
import ProgramsGrid from '@/components/gimnasio/ProgramsGrid';
import FeaturesSection from '@/components/gimnasio/FeaturesSection';
import TrainersSection from '@/components/gimnasio/TrainersSection';
import PricingSection from '@/components/gimnasio/PricingSection';

export default function GimnasioPage() {
  return (
    <main className="w-full bg-[#0F172A]">
      {/* CLI Feature-Rich Showcase Pattern: 5 Sections */}
      
      {/* Section 1: Hero (value prop) */}
      <HeroSection />
      
      {/* Section 2: Feature grid/cards (4 programs) */}
      <ProgramsGrid />
      
      {/* Section 3: Use cases or benefits (features) */}
      <FeaturesSection />
      
      {/* Section 4: Social proof (trainers) */}
      <TrainersSection />
      
      {/* Section 5: CTA (pricing + conversion) */}
      <PricingSection />

      {/* Footer CTA */}
      <section className="w-full bg-gradient-to-r from-[#F97316]/20 to-[#22C55E]/20 py-12 px-4 md:px-8 border-t border-[#374151]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Barlow_Condensed'] text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            READY TO TRANSFORM?
          </h2>
          <p className="font-['Barlow'] text-[#CBD5E1] mb-8 max-w-2xl mx-auto">
            Join thousands of members already achieving their fitness goals with PULSEFIT
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold font-['Barlow_Condensed'] text-lg rounded-lg hover:shadow-2xl hover:shadow-[#F97316]/50 hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">
            START YOUR FREE TRIAL TODAY
          </button>
        </div>
      </section>
    </main>
  );
}
