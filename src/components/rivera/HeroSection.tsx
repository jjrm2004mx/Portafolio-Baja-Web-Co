import { ArrowRight, FileText, Calendar, Users, Network, FilePlus2 } from 'lucide-react';

const services = [
  { icon: FileText, label: 'Contabilidad General' },
  { icon: Calendar, label: 'Declaraciones Fiscales' },
  { icon: Users, label: 'Nómina' },
  { icon: Network, label: 'Asesoría Fiscal' },
  { icon: FilePlus2, label: 'Constitución de Empresas' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-white">
      <div className="relative grid lg:grid-cols-2 min-h-[560px]">
        {/* Left: text */}
        <div className="flex items-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mb-5 leading-tight font-display">
              Tu tranquilidad fiscal, nuestra prioridad.
            </h1>
            <p className="text-lg text-neutral-600 mb-8 font-sans">
              Soluciones contables y fiscales para personas y empresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Agenda una consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-neutral-300 text-navy-600 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-300"
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative min-h-[320px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=900&fit=crop&q=80"
            alt="Asesoría contable y fiscal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:block hidden"></div>
        </div>
      </div>

      {/* Overlapping services strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 pb-10">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center gap-3 p-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-navy-600">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-semibold text-navy-600 font-sans">{service.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
