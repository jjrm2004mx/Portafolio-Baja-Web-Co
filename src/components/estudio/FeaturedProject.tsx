import { ArrowUpRight } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <span
              className="text-xs font-medium text-[#C9A55C] uppercase tracking-[0.25em]"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Proyecto Destacado
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mt-3"
              style={{ fontFamily: 'Lora, serif' }}
            >
              Bienes Raíces de Lujo
            </h2>
          </div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full border border-[#C9A55C]/30 text-[#C9A55C] text-xs font-medium uppercase tracking-wider">
            Real Estate
          </span>
        </div>

        <div className="relative rounded-3xl bg-[#16161D] border border-white/5 p-6 sm:p-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C9A55C]/10 blur-[100px] pointer-events-none"></div>

          {/* Device mockup */}
          <div className="relative flex items-end justify-center gap-0 mb-10 sm:mb-14">
            {/* Laptop */}
            <div className="relative w-full max-w-3xl">
              <div className="rounded-t-xl bg-[#0B0B0F] border border-white/10 p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-2 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                </div>
                <div className="aspect-[16/10] rounded-md overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=750&fit=crop&q=80"
                    alt="Vista previa Bienes Raíces de Lujo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="h-3 bg-gradient-to-b from-[#0B0B0F] to-[#1c1c24] rounded-b-lg border-x border-b border-white/10"></div>
            </div>

            {/* Phone overlapping */}
            <div className="hidden sm:block absolute -right-2 bottom-0 w-32 translate-y-6">
              <div className="rounded-[1.5rem] bg-[#0B0B0F] border border-white/10 p-1.5 shadow-2xl">
                <div className="aspect-[9/19] rounded-[1.1rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=850&fit=crop&q=80"
                    alt="Vista móvil Bienes Raíces de Lujo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="text-[#A3A3AD] max-w-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Glassmorphism, recorridos virtuales y agentes expertos: una experiencia premium diseñada
              para elevar la percepción de marcas inmobiliarias de alto nivel.
            </p>
            <a
              href="/demos/realestate"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C9A55C] hover:bg-[#b8944c] text-[#0B0B0F] font-semibold rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Ver en Vivo
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
