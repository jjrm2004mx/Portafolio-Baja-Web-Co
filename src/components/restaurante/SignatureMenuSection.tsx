import { Container } from '@/components/shared/Container'
import { MenuItemCard } from './MenuItemCard'

const SIGNATURE_DISHES = [
  {
    icon: '🍗',
    title: 'Pato Confitado',
    description: 'Pato de granja criado localmente, confitado 24 horas con especias autóctonas',
    price: '32',
    dietary: 'Sin gluten disponible',
  },
  {
    icon: '🐟',
    title: 'Mero del Día',
    description: 'Fresco del mercado, preparado a la sal con limón y hierbas aromáticas',
    price: '28',
    dietary: 'Pescado fresco',
  },
  {
    icon: '🥩',
    title: 'Carne de Res Envejecida',
    description: 'Prime rib de 45 días, sellado y terminado con mantequilla de ajo',
    price: '38',
    dietary: 'Sin gluten',
  },
  {
    icon: '🍄',
    title: 'Risotto de Setas Silvestres',
    description: 'Carnaroli con setas de temporada, queso parmesano y trufa negra',
    price: '24',
    dietary: 'Vegetariano',
  },
]

export function SignatureMenuSection() {
  return (
    <section id="menu" className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
            Platos Signature
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6" />
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Una selección de nuestros platos más emblemáticos
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SIGNATURE_DISHES.map((dish, index) => (
            <div
              key={index}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <MenuItemCard {...dish} />
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
            Ver Menú Completo
          </button>
        </div>
      </Container>
    </section>
  )
}
