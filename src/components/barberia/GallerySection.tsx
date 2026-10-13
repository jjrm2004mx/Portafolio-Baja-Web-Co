import { Container } from '@/components/shared/Container'
import { useState } from 'react'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
}

const GALERIA_BARBERIA: GalleryItem[] = [
  { id: 1, title: 'Corte Clásico', category: 'Cortes', image: '/images/demo/barberia-1.jpg' },
  { id: 2, title: 'Barba Artesanal', category: 'Barba', image: '/images/demo/barberia-2.jpg' },
  { id: 3, title: 'Corte + Barba', category: 'Premium', image: '/images/demo/barberia-3.jpg' },
  { id: 4, title: 'Tratamiento', category: 'Cuidado', image: '/images/demo/barberia-4.jpg' },
  { id: 5, title: 'Facial Premium', category: 'Facial', image: '/images/demo/barberia-5.jpg' },
  { id: 6, title: 'Cejas Perfiladas', category: 'Detalles', image: '/images/demo/barberia-6.jpg' },
]

export function BarberyGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['Todos', ...new Set(GALERIA_BARBERIA.map(item => item.category))]
  const filteredItems = selectedCategory && selectedCategory !== 'Todos'
    ? GALERIA_BARBERIA.filter(item => item.category === selectedCategory)
    : GALERIA_BARBERIA

  return (
    <section className="bg-[#FAFAF9] py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] mb-4" style={{ fontFamily: 'Cormorant' }}>
            Galería de Transformaciones
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat' }}>
            Resultados reales de nuestro trabajo artesanal
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                (selectedCategory === null && category === 'Todos') || selectedCategory === category
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-white text-[#1C1917] border border-[#E5E7EB] hover:border-[#A16207]'
              }`}
              style={{ fontFamily: 'Montserrat' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square bg-[#E5E7EB] cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C1917] to-[#A16207] opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/30 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <p className="text-[#A16207] text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat' }}>
                    {item.category}
                  </p>
                  <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'Cormorant' }}>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#A16207]/20 backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
