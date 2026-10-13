import { Scissors, CalendarCheck, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1623]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1920&h=1200&fit=crop&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1623]/60 via-[#0F1623]/85 to-[#0F1623]"></div>

      {/* Subtle gold radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A853]/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A853]/40 bg-[#1A2232] text-[#D4A853] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            <Scissors className="w-4 h-4" strokeWidth={1.5} />
            Barbería Clásica &amp; Moderna
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Estilo con <span className="text-[#D4A853]">Carácter</span>,
            <br />
            Precisión en Cada Corte
          </h1>

          <div className="w-16 h-px bg-[#D4A853] mx-auto mb-6"></div>

          <p className="text-lg text-[#A0A8B8] mb-10 max-w-lg mx-auto">
            Cortes de precisión, afeitados clásicos y un ambiente que respeta la tradición de la barbería
            con un toque moderno. Reserva tu lugar con los mejores barberos de la ciudad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button className="flex items-center gap-2 px-8 py-4 bg-[#D4A853] hover:bg-[#c89a44] text-[#0F1623] font-bold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
              <CalendarCheck className="w-5 h-5" strokeWidth={2} />
              Reservar Ahora
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-[#D4A853]/50 text-white font-semibold rounded-lg hover:bg-[#1A2232] transition-all duration-300 cursor-pointer">
              Ver Servicios
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#D4A853]">12+</div>
              <div className="text-xs text-[#A0A8B8] uppercase tracking-wider">Años de Experiencia</div>
            </div>
            <div className="w-px h-10 bg-[#D4A853]/20"></div>
            <div>
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-bold text-[#D4A853]">
                4.9 <Star className="w-5 h-5 fill-[#D4A853]" strokeWidth={0} />
              </div>
              <div className="text-xs text-[#A0A8B8] uppercase tracking-wider">Calificación Clientes</div>
            </div>
            <div className="w-px h-10 bg-[#D4A853]/20"></div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#D4A853]">8K+</div>
              <div className="text-xs text-[#A0A8B8] uppercase tracking-wider">Cortes Realizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
