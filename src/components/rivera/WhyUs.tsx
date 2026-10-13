import { ShieldCheck, Clock, Users2, TrendingUp } from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Confianza y Confidencialidad',
    description: 'Manejamos tu información financiera con el máximo cuidado y discreción.',
  },
  {
    icon: Clock,
    title: 'Cumplimiento Puntual',
    description: 'Tus obligaciones fiscales siempre al día, sin multas ni sorpresas.',
  },
  {
    icon: Users2,
    title: 'Atención Personalizada',
    description: 'Un equipo dedicado que conoce tu negocio y responde tus dudas a tiempo.',
  },
  {
    icon: TrendingUp,
    title: 'Enfoque en Crecimiento',
    description: 'Te ayudamos a tomar mejores decisiones financieras para escalar tu negocio.',
  },
];

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Por Qué Elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            Rivera Contadores
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-sans">
            Más de 12 años ayudando a personas y empresas a mantener su tranquilidad fiscal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-navy-600/5 flex items-center justify-center text-navy-600 group-hover:bg-navy-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-navy-600 mb-2 font-display">{point.title}</h3>
                <p className="text-sm text-neutral-600 font-sans">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
