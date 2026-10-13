import { Video, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Recorridos Virtuales',
    description: 'Vive las propiedades desde cualquier lugar con nuestros inmersivos recorridos 3D.',
  },
  {
    icon: Users,
    title: 'Asesoría Experta',
    description: 'Nuestros agentes experimentados brindan un servicio personalizado en cada paso.',
  },
  {
    icon: ShieldCheck,
    title: 'Transacciones Seguras',
    description: 'Opera con tranquilidad gracias a nuestro proceso seguro, transparente y legal.',
  },
  {
    icon: TrendingUp,
    title: 'Análisis de Mercado',
    description: 'Toma decisiones informadas con nuestro análisis integral de mercado y datos.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-[#C9A227] uppercase tracking-wider" style={{ fontFamily: 'Raleway' }}>
            Por Qué Elegirnos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            La Diferencia LuxeEstate
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Raleway' }}>
            Combinamos experiencia, tecnología y servicio personalizado para ofrecer una experiencia
            inmobiliaria excepcional.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#111827]/5 flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-[#C9A227] transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6B7280]" style={{ fontFamily: 'Raleway' }}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
