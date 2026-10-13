import { Container } from '@/components/shared/Container'
import { BENEFICIOS } from '@/config/abogado.config'

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F0F4F8]">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Lora' }}>
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-600">
            Diferenciadores clave que nos destacan como tu mejor opción legal
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFICIOS.map((beneficio, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Icon */}
              <div className="text-5xl">{beneficio.icono}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#003366]" style={{ fontFamily: 'Lora' }}>
                {beneficio.titulo}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            ¿Listo para resolver tu situación legal?
          </p>
          <a href="#contacto" className="inline-block">
            <button className="px-8 py-3 bg-[#D4AF37] hover:bg-yellow-600 text-[#003366] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Solicita tu Consulta Gratuita
            </button>
          </a>
        </div>
      </Container>
    </section>
  )
}
