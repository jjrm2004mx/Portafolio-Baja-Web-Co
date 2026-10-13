import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Solís',
    business: 'Spa Bienestar Total',
    quote:
      'En menos de una semana teníamos una página que realmente reflejaba la calidad de nuestros servicios. Las reservas aumentaron casi de inmediato.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Héctor Villalobos',
    business: 'Martínez & Asociados',
    quote:
      'El diseño navy y profesional le dio a nuestro despacho la seriedad que buscábamos transmitir a nuevos clientes.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Carlos Rivera',
    business: 'Rivera Contadores',
    quote:
      'Nos entregaron el sitio antes de lo prometido. El botón directo a WhatsApp nos ha traído clientes nuevos cada semana.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            Clientes que Confiaron en Nosotros
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
                <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
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
