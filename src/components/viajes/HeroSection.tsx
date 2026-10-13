import { Compass, MapPin, Search, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-12 sm:pb-20 px-4 md:px-8 min-h-screen overflow-hidden bg-white">
      {/* Aurora gradient blobs (subtle, light theme) */}
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-[#22D3EE] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#A855F7] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FF6B4A] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto pt-12">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left: copy + search */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B4A]/10 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
              <span className="text-[#FF6B4A]" style={{ fontFamily: 'Inter' }}>
                Agencia de viajes mejor calificada 2024
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
              Descubre tu
              <br />
              <span className="text-[#FF6B4A]">Próxima Aventura</span>
            </h1>
            <p className="text-lg text-[#64748B] mb-8 max-w-md" style={{ fontFamily: 'Inter' }}>
              Explora destinos impresionantes, crea recuerdos inolvidables y vive el mundo como nunca antes con
              nuestras experiencias de viaje curadas.
            </p>

            {/* Search / booking card */}
            <div className="bg-white/80 backdrop-blur-xl border border-[#E2E8F0] shadow-lg rounded-2xl p-4 mb-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-xs text-[#64748B] mb-1">
                    <MapPin className="w-3 h-3" /> ¿A dónde vas?
                  </label>
                  <input
                    type="text"
                    placeholder="Buscar destino"
                    className="w-full bg-transparent text-sm font-medium text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#64748B] mb-1">Entrada</label>
                  <input
                    type="text"
                    placeholder="Agregar fecha"
                    className="w-full bg-transparent text-sm font-medium text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#64748B] mb-1">Viajeros</label>
                  <input
                    type="text"
                    placeholder="2 adultos"
                    className="w-full bg-transparent text-sm font-medium text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 bg-[#FF6B4A] text-white text-sm font-semibold rounded-xl py-2.5 hover:bg-[#E85A3A] hover:scale-105 transition-all duration-300 cursor-pointer">
                  <Search className="w-4 h-4" />
                  Buscar
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8">
              <div>
                <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>500+</div>
                <div className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>Destinos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>50K+</div>
                <div className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>Viajeros felices</div>
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center gap-1 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
                  <span className="text-[#FBBF24]">★</span>4.9
                </div>
                <div className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>Calificación</div>
              </div>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop&q=80"
                    alt="Destino de playa"
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop&q=80"
                    alt="Destino de montaña"
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=400&fit=crop&q=80"
                    alt="Destino de ciudad"
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop&q=80"
                    alt="Destino de lago"
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3 border border-[#E2E8F0]">
              <div className="w-12 h-12 rounded-full bg-[#FBBF24]/20 flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#FBBF24]" />
              </div>
              <div>
                <div className="font-bold text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>Próximo viaje</div>
                <div className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>Bali, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
