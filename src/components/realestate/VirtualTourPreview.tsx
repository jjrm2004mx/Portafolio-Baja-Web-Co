import { Play, Maximize2, Camera, Rotate3d } from 'lucide-react';

export default function VirtualTourPreview() {
  return (
    <section id="tour-virtual" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-sm font-medium text-[#C9A227] uppercase tracking-wider" style={{ fontFamily: 'Raleway' }}>
            Experiencia Inmersiva
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Recorridos Virtuales en 3D
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Raleway' }}>
            Explora cada propiedad desde la comodidad de tu hogar con recorridos virtuales de alta definición
            y vistas en 360°.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=900&fit=crop&q=80"
              alt="Recorrido virtual de propiedad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>

            {/* Glass play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/25 transition-all duration-300 cursor-pointer group">
                <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Glass info bar */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 bg-white/10 backdrop-blur-xl border-t border-white/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white" style={{ fontFamily: 'Cinzel, serif' }}>
                    Residencia Contemporánea
                  </h3>
                  <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway' }}>
                    San Pedro Garza García, NL — Recorrido 360° disponible
                  </p>
                </div>
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C9A227] text-[#111827] font-semibold text-sm hover:bg-[#B8911E] transition-colors cursor-pointer self-start sm:self-auto">
                  <Maximize2 className="w-4 h-4" />
                  Pantalla Completa
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-8 sm:mt-10">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E7E3DA]">
            <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#C9A227] flex-shrink-0">
              <Rotate3d className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1" style={{ fontFamily: 'Cinzel, serif' }}>Vista 360°</h4>
              <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Raleway' }}>Explora cada ángulo de la propiedad a tu propio ritmo.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E7E3DA]">
            <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#C9A227] flex-shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1" style={{ fontFamily: 'Cinzel, serif' }}>Calidad HD</h4>
              <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Raleway' }}>Imágenes y video en altísima resolución.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#E7E3DA]">
            <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#C9A227] flex-shrink-0">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1" style={{ fontFamily: 'Cinzel, serif' }}>Disponible 24/7</h4>
              <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Raleway' }}>Visita propiedades a cualquier hora, desde cualquier lugar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
