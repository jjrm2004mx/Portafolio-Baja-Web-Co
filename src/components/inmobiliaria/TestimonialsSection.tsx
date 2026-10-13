import { Container } from '@/components/shared/Container'
import { TESTIMONIOS_INMOBILIARIA } from '@/config/inmobiliaria.config'

export function InmobiliariTestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'Cinzel' }}>
            Historias de Éxito
          </h2>
          <p className="text-lg text-[#4B5563]" style={{ fontFamily: 'Josefin Sans' }}>
            Lo que dicen nuestros clientes satisfechos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIOS_INMOBILIARIA.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-[#F0FDFA] to-white rounded-2xl border border-[#0F766E]/20 hover:border-[#0369A1] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#0F766E] text-lg">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[#4B5563] mb-6 italic" style={{ fontFamily: 'Josefin Sans' }}>
                "{testimonial.mensaje}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-[#0F766E]/20">
                <p className="font-bold text-[#0F172A]" style={{ fontFamily: 'Cinzel' }}>
                  {testimonial.autor}
                </p>
                <p className="text-sm text-[#4B5563]" style={{ fontFamily: 'Josefin Sans' }}>
                  {testimonial.empresa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
