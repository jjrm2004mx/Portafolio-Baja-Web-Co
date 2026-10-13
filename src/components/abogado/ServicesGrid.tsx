import { Container } from '@/components/shared/Container'

const SERVICES = [
  { icon: '⚖️', title: 'Derecho Mercantil', description: 'Contratos comerciales y transacciones empresariales' },
  { icon: '👥', title: 'Derecho Laboral', description: 'Disputas laborales y cumplimiento regulatorio' },
  { icon: '👨‍👩‍👧', title: 'Derecho Familiar', description: 'Divorcios, custodia y asuntos de familia' },
  { icon: '🏢', title: 'Derecho Corporativo', description: 'Constitución y gobernanza empresarial' },
  { icon: '📋', title: 'Derecho Inmobiliario', description: 'Propiedades y operaciones inmobiliarias' },
  { icon: '⚡', title: 'Litigio', description: 'Representación legal en juzgados' },
]

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <Container>
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Servicios Legales Especializados
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
            Cobertura completa en todas las áreas del derecho que tu empresa o familia necesita
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Lora, serif' }}>
                {service.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
