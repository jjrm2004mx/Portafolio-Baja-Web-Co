import { FileText, Calendar, Users, Network, FilePlus2, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Contabilidad General',
    description: 'Registro, control y análisis financiero para personas físicas y morales.',
    items: ['Estados financieros', 'Conciliaciones bancarias', 'Reportes mensuales'],
  },
  {
    icon: Calendar,
    title: 'Declaraciones Fiscales',
    description: 'Cumplimiento puntual de obligaciones fiscales ante el SAT.',
    items: ['Declaraciones mensuales', 'Declaración anual', 'Pagos provisionales'],
  },
  {
    icon: Users,
    title: 'Nómina',
    description: 'Gestión integral de nómina y obligaciones patronales.',
    items: ['Cálculo de nómina', 'Timbrado CFDI', 'IMSS e Infonavit'],
  },
  {
    icon: Network,
    title: 'Asesoría Fiscal',
    description: 'Planeación estratégica para optimizar tu carga tributaria.',
    items: ['Planeación fiscal', 'Auditoría preventiva', 'Atención a requerimientos'],
  },
  {
    icon: FilePlus2,
    title: 'Constitución de Empresas',
    description: 'Acompañamiento legal y fiscal para iniciar tu negocio.',
    items: ['Alta ante el SAT', 'Acta constitutiva', 'Régimen fiscal óptimo'],
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            Soluciones Contables Integrales
          </h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-lg p-7 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-600 flex items-center justify-center text-white mb-6">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-2 font-display">{service.title}</h3>
                <p className="text-sm text-neutral-600 mb-5 font-sans">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-600 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
