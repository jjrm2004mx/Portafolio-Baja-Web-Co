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
    business: 'Despacho Villalobos & Asociados',
    quote:
      'El diseño navy y dorado le dio a nuestro despacho la seriedad y confianza que buscábamos transmitir a nuevos clientes.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Daniela Reyes',
    business: 'Barbería BarberHouse',
    quote:
      'Nos entregaron la página antes de lo prometido y el sistema de reservas en línea ha simplificado muchísimo nuestra operación diaria.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-medium text-[#C9A55C] uppercase tracking-[0.25em]"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Testimonios
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mt-3 mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Clientes que <span className="text-[#C9A55C] italic">Confiaron</span> en Nosotros
          </h2>
          <div className="w-14 h-px bg-[#C9A55C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#16161D] border border-white/5 p-7 hover:border-[#C9A55C]/30 transition-all duration-300"
            >
              <Quote className="w-7 h-7 text-[#C9A55C]/40 mb-4" strokeWidth={1.5} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A55C] text-[#C9A55C]" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[#A3A3AD] mb-6 leading-relaxed text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium text-sm" style={{ fontFamily: 'Lora, serif' }}>{t.name}</div>
                  <div className="text-[#A3A3AD] text-xs">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
