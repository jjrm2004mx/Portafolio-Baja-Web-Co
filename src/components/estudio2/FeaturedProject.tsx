import { ArrowUpRight } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
              Proyecto Destacado
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-600 mt-3 font-display">
              Rivera Contadores
            </h2>
          </div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-navy-600/5 border border-navy-600/20 text-navy-600 text-xs font-semibold uppercase tracking-wider font-sans">
            Despacho Contable
          </span>
        </div>

        <div className="relative rounded-3xl bg-neutral-50 border border-neutral-200 shadow-xl overflow-hidden">
          <img
            src="/images/demo/Despacho-Contable-1-2026.PNG"
            alt="Vista previa del sitio para Rivera Contadores"
            className="w-full h-auto"
          />

          <div className="p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-neutral-200">
            <p className="text-neutral-600 max-w-lg font-sans">
              Una página profesional que muestra servicios, genera confianza y conecta directo a
              WhatsApp para que los clientes agenden sin fricción.
            </p>
            <a
              href="/demos/rivera-contadores"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
