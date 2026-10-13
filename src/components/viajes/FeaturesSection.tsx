import { Headset, ShieldCheck, CalendarCheck, Compass } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Experiencias Seleccionadas',
    description: 'Destinos y actividades elegidas a mano, adaptadas a tus preferencias.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de Mejor Precio',
    description: 'Igualamos el precio de cualquier competidor y ofrecemos ofertas exclusivas.',
  },
  {
    icon: Headset,
    title: 'Soporte 24/7',
    description: 'Asistencia las 24 horas, estés donde estés en el mundo.',
  },
  {
    icon: CalendarCheck,
    title: 'Reservas Flexibles',
    description: 'Cancelación gratuita y reprogramación sencilla en la mayoría de los viajes.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-[#FBBF24] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
            Por qué elegirnos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
            Viaja con <span className="text-[#FF6B4A]">Confianza</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FF6B4A]/10 flex items-center justify-center text-[#FF6B4A] group-hover:bg-[#FF6B4A] group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
