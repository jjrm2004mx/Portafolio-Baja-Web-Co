export default function CtaSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#EC4899] via-[#8B5CF6] to-[#EC4899] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'Lora' }}>
          Your Serenity Awaits
        </h2>

        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
          Join hundreds of clients who've discovered their path to wellness. Book your first treatment today and receive a complimentary consultation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            className="px-10 py-4 bg-white text-[#EC4899] rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}
          >
            Book Your Treatment Now
          </button>
          <button
            className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}
          >
            View Treatment Menu
          </button>
        </div>

        {/* Trust Elements */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div>
            <p className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Lora' }}>100%</p>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Raleway' }}>Natural Ingredients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Lora' }}>Certified</p>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Raleway' }}>Expert Therapists</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Lora' }}>24/7</p>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Raleway' }}>Support & Booking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
