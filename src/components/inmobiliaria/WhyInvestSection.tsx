import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

export function WhyInvestSection() {
  const benefits = [
    {
      icon: '🔒',
      title: 'Transparencia Total',
      description: 'Precios verificados, documentación clara y sin costos ocultos. Cada propiedad disponible para inspección.',
    },
    {
      icon: '👨‍💼',
      title: 'Equipo Experto',
      description: 'Agentes certificados con +15 años de experiencia. Especializados en inversión y compraventa residencial.',
    },
    {
      icon: '📍',
      title: 'Ubicaciones Premium',
      description: 'Propiedades en zonas de alto crecimiento. Barrios desarrollados con amenidades de clase mundial.',
    },
    {
      icon: '💰',
      title: 'Retorno de Inversión',
      description: 'ROI promedio del 8.2% anual. Análisis detallado de flujos de efectivo y potencial de apreciación.',
    },
    {
      icon: '📋',
      title: 'Asesoría Integral',
      description: 'Financiamiento, seguros, trámites legales. Soporte completo desde búsqueda hasta cierre de transacción.',
    },
    {
      icon: '🌍',
      title: 'Alcance Global',
      description: 'Inversión local con perspectiva internacional. Acceso a propiedades en mercados emergentes de alto potencial.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-teal-900 mb-4">
            Por Qué Invertir Con Nosotros
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-blue-600 mx-auto mb-6" />
          <p className="font-sans text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Más de 500 transacciones exitosas y miles de clientes satisfechos confían en nuestro expertise.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <Card className="h-full p-8 border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300">
                <p className="text-5xl mb-4">{benefit.icon}</p>
                <h3 className="text-h5 font-bold text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-body-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Transacciones' },
            { number: '$2.5B+', label: 'Valor Total' },
            { number: '98%', label: 'Satisfacción' },
            { number: '24/7', label: 'Soporte' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-lg"
            >
              <p className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</p>
              <p className="text-neutral-300 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
