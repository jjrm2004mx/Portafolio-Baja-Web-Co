import { ArrowRight, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft brand glow */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 -left-24 w-[400px] h-[400px] rounded-full bg-navy-600/5 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24 text-center">
        <img
          src="/images/brand/logo/logo-primary.png"
          alt="BAJA WEB CO."
          className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8"
        />

        <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-100 text-navy-600 text-xs font-semibold uppercase tracking-[0.2em] mb-6 font-sans">
          Presencia Digital para Negocios
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-600 mb-6 leading-tight font-display">
          Páginas web que
          <br />
          <span className="text-cyan-600">generan confianza</span> y clientes
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-xl mx-auto font-sans">
          Diseñamos y construimos sitios profesionales para despachos, inmobiliarias y negocios locales
          que quieren destacar también en Internet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-600 text-navy-600 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-300"
          >
            <FileText className="w-4 h-4" strokeWidth={2} />
            Cotiza tu Proyecto
          </a>
        </div>
      </div>

      {/* Wave divider inspired by brand mark */}
      <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="#004B87"
          opacity="0.06"
        />
        <path
          d="M0,55 C240,20 480,70 720,45 C960,20 1200,70 1440,45 L1440,80 L0,80 Z"
          fill="#00BCD4"
          opacity="0.1"
        />
      </svg>
    </section>
  );
}
