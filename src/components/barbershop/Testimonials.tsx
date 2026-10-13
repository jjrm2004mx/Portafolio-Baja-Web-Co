import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rodrigo Ibarra',
    role: 'Cliente desde 2021',
    quote:
      'El mejor fade que me han hecho en años. La atención al detalle y el ambiente del lugar son de otro nivel.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Fernando Casas',
    role: 'Cliente frecuente',
    quote:
      'Reservar una cita es súper fácil y siempre salgo con el corte exacto que pedí. Totalmente recomendado.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Emilio Vargas',
    role: 'Cliente desde 2019',
    quote:
      'El arreglo de barba con toalla caliente se siente como un ritual. Ambiente clásico con toque moderno.',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#D4A853] uppercase tracking-[0.2em]">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Lo que Dicen <span className="text-[#D4A853]">Nuestros Clientes</span>
          </h2>
          <div className="w-16 h-px bg-[#D4A853] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A2232] border border-[#D4A853]/15 p-7 hover:border-[#D4A853]/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#D4A853]/40 mb-4" strokeWidth={1.5} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A853] text-[#D4A853]" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[#A0A8B8] mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#D4A853]/15">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-[#A0A8B8] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
