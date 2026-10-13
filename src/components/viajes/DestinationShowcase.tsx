import { Heart, Star } from 'lucide-react';

interface Destination {
  name: string;
  country: string;
  description: string;
  image: string;
  price: string;
  nights: string;
  rating: number;
  accent: string;
}

const destinations: Destination[] = [
  {
    name: 'Santorini',
    country: 'Grecia',
    description: 'Casas blancas icónicas y atardeceres impresionantes',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&q=80',
    price: '$1,299',
    nights: '7 días',
    rating: 4.9,
    accent: '#38BDF8',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    description: 'Paraíso tropical con templos antiguos y playas',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&q=80',
    price: '$899',
    nights: '5 días',
    rating: 4.8,
    accent: '#34D399',
  },
  {
    name: 'Alpes Suizos',
    country: 'Suiza',
    description: 'Vistas de montaña impresionantes y deportes de aventura',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop&q=80',
    price: '$1,599',
    nights: '6 días',
    rating: 4.9,
    accent: '#818CF8',
  },
  {
    name: 'Tokio',
    country: 'Japón',
    description: 'Donde la tradición se encuentra con la modernidad',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&q=80',
    price: '$1,199',
    nights: '8 días',
    rating: 4.7,
    accent: '#F472B6',
  },
];

export default function DestinationShowcase() {
  return (
    <section id="destinos" className="py-12 sm:py-20 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-sm font-medium text-[#FBBF24] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Explora
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
              Destinos <span className="text-[#FF6B4A]">Populares</span>
            </h2>
          </div>
          <button className="self-start md:self-auto px-6 py-3 rounded-xl border-2 border-[#FF6B4A] text-[#FF6B4A] font-semibold text-sm hover:bg-[#FF6B4A] hover:text-white transition-all duration-300 cursor-pointer">
            Ver todos los destinos
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" />
                  {dest.rating}
                </div>
                <div
                  className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: dest.accent, fontFamily: 'Poppins' }}
                >
                  {dest.country}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
                  {dest.name}, {dest.country}
                </h3>
                <p className="text-sm text-[#64748B] mb-3" style={{ fontFamily: 'Inter' }}>{dest.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#FF6B4A]" style={{ fontFamily: 'Poppins' }}>{dest.price}</span>
                    <span className="text-sm text-[#64748B]"> / {dest.nights}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-[#F8FAFC] flex items-center justify-center hover:bg-[#FF6B4A] hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="h-1 group-hover:h-1.5 transition-all duration-300" style={{ backgroundColor: dest.accent }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
