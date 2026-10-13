import { Container } from '@/components/shared/Container'
import { TESTIMONIOS } from '@/config/abogado.config'

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#003366] to-[#1B7A8A] text-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Lora' }}>
            Qué Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-blue-100">
            Testimonios de empresas y personas que confiaron en nuestra asesoría
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIOS.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-[#D4AF37]">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg mb-6 italic text-blue-50 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-bold text-white">{testimonial.nombre}</p>
                  <p className="text-sm text-blue-200">{testimonial.empresa}</p>
                  <p className="text-xs text-blue-300 mt-1">{testimonial.nota}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 p-4 bg-blue-900/30 border border-blue-400/30 rounded-lg text-center text-sm text-blue-200">
          ⓘ Los testimonios mostrados son ejemplos comerciales de demostración. 
          Para un cliente real, utilizaremos testimonios verificables y con consentimiento.
        </div>
      </Container>
    </section>
  )
}
