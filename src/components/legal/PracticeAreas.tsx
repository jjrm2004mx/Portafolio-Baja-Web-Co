import { Ambulance, ArrowRight, Briefcase, Gavel, HeartHandshake, ScrollText, Users } from 'lucide-react';

const practiceAreas = [
  {
    icon: Ambulance,
    title: 'Lesiones Personales',
    description: 'Representación integral para víctimas de accidentes, asegurando la máxima compensación por tus lesiones y pérdidas.',
  },
  {
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description: 'Asesoría legal estratégica para empresas de todos los tamaños, desde startups hasta grandes corporativos.',
  },
  {
    icon: Users,
    title: 'Derecho Familiar',
    description: 'Orientación compasiva en divorcios, custodia y asuntos familiares, siempre priorizando tus intereses.',
  },
  {
    icon: Gavel,
    title: 'Defensa Penal',
    description: 'Estrategias de defensa sólidas para proteger tus derechos y libertad en procesos penales.',
  },
  {
    icon: ScrollText,
    title: 'Planeación Patrimonial',
    description: 'Protege tu legado con servicios integrales de testamentos, fideicomisos y administración de patrimonio.',
  },
  {
    icon: HeartHandshake,
    title: 'Derecho Laboral',
    description: 'Defendemos a empleados y empleadores en disputas laborales, discriminación y asuntos contractuales.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="areas-de-practica" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestra Experiencia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#0A2342] font-bold" style={{ fontFamily: 'Lora' }}>
            Áreas de Práctica
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestro equipo de abogados experimentados brinda servicios legales integrales en una amplia gama de áreas de práctica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2DFD5] rounded-lg p-7 hover:border-[#C9A227]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-[#0A2342]/5 flex items-center justify-center text-[#0A2342] mb-5">
                <area.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#0A2342]" style={{ fontFamily: 'Lora' }}>
                {area.title}
              </h3>
              <p className="text-[#5B6472]" style={{ fontFamily: 'IBM Plex Sans' }}>{area.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#C9A227] font-medium mt-4 hover:gap-3 transition-all cursor-pointer" style={{ fontFamily: 'IBM Plex Sans' }}>
                Saber más
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
