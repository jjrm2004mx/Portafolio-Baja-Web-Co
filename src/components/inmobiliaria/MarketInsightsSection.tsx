import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

export function MarketInsightsSection() {
  const articles = [
    {
      id: 1,
      title: 'Tendencias del Mercado Inmobiliario 2026',
      date: '15 de Octubre 2026',
      category: 'Mercado',
      image:
        'https://images.unsplash.com/photo-1554224311-beee415c15b7?w=600&h=400&fit=crop',
      excerpt:
        'Análisis profundo de las tendencias que están moldeando el mercado inmobiliario en 2026. Descubre qué esperar y cómo prepararte.',
    },
    {
      id: 2,
      title: 'Guía Completa para Inversionistas Primerizos',
      date: '10 de Octubre 2026',
      category: 'Inversión',
      image:
        'https://images.unsplash.com/photo-1434890595326-00dab183e9f1?w=600&h=400&fit=crop',
      excerpt:
        'Una guía paso a paso para principiantes en inversión inmobiliaria. Desde selección de propiedades hasta análisis de ROI.',
    },
    {
      id: 3,
      title: 'Tech Valley: La Próxima Mina de Oro Inmobiliaria',
      date: '5 de Octubre 2026',
      category: 'Zona Destacada',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      excerpt:
        'Por qué Tech Valley está atraiendo inversores globales. Análisis de crecimiento, infraestructura y retorno de inversión esperado.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-teal-900 mb-4">
            Insights del Mercado Inmobiliario
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-blue-600 mx-auto mb-6" />
          <p className="font-sans text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Mantente informado con análisis de expertos, guías de inversión y noticias del mercado.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <div
              key={article.id}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <Card variant="elevated" className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="h-48 overflow-hidden bg-neutral-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-xs text-amber-600 font-bold mb-2">{article.category}</p>
                    <h3 className="text-h5 font-bold text-navy-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">{article.date}</p>
                    <button className="text-amber-600 hover:text-amber-700 font-bold text-sm">
                      Leer →
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-10 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Ver Todos los Artículos
          </button>
        </div>
      </Container>
    </section>
  )
}
