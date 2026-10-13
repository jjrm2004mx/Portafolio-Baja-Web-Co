import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const TESTIMONIALS = [
  {
    name: 'Carlos Martínez',
    role: 'Blogger Gastronómico',
    rating: 5,
    text: 'Una experiencia culinaria magistral. Cada plato es una obra de arte. El chef demuestra pasión en cada detalle.',
    image: '/images/demo/IMG_9810.jpg',
  },
  {
    name: 'Andrea López',
    role: 'Crítica Gastronómica',
    rating: 5,
    text: 'Técnica impecable, sabores auténticos, servicio atento. Este es el tipo de cocina que transforma experiencias en recuerdos.',
    image: '/images/demo/Despacho-Contable-1-2026.PNG',
  },
  {
    name: 'Roberto Silva',
    role: 'Cliente Frecuente',
    rating: 5,
    text: 'Llevo 6 meses viniendo regularmente. Nunca me decepciona. El ambiente, la comida, el servicio... perfecto todo.',
    image: '/images/demo/Despacho-Legal-2026.PNG',
  },
]

export function FoodBlogSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6" />
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
              <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full border-red-100">
                {/* Rating */}
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-red-600">
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-body-sm text-neutral-700 mb-4 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-navy-600">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-orange-600">{testimonial.role}</p>
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
