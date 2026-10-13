import { Container } from '@/components/shared/Container'
import { ClientSuccessStory } from './ClientSuccessStory'

export function SuccessStoriesSection() {
  const stories = [
    {
      id: 1,
      clientName: 'Juan & María López',
      clientRole: 'Compradores Primerizos',
      quote:
        'El equipo nos guió en cada paso. Encontramos nuestro hogar perfecto y cerramos en 28 días sin estrés.',
      story:
        'Una pareja joven buscaba su primer hogar. Con nuestra asistencia en financiamiento y análisis de barrios, encontraron la propiedad ideal en una zona de alto crecimiento.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop',
      propertyType: 'Residential',
      rating: 5,
    },
    {
      id: 2,
      clientName: 'Robert Chen',
      clientRole: 'Inversionista',
      quote:
        'Invertí en 3 propiedades. El análisis de ROI fue preciso. Estoy obteniendo 8.5% anual como se proyectó.',
      story:
        'Un empresario de tecnología diversificó su portafolio inmobiliario. Nuestro análisis de mercado y selección de propiedades resultó en retornos superiores al promedio.',
      image: 'https://images.unsplash.com/photo-1600585154529-94fe142b9a9d?w=600&h=600&fit=crop',
      propertyType: 'Investment',
      rating: 5,
    },
    {
      id: 3,
      clientName: 'Sofia Martínez',
      clientRole: 'Ejecutiva',
      quote:
        'Vendí mi departamento en 2 semanas a precio justo. Profesionales, transparentes y eficientes.',
      story:
        'Una ejecutiva internacional necesitaba vender rápidamente. Nuestra estrategia de marketing y red de compradores potenciales aceleró significativamente la venta.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7d8a38?w=600&h=600&fit=crop',
      propertyType: 'Residential',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-teal-900 mb-4">
            Historias de Éxito de Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-blue-600 mx-auto mb-6" />
          <p className="font-sans text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Familias e inversores que realizaron sus sueños inmobiliarios con nosotros.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 150}ms forwards`,
                opacity: 0,
              }}
            >
              <ClientSuccessStory {...story} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">¿Listo para escribir tu propia historia de éxito?</p>
          <button className="px-10 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Comienza Tu Viaje Inmobiliario
          </button>
        </div>
      </Container>
    </section>
  )
}
