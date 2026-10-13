import { PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: PenTool,
    number: '01',
    title: 'Diseño',
    description: 'Definimos estructura, estilo visual y mensaje clave alineados a tu marca y tus clientes.',
    time: '2-3 días',
  },
  {
    icon: Code2,
    number: '02',
    title: 'Construcción',
    description: 'Desarrollamos tu página con formularios, WhatsApp e integración con Google Maps.',
    time: '3-5 días',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Lanzamiento',
    description: 'Publicamos tu sitio, conectamos tu dominio y queda listo para recibir clientes.',
    time: '1 día',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            De la Idea al Lanzamiento
          </h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-neutral-600 max-w-lg mx-auto font-sans">
            Un proceso simple y transparente, pensado para entregar resultados rápido.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm hover:shadow-lg p-8 text-center transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-navy-600 flex items-center justify-center text-white relative">
                  <Icon className="w-7 h-7" strokeWidth={1.75} />
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-3 font-display">{step.title}</h3>
                <p className="text-sm text-neutral-600 mb-5 leading-relaxed font-sans">{step.description}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 text-xs font-semibold uppercase tracking-wider font-sans">
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
