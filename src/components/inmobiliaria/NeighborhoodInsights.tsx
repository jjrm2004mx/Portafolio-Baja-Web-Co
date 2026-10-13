import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

export function NeighborhoodInsights() {
  const neighborhoods = [
    {
      id: 1,
      name: 'Downtown Hub',
      headline: 'Energía Urbana y Oportunidades',
      walkScore: 92,
      schools: 8,
      avgPrice: '$750K',
      image:
        'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
      highlights: ['Vida Nocturna', 'Restaurantes', 'Transporte Público'],
    },
    {
      id: 2,
      name: 'Waterfront District',
      headline: 'Lujo Frente al Mar',
      walkScore: 85,
      schools: 6,
      avgPrice: '$1.2M',
      image:
        'https://images.unsplash.com/photo-1504379247937-701a19e1346e?w=600&h=400&fit=crop',
      highlights: ['Playa Privada', 'Marina', 'Spas'],
    },
    {
      id: 3,
      name: 'Tech Valley',
      headline: 'Innovación y Crecimiento',
      walkScore: 78,
      schools: 9,
      avgPrice: '$650K',
      image:
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      highlights: ['Tech Hubs', 'Startups', 'Inversión'],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-teal-900 mb-4">
            Explora Nuestras Zonas Premium
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-blue-600 mx-auto mb-6" />
          <p className="font-sans text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Barrios cuidadosamente seleccionados con alto potencial de crecimiento y amenidades de clase mundial.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {neighborhoods.map((neighborhood, index) => (
            <div
              key={neighborhood.id}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <Card variant="elevated" className="overflow-hidden h-full">
                {/* Image */}
                <div className="h-48 overflow-hidden bg-neutral-200 relative">
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-amber-600 font-bold mb-1">BARRIO DESTACADO</p>
                  <h3 className="text-h4 font-bold text-navy-900 mb-1">{neighborhood.name}</h3>
                  <p className="text-sm text-neutral-600 mb-4">{neighborhood.headline}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-6 py-4 border-y border-neutral-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Walkability Score:</span>
                      <span className="font-bold text-navy-900">{neighborhood.walkScore}/100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Escuelas Cercanas:</span>
                      <span className="font-bold text-navy-900">{neighborhood.schools}+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-600">Precio Promedio:</span>
                      <span className="font-bold text-amber-600">{neighborhood.avgPrice}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 border border-amber-600 text-amber-600 hover:bg-amber-50 font-bold rounded-lg transition-all">
                    Explorar Más
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Map Section Note */}
        <div className="text-center">
          <p className="text-neutral-600 mb-4">Descubre todas nuestras zonas disponibles en el mapa interactivo</p>
          <button className="px-10 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Ver Mapa Completo
          </button>
        </div>
      </Container>
    </section>
  )
}
