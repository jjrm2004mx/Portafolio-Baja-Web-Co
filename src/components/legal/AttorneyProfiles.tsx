import { GraduationCap } from 'lucide-react';

const attorneys = [
  {
    name: 'Roberto Salinas',
    role: 'Socio Fundador',
    focus: 'Lesiones Personales, Litigio Civil',
    school: 'Universidad Panamericana',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Elena Chávez',
    role: 'Socia Senior',
    focus: 'Derecho Corporativo, Fusiones y Adquisiciones',
    school: 'ITAM',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Miguel Torres',
    role: 'Socio',
    focus: 'Defensa Penal',
    school: 'Universidad Iberoamericana',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Sara Villanueva',
    role: 'Socia',
    focus: 'Derecho Familiar, Planeación Patrimonial',
    school: 'Universidad Anáhuac',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80',
  },
];

export default function AttorneyProfiles() {
  return (
    <section id="abogados" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Conoce a Nuestro Equipo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#0A2342] font-bold" style={{ fontFamily: 'Lora' }}>
            Nuestros Abogados
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestro equipo de abogados distinguidos aporta décadas de experiencia combinada y un historial
            comprobado de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {attorneys.map((attorney, idx) => (
            <div
              key={idx}
              className="border border-[#E2DFD5] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0A2342]" style={{ fontFamily: 'Lora' }}>
                  {attorney.name}
                </h3>
                <p className="text-[#C9A227] font-medium text-sm mb-3" style={{ fontFamily: 'IBM Plex Sans' }}>{attorney.role}</p>
                <p className="text-[#5B6472] text-sm mb-4" style={{ fontFamily: 'IBM Plex Sans' }}>{attorney.focus}</p>
                <div className="flex items-center gap-2 text-xs text-[#94A0AD]">
                  <GraduationCap className="w-4 h-4" />
                  <span style={{ fontFamily: 'IBM Plex Sans' }}>{attorney.school}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DFD5]">
                  <a href="#" className="text-[#0A2342] font-medium text-sm hover:text-[#C9A227] transition-colors cursor-pointer" style={{ fontFamily: 'IBM Plex Sans' }}>
                    Ver Perfil →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
