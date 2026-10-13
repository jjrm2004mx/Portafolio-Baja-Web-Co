import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-[#FDF2F8] via-[#FFFFFF] to-[#F1EEF5] flex items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F9A8D4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#FBCFE8] mb-8 shadow-sm">
          <div className="w-2 h-2 bg-[#EC4899] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[#831843]">Luxury Wellness Experience</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#831843]" style={{ fontFamily: 'Lora' }}>
          Discover Your Inner
          <span className="block bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Serenity
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#475569] mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
          A sanctuary dedicated to your complete wellness. Experience transformative treatments designed to restore balance and radiance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
            style={{ fontFamily: 'Raleway' }}>
            Book Your Treatment
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-[#EC4899] border-2 border-[#FBCFE8] rounded-lg font-semibold hover:border-[#EC4899] hover:shadow-md transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}>
            Explore Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#FBCFE8]">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EC4899] mb-2" style={{ fontFamily: 'Lora' }}>15+</div>
            <p className="text-sm text-[#475569]" style={{ fontFamily: 'Raleway' }}>Premium Treatments</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EC4899] mb-2" style={{ fontFamily: 'Lora' }}>500+</div>
            <p className="text-sm text-[#475569]" style={{ fontFamily: 'Raleway' }}>Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#EC4899] mb-2" style={{ fontFamily: 'Lora' }}>4.9★</div>
            <p className="text-sm text-[#475569]" style={{ fontFamily: 'Raleway' }}>Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-[#FBCFE8] py-4 px-4 shadow-2xl z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-[#831843] font-semibold" style={{ fontFamily: 'Raleway' }}>Ready to transform?</p>
          <button className="px-6 py-2 bg-[#EC4899] text-white rounded-lg font-semibold hover:bg-[#8B5CF6] transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
