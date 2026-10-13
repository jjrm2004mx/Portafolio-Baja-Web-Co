import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const REASONS = [
  {
    icon: '🌱',
    title: 'Ingredientes Locales',
    description: 'Trabajamos con productores locales para garantizar frescura y sostenibilidad',
  },
  {
    icon: '👨‍🍳',
    title: 'Equipo Experto',
    description: 'Chefs certificados con experiencia internacional en cocina de autor',
  },
  {
    icon: '✨',
    title: 'Experiencia Memorable',
    description: 'Cada detalle pensado para ofrecer una cena inolvidable',
  },
  {
    icon: '🍷',
    title: 'Emparejamiento Vinos',
    description: 'Sommelier experto para perfectas combinaciones vino-plato',
  },
  {
    icon: '📅',
    title: 'Menú Estacional',
    description: 'Cambios según la temporada para aprovechar lo mejor de cada época',
  },
  {
    icon: '❤️',
    title: 'Atención Personalizada',
    description: 'Servicio atento a necesidades dietéticas y preferencias especiales',
  },
]

export function WhyChooseRestaurant() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6" />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <Card className="p-6 hover:border-orange-600 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-orange-50 to-white h-full">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-h5 text-navy-600 font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="text-body-sm text-neutral-600">
                  {reason.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-orange-900 text-white rounded-xl p-12 text-center">
          <p className="text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</p>
          <p className="text-xl mb-4">
            "La mejor experiencia culinaria que he tenido. Cocina impecable, servicio atento, ambiente perfecto."
          </p>
          <p className="text-orange-400 font-semibold">
            - María González | Crítica Gastronómica
          </p>
        </div>
      </Container>
    </section>
  )
}
