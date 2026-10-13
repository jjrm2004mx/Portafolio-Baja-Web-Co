import { Scissors } from 'lucide-react';

const team = [
  {
    name: 'Diego Ramírez',
    role: 'Barbero Maestro / Fundador',
    experience: '15 años de experiencia',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Carlos Medina',
    role: 'Especialista en Fades',
    experience: '9 años de experiencia',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Luis Herrera',
    role: 'Especialista en Barba',
    experience: '7 años de experiencia',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Andrés Ponce',
    role: 'Estilista & Colorista',
    experience: '6 años de experiencia',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#D4A853] uppercase tracking-[0.2em]">Nuestro Equipo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Maestros del <span className="text-[#D4A853]">Oficio</span>
          </h2>
          <div className="w-16 h-px bg-[#D4A853] mx-auto mb-5"></div>
          <p className="text-lg text-[#A0A8B8] max-w-2xl mx-auto">
            Barberos certificados apasionados por el detalle y la tradición de su oficio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#1A2232] border border-[#D4A853]/15 overflow-hidden hover:border-[#D4A853]/50 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1623] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#D4A853]/50 bg-[#0F1623]/70 flex items-center justify-center text-[#D4A853]">
                  <Scissors className="w-4 h-4" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-[#D4A853] text-sm mb-1">{member.role}</p>
                <p className="text-[#A0A8B8] text-xs">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
