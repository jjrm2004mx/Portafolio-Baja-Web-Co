import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const SPECIALS = [
  {
    icon: '🍂',
    title: 'Menú de Otoño',
    description: 'Hongos silvestres, peras, castañas. Una oda a los sabores otoñales.',
    price: '55',
    limited: true,
    image: '/images/demo/IMG_9810.jpg',
  },
  {
    icon: '🦞',
    title: 'Langosta Fresca',
    description: 'Langosta del Atlántico preparada a la perfección con mantequilla de ajo',
    price: '48',
    limited: true,
    image: '/images/demo/Despacho-Contable-1-2026.PNG',
  },
  {
    icon: '🍫',
    title: 'Postre del Chef',
    description: 'Creación especial con chocolate belga y frutos rojos de temporada',
    price: '12',
    limited: true,
    image: '/images/demo/Despacho-Contable-2-2026.PNG',
  },
]

export function ChefSpecialsSection() {
  return (
    <section className="py-24 bg-red-50">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
            Especialidades del Chef
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6" />
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Creaciones especiales que rotamos mensualmente
          </p>
        </div>

        {/* Specials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALS.map((special, index) => (
            <div
              key={index}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 150}ms forwards`,
                opacity: 0,
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-neutral-300">
                  <img
                    src={special.image}
                    alt={special.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {special.limited && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      LIMITED TIME
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-3xl mb-3">{special.icon}</div>
                  <h3 className="text-h5 text-navy-600 font-bold mb-2 font-serif">
                    {special.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 mb-4">
                    {special.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <span className="text-lg font-bold text-orange-600">
                      ${special.price}
                    </span>
                    <button className="text-sm font-bold text-orange-600 hover:text-orange-700">
                      Reserve →
                    </button>
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
