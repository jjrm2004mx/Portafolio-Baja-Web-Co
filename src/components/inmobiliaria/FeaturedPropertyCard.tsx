import { Container } from '@/components/shared/Container'

const PROPERTIES = [
  {
    id: 1,
    name: 'Modern Waterfront Villa',
    location: 'Miami Beach, FL',
    price: '$4,500,000',
    beds: 5,
    baths: 4,
    sqft: '6,200',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 2,
    name: 'Luxury Penthouse Suite',
    location: 'Manhattan, NY',
    price: '$8,900,000',
    beds: 4,
    baths: 3,
    sqft: '4,800',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 3,
    name: 'Contemporary Estate',
    location: 'Beverly Hills, CA',
    price: '$12,500,000',
    beds: 7,
    baths: 8,
    sqft: '12,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    featured: true,
  },
]

export function FeaturedPropertiesSection() {
  return (
    <section id="properties" className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Exceptional Properties
          </h2>
          <p className="text-xl text-stone-600">
            View All Properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {property.featured && (
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Price and Location */}
                <div className="mb-3">
                  <p className="text-2xl font-bold text-teal-600">{property.price}</p>
                  <p className="text-sm text-stone-600">{property.location}</p>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-stone-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-stone-900">{property.beds}</div>
                    <div className="text-xs text-stone-600">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-stone-900">{property.baths}</div>
                    <div className="text-xs text-stone-600">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-stone-900">{property.sqft}</div>
                    <div className="text-xs text-stone-600">sqft</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a href="#properties">
            <button className="px-8 py-3 bg-stone-200 hover:bg-stone-300 text-stone-900 font-bold rounded-lg transition-all duration-300">
              View All Properties
            </button>
          </a>
        </div>
      </Container>
    </section>
  )
}
