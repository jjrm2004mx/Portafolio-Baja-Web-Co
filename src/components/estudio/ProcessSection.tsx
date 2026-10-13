import { PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    number: '01',
    title: 'Diseño',
    description: 'Definimos la estrategia visual, estructura y copy alineados a tu marca y objetivos de conversión.',
    time: '2-3 días',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Construcción',
    description: 'Desarrollamos tu landing page con animaciones, formularios y optimización para todos los dispositivos.',
    time: '3-5 días',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Lanzamiento',
    description: 'Publicamos, conectamos tu dominio y dejamos todo listo para recibir y convertir visitantes.',
    time: '1 día',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-medium text-[#C9A55C] uppercase tracking-[0.25em]"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Cómo Trabajamos
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mt-3 mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            De la Idea al <span className="text-[#C9A55C] italic">Lanzamiento</span>
          </h2>
          <div className="w-14 h-px bg-[#C9A55C] mx-auto mb-4"></div>
          <p className="text-[#A3A3AD] max-w-lg mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Un proceso simple y transparente, pensado para entregar resultados rápido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-[#C9A55C]/30 to-transparent"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative rounded-2xl bg-[#16161D] border border-white/5 p-8 text-center hover:border-[#C9A55C]/30 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-[#C9A55C]/40 flex items-center justify-center text-[#C9A55C] relative bg-[#0B0B0F]">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#C9A55C] text-[#0B0B0F] text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: 'Lora, serif' }}>
                  {step.title}
                </h3>
                <p className="text-sm text-[#A3A3AD] mb-5 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {step.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-[#C9A55C]/10 text-[#C9A55C] text-xs font-semibold uppercase tracking-wider">
                  {step.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
