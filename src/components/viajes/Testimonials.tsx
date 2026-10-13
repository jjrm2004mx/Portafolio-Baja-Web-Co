import { MapPin, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Reyes',
    location: 'Ciudad de México, México',
    trip: 'Santorini, Grecia',
    quote:
      '¡El viaje a Santorini fue absolutamente mágico! Cada detalle estuvo perfectamente planeado. No puedo esperar a reservar mi próxima aventura.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Daniel Herrera',
    location: 'Guadalajara, México',
    trip: 'Tokio, Japón',
    quote:
      '¡La mejor experiencia de viaje! Los guías locales fueron excelentes y el hospedaje superó nuestras expectativas. Totalmente recomendado.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Amara Soto',
    location: 'Monterrey, México',
    trip: 'Bali, Indonesia',
    quote:
      'Desde la reserva hasta el regreso, todo fue impecable. El viaje a Bali fue un sueño hecho realidad. ¡Gracias por los recuerdos!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-[#FBBF24] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
            Lo que dicen los <span className="text-[#FF6B4A]">viajeros</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24]" />
                ))}
              </div>
              <p className="text-[#64748B] mb-6" style={{ fontFamily: 'Inter' }}>&quot;{t.quote}&quot;</p>

              <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FF6B4A]/10 rounded-full text-xs font-medium text-[#FF6B4A] mb-4">
                <MapPin className="w-3 h-3" />
                {t.trip}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>{t.name}</p>
                  <p className="text-xs text-[#64748B]" style={{ fontFamily: 'Inter' }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
