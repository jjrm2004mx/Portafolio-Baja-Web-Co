import { Container } from '@/components/shared/Container'

export function AbogadoHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 600" className="w-full h-full">
          <circle cx="100" cy="100" r="150" fill="white" opacity="0.1" />
          <circle cx="1100" cy="500" r="200" fill="white" opacity="0.1" />
          <path d="M0,300 Q300,200 600,300 T1200,300" stroke="white" fill="none" strokeWidth="2" opacity="0.05" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-amber-400/20 text-amber-300 rounded-full text-sm font-semibold border border-amber-400/40">
              ⭐ Cédula Profesional Vigente | Miembro Barra de Abogados B.C.
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Lora, serif' }}>
              Asesoría Legal Integral para tu Negocio y Familia
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Especialista en Derecho Mercantil, Laboral y Familiar con más de 15 años de experiencia en Tijuana.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-blue-400/20">
              <div>
                <div className="text-3xl font-bold text-amber-400">200+</div>
                <div className="text-sm text-blue-200">Casos Ganados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">15</div>
                <div className="text-sm text-blue-200">Años Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-blue-200">Clientes Satisfechos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-lg transition-all duration-300">
                Agendar Consulta Gratuita
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all duration-300">
                Ver Servicios →
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
            alt="Oficina legal profesional"
            className="w-full h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </Container>
    </section>
  )
}
