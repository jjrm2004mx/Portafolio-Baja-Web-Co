import { Award } from 'lucide-react';

const cpas = [
  {
    name: 'Laura Morales Gutiérrez',
    role: 'Contadora Pública Fundadora',
    focus: 'Asesoría Fiscal, Optimización Tributaria',
    certification: 'Contador Público Certificado (IMCP)',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Carlos Rivera López',
    role: 'Contador Senior',
    focus: 'Contabilidad Empresarial, Auditoría',
    certification: 'Auditor Externo Certificado',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Patricia González Sánchez',
    role: 'Especialista Nómina',
    focus: 'Gestión de Nómina, Cumplimiento Laboral',
    certification: 'Especialista en Seguridad Social',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&q=80',
  },
  {
    name: 'Roberto Díaz Moreno',
    role: 'Asesor Fiscal',
    focus: 'Planeación Fiscal, Constitución de Empresas',
    certification: 'Especialista en Tributación',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&q=80',
  },
];

export default function CPAProfiles() {
  return (
    <section id="equipo" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B45309] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Conoce a Nuestro Equipo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#1E3A8A] font-bold" style={{ fontFamily: 'Lora' }}>
            Nuestros Contadores
          </h2>
          <div className="w-16 h-0.5 bg-[#B45309] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestro equipo de contadores certificados aporta décadas de experiencia combinada y un historial comprobado de éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cpas.map((cpa, idx) => (
            <div
              key={idx}
              className="border border-[#E2DFD5] rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cpa.image}
                  alt={cpa.name}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A8A]" style={{ fontFamily: 'Lora' }}>
                  {cpa.name}
                </h3>
                <p className="text-[#B45309] font-medium text-sm mb-3" style={{ fontFamily: 'IBM Plex Sans' }}>{cpa.role}</p>
                <p className="text-[#5B6472] text-sm mb-4" style={{ fontFamily: 'IBM Plex Sans' }}>{cpa.focus}</p>
                <div className="flex items-center gap-2 text-xs text-[#94A0AD]">
                  <Award className="w-4 h-4" />
                  <span style={{ fontFamily: 'IBM Plex Sans' }}>{cpa.certification}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DFD5]">
                  <a href="#" className="text-[#1E3A8A] font-medium text-sm hover:text-[#B45309] transition-colors cursor-pointer" style={{ fontFamily: 'IBM Plex Sans' }}>
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
