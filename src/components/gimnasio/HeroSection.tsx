export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1F2937] via-[#111827] to-[#0F172A] py-20 md:py-32 lg:py-40 px-4 md:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316] opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 left-10 w-80 h-80 bg-[#22C55E] opacity-5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge - CLI style */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full hover:border-[#F97316]/60 transition-colors duration-300">
            <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse"></span>
            <span className="text-[#F97316] text-sm font-bold font-['Barlow_Condensed'] tracking-wide">AI-POWERED TRAINING</span>
          </div>
        </div>

        {/* Headline - CLI feature-rich pattern */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            <span className="text-[#F8FAFC]">TRANSFORM YOUR</span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#F97316] bg-clip-text text-transparent">BODY • YOUR LIFE</span>
          </h1>
          <p className="font-['Barlow'] text-base md:text-lg text-[#CBD5E1] leading-relaxed">
            Join 50,000+ members transforming their physique with AI coaching, live classes, and personalized nutrition plans
          </p>
        </div>

        {/* CTA Section - CLI conversion pattern */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold font-['Barlow_Condensed'] text-lg rounded-lg hover:shadow-2xl hover:shadow-[#F97316]/50 hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">
            START YOUR TRANSFORMATION
          </button>
          <button className="px-8 py-4 border-2 border-[#F97316]/50 text-white font-bold font-['Barlow_Condensed'] text-lg rounded-lg hover:bg-[#F97316]/10 hover:border-[#F97316] transition-all duration-300 cursor-pointer tracking-wide">
            VIEW PLANS
          </button>
        </div>

        {/* Stats Section - CLI social proof pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { number: '50K+', label: 'Active Members', color: '#F97316' },
            { number: '500+', label: 'Classes Weekly', color: '#22C55E' },
            { number: '4.9★', label: 'Member Rating', color: '#FB923C' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group bg-[#313742]/30 backdrop-blur-md p-8 rounded-xl border border-[#374151]/50 hover:border-[#F97316]/50 hover:bg-[#313742]/60 transition-all duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-['Barlow_Condensed'] mb-2" style={{color: stat.color}}>
                  {stat.number}
                </div>
                <div className="text-[#CBD5E1] font-['Barlow'] text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image with overlay */}
        <div className="relative rounded-2xl overflow-hidden border border-[#374151]/50 bg-[#313742]/50 backdrop-blur-sm">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&h=500&fit=crop&q=80" 
            alt="Premium fitness training at PULSEFIT gym"
            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-4 py-2 rounded-lg font-bold text-sm font-['Barlow_Condensed'] tracking-wide">
            CERTIFIED TRAINERS
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-40"></div>
        </div>
      </div>
    </section>
  );
}
