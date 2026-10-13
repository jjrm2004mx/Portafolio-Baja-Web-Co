import { Mail, TrendingUp } from 'lucide-react';

interface Agent {
  name: string;
  role: string;
  sales: string;
  image: string;
}

const agents: Agent[] = [
  {
    name: 'Victoria Sterling',
    role: 'Agente Senior de Lujo',
    sales: '$120M+ en ventas',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Jaime Contreras',
    role: 'Especialista Comercial',
    sales: '$85M+ en ventas',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Sofía Chávez',
    role: 'Experta Residencial',
    sales: '$95M+ en ventas',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Miguel Rosas',
    role: 'Asesor de Inversiones',
    sales: '$150M+ en ventas',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
];

export default function AgentProfiles() {
  return (
    <section id="agentes" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-medium text-[#C9A227] uppercase tracking-wider" style={{ fontFamily: 'Raleway' }}>
            Nuestro Equipo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] mt-2 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Conoce a Nuestros Agentes Expertos
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: 'Raleway' }}>
            Nuestro equipo dedicado de profesionales está comprometido a ayudarte a encontrar tu propiedad perfecta.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {agents.map((agent, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <button className="flex-1 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-center text-sm font-medium text-[#111827] hover:bg-white transition-colors cursor-pointer">
                      Contactar
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                      <Mail className="w-5 h-5 text-[#111827]" />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#111827]" style={{ fontFamily: 'Cinzel, serif' }}>{agent.name}</h3>
              <p className="text-sm text-[#6B7280] mb-2" style={{ fontFamily: 'Raleway' }}>{agent.role}</p>
              <p className="text-sm font-medium text-[#C9A227] flex items-center gap-1" style={{ fontFamily: 'Raleway' }}>
                <TrendingUp className="w-3.5 h-3.5" /> {agent.sales}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
