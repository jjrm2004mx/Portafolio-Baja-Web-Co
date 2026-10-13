import { MapPin, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image + dark gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
            Propiedades Premium
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Encuentra la Casa
            <br />
            <span className="text-[#C9A227]">de tus Sueños</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-lg" style={{ fontFamily: 'Raleway' }}>
            Descubre propiedades excepcionales en las ubicaciones más prestigiosas. Tu hogar perfecto te espera
            con nuestra colección curada de residencias de lujo.
          </p>

          {/* Glassmorphism search bar */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 mb-10 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="flex items-center gap-1 text-xs text-white/70 mb-1 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" /> Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ciudad, colonia o dirección"
                  className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none"
                />
              </div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div className="flex-1">
                <label className="block text-xs text-white/70 mb-1 uppercase tracking-wider">Tipo de Propiedad</label>
                <select className="w-full bg-transparent text-white focus:outline-none cursor-pointer [&>option]:text-[#111827]">
                  <option>Todos los tipos</option>
                  <option>Casa</option>
                  <option>Departamento</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>
              <div className="w-px bg-white/20 hidden md:block"></div>
              <div className="flex-1">
                <label className="block text-xs text-white/70 mb-1 uppercase tracking-wider">Rango de Precio</label>
                <select className="w-full bg-transparent text-white focus:outline-none cursor-pointer [&>option]:text-[#111827]">
                  <option>Cualquier precio</option>
                  <option>$10M - $20M MXN</option>
                  <option>$20M - $40M MXN</option>
                  <option>$40M - $80M MXN</option>
                  <option>$80M+ MXN</option>
                </select>
              </div>
              <button className="flex items-center justify-center gap-2 bg-[#C9A227] hover:bg-[#B8911E] text-[#111827] font-semibold rounded-xl px-8 py-3 transition-colors cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12">
            <div>
              <div className="text-3xl font-semibold text-white" style={{ fontFamily: 'Cinzel, serif' }}>500+</div>
              <div className="text-sm text-white/60" style={{ fontFamily: 'Raleway' }}>Propiedades</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white" style={{ fontFamily: 'Cinzel, serif' }}>$2B+</div>
              <div className="text-sm text-white/60" style={{ fontFamily: 'Raleway' }}>Volumen de ventas</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white" style={{ fontFamily: 'Cinzel, serif' }}>15+</div>
              <div className="text-sm text-white/60" style={{ fontFamily: 'Raleway' }}>Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
