import { Award, Scale, Star, Trophy } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Sterling & Asociados luchó incansablemente por mi caso. Su dedicación y experiencia resultaron en un acuerdo que superó mis expectativas. No pude haber pedido mejor representación.',
    name: 'Jaime Mitchell',
    case: 'Caso de Lesiones Personales',
  },
  {
    quote:
      'Durante el momento más difícil de mi vida, el equipo de Sterling & Asociados me brindó no solo experiencia legal, sino compasión genuina. Me trataron como familia.',
    name: 'María Rodríguez',
    case: 'Caso de Derecho Familiar',
  },
  {
    quote:
      'Su equipo de derecho corporativo nos ayudó a navegar una fusión compleja con precisión y profesionalismo. Anticiparon cada desafío y entregaron resultados excepcionales.',
    name: 'David Chen',
    case: 'Fusión Corporativa',
  },
];

const awards = [
  { icon: Star, label: 'Super Lawyers' },
  { icon: Trophy, label: 'Mejores Despachos' },
  { icon: Award, label: 'Martindale-Hubbell' },
  { icon: Scale, label: 'Barra de Abogados' },
  { icon: Trophy, label: 'Top 100 Litigantes' },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Testimonios de Clientes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#0A2342] font-bold" style={{ fontFamily: 'Lora' }}>
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#F8F7F2] border border-[#E2DFD5] rounded-lg p-6 sm:p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C9A227] fill-[#C9A227]" />
                ))}
              </div>
              <p className="text-[#374151] mb-6 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>&quot;{t.quote}&quot;</p>
              <div className="border-t border-[#E2DFD5] pt-4">
                <div className="font-semibold text-[#0A2342]" style={{ fontFamily: 'Lora' }}>{t.name}</div>
                <div className="text-sm text-[#5B6472]" style={{ fontFamily: 'IBM Plex Sans' }}>{t.case}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards strip */}
        <div className="mt-12 sm:mt-20">
          <h3 className="text-center text-lg font-semibold text-[#5B6472] mb-8" style={{ fontFamily: 'IBM Plex Sans' }}>
            Premios y Reconocimientos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {awards.map((award, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#94A0AD]">
                <award.icon className="w-6 h-6 text-[#C9A227]" />
                <span className="font-medium" style={{ fontFamily: 'IBM Plex Sans' }}>{award.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
