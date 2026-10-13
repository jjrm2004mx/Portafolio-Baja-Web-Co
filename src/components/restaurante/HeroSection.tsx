import { Container } from '@/components/shared/Container'

export function RestaurantHeroSection() {
  return (
    <section className="relative bg-stone-50 py-20">
      <Container>
        {/* Grid: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
              ✨ Experiencia Gastronómica Premium
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-4 leading-tight" style={{ fontFamily: 'Playfair Display SC, serif' }}>
              Arte Culinario Hecho con Pasión
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Descubre los mejores sabores en un ambiente sofisticado. Ingredientes frescos, recetas tradicionales y una experiencia gastronómica inolvidable te esperan.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-stone-200">
              <div>
                <div className="text-3xl font-bold text-red-600">15+</div>
                <div className="text-sm text-stone-600">AÑOS DE EXCELENCIA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-stone-600">CLIENTES FELICES</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">⭐ 4.9</div>
                <div className="text-sm text-stone-600">CALIFICACIÓN</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#reservation">
                <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300">
                  Reservar Mesa
                </button>
              </a>
              <a href="#menu">
                <button className="px-8 py-3 bg-stone-200 hover:bg-stone-300 text-stone-900 font-bold rounded-lg transition-all duration-300">
                  Ver Menú
                </button>
              </a>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
              alt="Fine dining"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop"
              alt="Gourmet dish"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=400&fit=crop"
              alt="Chef special"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
              alt="Restaurant interior"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Open Hours Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-stone-900">Ubicación</div>
                <div className="text-sm text-stone-600">Ave. Principal 456, Tijuana</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🕐</span>
              <div>
                <div className="font-bold text-stone-900">Horarios</div>
                <div className="text-sm text-stone-600">Lunes-Domingo 11AM - 11PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <div className="font-bold text-stone-900">Contacto</div>
                <div className="text-sm text-stone-600">+52 (664) 555-0198</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
