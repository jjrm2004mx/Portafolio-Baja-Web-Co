import { Container } from '@/components/shared/Container'

const AGENTS = [
  {
    id: 1,
    name: 'Victoria Sterling',
    title: 'Senior Luxury Agent',
    sales: '$120M+',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'James Crawford',
    title: 'Commercial Specialist',
    sales: '$85M+',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    title: 'Residential Expert',
    sales: '$95M+',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Michael Ross',
    title: 'Investment Advisor',
    sales: '$150M+',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
]

export function AgentTeamSection() {
  return (
    <section id="agents" className="bg-white py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Meet Our Expert Agents
          </h2>
          <p className="text-xl text-stone-600">
            Our dedicated team of professionals is committed to helping you find your perfect property.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="text-center">
              {/* Photo */}
              <div className="mb-6 relative">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Name and Title */}
              <h3 className="text-xl font-bold text-stone-900 mb-1">{agent.name}</h3>
              <p className="text-sm text-teal-600 font-semibold mb-4">{agent.title}</p>

              {/* Sales */}
              <p className="text-lg font-bold text-stone-600 mb-4">{agent.sales} in Sales</p>

              {/* Contact Button */}
              <button className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300 text-sm">
                Contact
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
