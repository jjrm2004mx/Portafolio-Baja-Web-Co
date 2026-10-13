import { ArrowRight, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0B0B0F]">
      {/* Subtle gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#C9A55C]/[0.07] blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,165,92,0.05),_transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A55C]/30 bg-[#16161D] text-[#C9A55C] text-xs font-medium uppercase tracking-[0.25em] mb-8">
          Estudio de Diseño Web
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-[1.1]"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Landing pages que
          <br />
          convierten <span className="text-[#C9A55C] italic">visitantes</span> en clientes
        </h1>

        <div className="w-14 h-px bg-[#C9A55C] mx-auto mb-6"></div>

        <p
          className="text-lg sm:text-xl text-[#A3A3AD] mb-12 max-w-xl mx-auto"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Diseñamos y construimos páginas de aterrizaje a medida para profesionales y pequeños negocios
          que quieren verse — y vender — como marcas de primer nivel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C9A55C] hover:bg-[#b8944c] text-[#0B0B0F] font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-full hover:border-[#C9A55C]/50 hover:bg-[#16161D] transition-all duration-300"
          >
            <FileText className="w-4 h-4" strokeWidth={1.75} />
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}
