import { Container } from '@/components/shared/Container'

const MENU_ITEMS = {
  starters: [
    {
      name: 'Burrata con Trufa Negra',
      price: '$18',
      description: 'Burrata fresca con trufa negra y tomates hereditarios',
      image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=300&h=200&fit=crop',
    },
    {
      name: 'Tartar de Atún',
      price: '$22',
      description: 'Atún aleta amarilla, aguacate, ajonjolí y ponzu cítrico',
      image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=300&h=200&fit=crop',
    },
  ],
  mains: [
    {
      name: 'Wagyu Ribeye A5',
      price: '$85',
      description: 'Wagyu japonés A5, mantequilla de tuétano y verduras asadas',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=200&fit=crop',
    },
    {
      name: 'Risotto de Langosta',
      price: '$48',
      description: 'Langosta de Maine, arborio al azafrán y espuma de parmesano',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop',
    },
  ],
  desserts: [
    {
      name: 'Soufflé de Chocolate',
      price: '$16',
      description: 'Chocolate Valrhona y helado de vainilla',
      image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=300&h=200&fit=crop',
    },
    {
      name: 'Crema Brûlée',
      price: '$14',
      description: 'Vainilla de Madagascar con costra de azúcar caramelizado',
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=300&h=200&fit=crop',
    },
  ],
}

export function RestauranteMenuSection() {
  return (
    <section id="menu" className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display SC, serif' }}>
            Nuestro Menú
          </h2>
          <p className="text-xl text-stone-600">
            Ingredientes de temporada, técnicas atemporales, sabores inolvidables
          </p>
        </div>

        {/* Three Categories: Starters, Mains, Desserts */}
        <div className="space-y-20">
          {/* Starters */}
          <div>
            <h3 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'Playfair Display SC, serif' }}>
              Entradas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MENU_ITEMS.starters.map((item, idx) => (
                <div key={idx} className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                      <span className="text-red-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mains */}
          <div>
            <h3 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'Playfair Display SC, serif' }}>
              Platos Principales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MENU_ITEMS.mains.map((item, idx) => (
                <div key={idx} className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                      <span className="text-red-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="text-3xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'Playfair Display SC, serif' }}>
              Postres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {MENU_ITEMS.desserts.map((item, idx) => (
                <div key={idx} className="bg-stone-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-stone-900">{item.name}</h4>
                      <span className="text-red-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <a href="#reservation">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300">
              Ver Menú Completo
            </button>
          </a>
        </div>
      </Container>
    </section>
  )
}
