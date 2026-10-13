import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const TESTIMONIALS = [
  {
    name: 'Roberto Silva',
    service: 'Fade & Afeitada',
    rating: 5,
    text: 'Excelente servicio, muy profesional. Vuelvo cada mes sin falta.',
    image: '/images/demo/IMG_9810.jpg',
  },
  {
    name: 'Diego Ruiz',
    service: 'Corte + Tratamiento',
    rating: 5,
    text: 'La mejor barbería de la ciudad. Recomendado 100%.',
    image: '/images/demo/Despacho-Contable-1-2026.PNG',
  },
  {
    name: 'Miguel Torres',
    service: 'Tinte Profesional',
    rating: 5,
    text: 'Ambiente premium, atención personalizada. Totalmente satisfecho.',
    image: '/images/demo/Despacho-Legal-2026.PNG',
  },
]

export function TestimonialSection() {
  return (
    <section className="py-24 bg-rose-50">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-rose-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-lavender-500 to-lavender-400 mx-auto" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 150}ms forwards`,
                opacity: 0,
              }}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full border-lavender-200">
                {/* Rating */}
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lavender-500">
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans text-body-sm text-rose-800 mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-rose-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-rose-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-lavender-600">{testimonial.service}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
