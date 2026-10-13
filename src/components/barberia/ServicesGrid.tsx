import { Container } from '@/components/shared/Container'
import { SERVICIOS_BARBERIA } from '@/config/barberia.config'

export function BarberyServicesGrid() {
  return (
    <section id="servicios" className="bg-[#FAFAF9] py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] mb-4" style={{ fontFamily: 'Cormorant' }}>
            Nuestros Servicios Premium
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat' }}>
            Experiencias personalizadas para cada estilo y necesidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICIOS_BARBERIA.map((servicio) => (
            <div
              key={servicio.id}
              className="group bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#E5E7EB] hover:border-[#A16207]/50"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {servicio.icono}
              </div>

              {/* Service Name */}
              <h3 className="text-2xl font-bold text-[#1C1917] mb-2" style={{ fontFamily: 'Cormorant' }}>
                {servicio.nombre}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] mb-4" style={{ fontFamily: 'Montserrat' }}>
                {servicio.descripcion}
              </p>

              {/* Benefits List */}
              <ul className="mb-6 space-y-2">
                {servicio.beneficios.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#6B7280]" style={{ fontFamily: 'Montserrat' }}>
                    <span className="text-[#A16207] font-bold mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Price & Duration */}
              <div className="flex justify-between items-center pt-4 border-t border-[#E5E7EB]">
                <div>
                  <p className="text-3xl font-bold text-[#1C1917]" style={{ fontFamily: 'Cormorant' }}>
                    {servicio.precio}
                  </p>
                  <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: 'Montserrat' }}>
                    {servicio.duracion}
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#A16207]/10 group-hover:bg-[#A16207]/20 rounded-full flex items-center justify-center text-[#A16207] font-bold transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
