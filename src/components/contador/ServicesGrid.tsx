import { ArrowRight, BarChart3, Calculator, DollarSign, FileText, Users } from 'lucide-react';

const serviceAreas = [
  {
    icon: Calculator,
    title: 'Contabilidad Empresarial',
    description: 'Registro y organización completa de transacciones financieras con análisis detallado.',
  },
  {
    icon: DollarSign,
    title: 'Optimización Fiscal',
    description: 'Estrategias legales para minimizar tu carga tributaria y maximizar utilidades.',
  },
  {
    icon: Users,
    title: 'Nómina y RRHH',
    description: 'Gestión integral de recursos humanos con cumplimiento IMSS/SAT garantizado.',
  },
  {
    icon: FileText,
    title: 'Auditoría y Revisión',
    description: 'Evaluación independiente de tu situación financiera y controles internos.',
  },
  {
    icon: BarChart3,
    title: 'Análisis Financiero',
    description: 'Información estratégica para tomar decisiones empresariales acertadas.',
  },
  {
    icon: FileText,
    title: 'Constitución de Empresas',
    description: 'Asesoría legal y fiscal completa para la formación de tu negocio.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="areas-de-servicio" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B45309] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestra Experiencia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#1E3A8A] font-bold" style={{ fontFamily: 'Lora' }}>
            Áreas de Servicio
          </h2>
          <div className="w-16 h-0.5 bg-[#B45309] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestro equipo de contadores experimentados brinda servicios integrales en una amplia gama de áreas contables y fiscales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2DFD5] rounded-lg p-7 hover:border-[#B45309]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-[#1E3A8A]/5 flex items-center justify-center text-[#1E3A8A] mb-5">
                <area.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1E3A8A]" style={{ fontFamily: 'Lora' }}>
                {area.title}
              </h3>
              <p className="text-[#5B6472]" style={{ fontFamily: 'IBM Plex Sans' }}>{area.description}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[#B45309] font-medium mt-4 hover:gap-3 transition-all cursor-pointer" style={{ fontFamily: 'IBM Plex Sans' }}>
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
