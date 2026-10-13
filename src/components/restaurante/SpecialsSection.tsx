import { Container } from '@/components/shared/Container'
import { ESPECIALES_SEMANA } from '@/config/restaurante.config'

export function RestauranteSpecialsSection() {
  return (
    <section className="bg-[#FEF2F2] py-20 md:py-32">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1C1917] mb-4" style={{ fontFamily: 'Playfair Display SC, serif' }}>
            ESPECIALES DE LA SEMANA
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Karla' }}>
            Ofertas exclusivas cada día
          </p>
        </div>

        {/* Specials Grid - 2x2 on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ESPECIALES_SEMANA.map((especial) => (
            <div
              key={especial.id}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-[#DC2626] relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

              {/* Day Badge */}
              <div className="inline-block px-4 py-2 bg-[#DC2626] text-white rounded-lg mb-4 font-bold" style={{ fontFamily: 'Karla' }}>
                {especial.dia}
              </div>

              {/* Special */}
              <h3 className="text-2xl font-bold text-[#1C1917]" style={{ fontFamily: 'Playfair Display SC, serif' }}>
                {especial.especial}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
