import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jorge Nápoles',
    business: 'Constructora Nápoles',
    quote:
      'Rivera Contadores nos ayudó a poner en orden la contabilidad de la empresa. Ahora todo está al día y sin estrés en cada declaración.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Paola Jiménez',
    business: 'Consultorio Dental Jiménez',
    quote:
      'La atención personalizada y la rapidez para resolver mis dudas fiscales hacen toda la diferencia. Los recomiendo ampliamente.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Esteban Durán',
    business: 'Durán Importaciones',
    quote:
      'Nos ayudaron a constituir la empresa y desde entonces llevan toda nuestra nómina y declaraciones sin un solo contratiempo.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            Clientes Satisfechos
          </h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg p-7 transition-all duration-300"
            >
              <Quote className="w-7 h-7 text-cyan-500/50 mb-4" strokeWidth={1.75} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-cyan-500 text-cyan-500" strokeWidth={0} />
                ))}
              </div>
              <p className="text-neutral-600 mb-6 leading-relaxed text-sm font-sans">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-neutral-200">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-navy-600 font-semibold text-sm font-display">{t.name}</div>
                  <div className="text-neutral-500 text-xs font-sans">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
