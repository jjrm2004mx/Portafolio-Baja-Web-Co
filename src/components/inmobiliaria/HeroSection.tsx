import { Container } from '@/components/shared/Container'

export function RealEstateHeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-white py-20">
      <Container>
        {/* Grid: Text + Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
              ✨ Bienes Raíces de Lujo | Tijuana
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 mb-4 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              Encuentra tu Propiedad Ideal
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Descubre propiedades excepcionales en las ubicaciones más prestigiosas. Departamentos, casas y desarrollos inmobiliarios de alta gama te esperan.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-stone-200">
              <div>
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-stone-600">Propiedades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">$2B+</div>
                <div className="text-sm text-stone-600">Volumen de Ventas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-stone-600">Años Experiencia</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#properties">
                <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300">
                  Ver Propiedades
                </button>
              </a>
              <a href="#agents">
                <button className="px-8 py-3 bg-stone-200 hover:bg-stone-300 text-stone-900 font-bold rounded-lg transition-all duration-300">
                  Conocer Agentes
                </button>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
            alt="Luxury home"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-8 border-b-4 border-teal-600">
          <h3 className="text-lg font-bold text-stone-900 mb-6">Buscar tu Propiedad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-2">Ubicación</label>
              <input
                type="text"
                placeholder="Ingresa ubicación..."
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-2">Tipo de Propiedad</label>
              <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none">
                <option>Todos los Tipos</option>
                <option>Casa Unifamiliar</option>
                <option>Departamento</option>
                <option>Penthouse</option>
                <option>Terreno</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-stone-900 mb-2">Rango de Precio</label>
              <select className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none">
                <option>Cualquier Precio</option>
                <option>$0 - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M - $10M</option>
                <option>$10M+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
