import { Container } from '@/components/shared/Container'
import { TESTIMONIOS_RESTAURANTE } from '@/config/restaurante.config'

export function RestauranteTestimonialsSection() {
  return (
    <section className="bg-[#FEF2F2] py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1917] mb-4" style={{ fontFamily: 'Playfair Display SC' }}>
            Experiencias que Hablan
          </h2>
          <p className="text-lg text-[#6B7280]" style={{ fontFamily: 'Karla' }}>
            Lo que dicen nuestros comensales más exigentes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIOS_RESTAURANTE.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#DC2626]">
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#DC2626] text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[#4B5563] mb-6 italic" style={{ fontFamily: 'Karla' }}>
                "{testimonial.mensaje}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-bold text-[#1C1917]" style={{ fontFamily: 'Playfair Display SC' }}>{testimonial.autor}</p>
                <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Karla' }}>{testimonial.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
