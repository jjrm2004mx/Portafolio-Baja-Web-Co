import { BedDouble, Bath, Heart, MapPin, Maximize } from 'lucide-react';

interface Property {
  name: string;
  location: string;
  image: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  featured: boolean;
}

const properties: Property[] = [
  {
    name: 'Villa Moderna Frente al Mar',
    location: 'Punta Mita, Nayarit',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&q=80',
    price: '$78,500,000',
    beds: 5,
    baths: 4,
    sqft: '576 m²',
    featured: true,
  },
  {
    name: 'Suite Penthouse de Lujo',
    location: 'Polanco, CDMX',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
    price: '$152,000,000',
    beds: 4,
    baths: 3,
    sqft: '446 m²',
    featured: false,
  },
  {
    name: 'Residencia Contemporánea',
    location: 'San Pedro Garza García, NL',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
    price: '$215,000,000',
    beds: 7,
    baths: 8,
    sqft: '1,115 m²',
    featured: true,
  },
];

export default function FeaturedListings() {
  return (
    <section id="propiedades" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-sm font-medium text-[#111827] uppercase tracking-wider" style={{ fontFamily: 'Raleway' }}>
              Listados Destacados
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] mt-2" style={{ fontFamily: 'Cinzel, serif' }}>
              Propiedades Excepcionales
            </h2>
          </div>
          <button className="self-start md:self-auto px-6 py-3 rounded-lg border-2 border-[#111827] text-[#111827] font-medium text-sm hover:bg-[#111827] hover:text-white transition-all duration-300 cursor-pointer">
            Ver Todas las Propiedades
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C9A227] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    Destacada
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>

                {/* Glassmorphism info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-xl border-t border-white/20">
                  <div className="flex gap-4 text-sm text-white">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" /> {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" /> {property.sqft}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-2" style={{ fontFamily: 'Raleway' }}>
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                  {property.name}
                </h3>
                <div className="flex items-center justify-between pt-4 border-t border-[#E7E3DA]">
                  <span className="text-2xl font-semibold text-[#111827]" style={{ fontFamily: 'Cinzel, serif' }}>
                    {property.price}
                  </span>
                  <span className="text-sm font-medium text-[#C9A227] hover:underline cursor-pointer" style={{ fontFamily: 'Raleway' }}>
                    Ver Detalles
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
