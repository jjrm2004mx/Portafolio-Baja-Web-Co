import { Container } from '@/components/shared/Container'

const AMBIANCE_ITEMS = [
  {
    id: 1,
    title: 'Comedor Principal',
    location: 'Diseño Elegante',
    image: '/images/demo/IMG_9810.jpg',
  },
  {
    id: 2,
    title: 'Bar Lounge',
    location: 'Ambiente Sofisticado',
    image: '/images/demo/Despacho-Contable-1-2026.PNG',
  },
  {
    id: 3,
    title: 'Terraza Exterior',
    location: 'Vistas al Parque',
    image: '/images/demo/Despacho-Contable-2-2026.PNG',
  },
  {
    id: 4,
    title: 'Private Dining',
    location: 'Espacios Íntimos',
    image: '/images/demo/Despacho-Legal-2026.PNG',
  },
  {
    id: 5,
    title: 'Chef Table',
    location: 'Vista a Cocina',
    image: '/images/demo/Despacho-Juridico-2026.PNG',
  },
  {
    id: 6,
    title: 'Wine Cellar',
    location: 'Colección Selecta',
    image: '/images/brand/logo-primary.png',
  },
]

export function AmbianceGallery() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
            Nuestros Espacios
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-navy-600 to-orange-600 mx-auto mb-4" />
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Ambientes cuidadosamente diseñados para tu confort
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMBIANCE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-lg"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden bg-neutral-300 rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-h6 text-white font-bold mb-1 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-orange-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
