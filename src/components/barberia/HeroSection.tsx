import { Container } from '@/components/shared/Container'

export function BarberiHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-20 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          <rect x="0" y="0" width="100" height="100" fill="white" opacity="0.1" />
          <circle cx="1100" cy="500" r="200" fill="white" opacity="0.05" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-amber-600/20 text-amber-300 rounded-full text-sm font-semibold border border-amber-600/40">
              ✂️ Barbería de Excelencia | Tijuana
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
              Donde la Tradición Conoce la Maestría
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Cada corte es una obra de arte. Especializados en técnicas clásicas con un toque contemporáneo.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-600/30">
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-gray-300">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">12</div>
                <div className="text-sm text-gray-300">Años Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">5★</div>
                <div className="text-sm text-gray-300">Barberos Expertos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300">
                Agendar Cita
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all duration-300">
                Ver Servicios →
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <img
            src="https://images.unsplash.com/photo-1585747860715-cd4628902046?w=600&h=400&fit=crop"
            alt="Barbería profesional"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </Container>
    </section>
  )
}
