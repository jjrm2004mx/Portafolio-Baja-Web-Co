import { Container } from '@/components/shared/Container'

const SERVICES = [
  { icon: '✂️', title: 'Corte Clásico', description: 'Corte de cabello con estilo clásico y detalles precisos' },
  { icon: '⚡', title: 'Fade & Diseño', description: 'Cortes modernos con degradados y diseños personalizados' },
  { icon: '🪒', title: 'Afeitado Tradicional', description: 'Afeitada clásica con navaja y productos premium' },
  { icon: '💈', title: 'Tratamiento Barba', description: 'Acondicionamiento y moldeado profesional de barba' },
  { icon: '🎨', title: 'Tinte Profesional', description: 'Coloración con productos de alta calidad' },
  { icon: '👑', title: 'Paquete Premium', description: 'Experiencia completa de grooming' },
]

export function BarberyServicesGrid() {
  return (
    <section id="servicios" className="bg-gray-50 py-20">
      <Container>
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Servicios premium de barbería para el caballero moderno
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg hover:border-amber-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                {service.title}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
