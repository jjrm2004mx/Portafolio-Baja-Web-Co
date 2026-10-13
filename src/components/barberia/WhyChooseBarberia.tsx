import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const REASONS = [
  {
    icon: '👨‍🎓',
    title: 'Barberos Expertos',
    description: 'Certificados internacionalmente con formación continua',
  },
  {
    icon: '🏆',
    title: 'Calidad Premium',
    description: 'Utilizamos solo productos de las mejores marcas del mundo',
  },
  {
    icon: '✨',
    title: 'Experiencia Completa',
    description: 'Ambiente diseñado para tu relajación y bienestar',
  },
  {
    icon: '⏰',
    title: 'Puntualidad Garantizada',
    description: 'Respetamos tu tiempo, citas sin esperas innecesarias',
  },
  {
    icon: '📱',
    title: 'Reserva Fácil',
    description: 'Booking online en segundos, cancela sin penalidades',
  },
  {
    icon: '🤝',
    title: 'Comunidad Barbería',
    description: 'Únete a nuestra familia de clientes satisfechos',
  },
]

export function WhyChooseBarberia() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-rose-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-lavender-500 to-lavender-400 mx-auto" />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <Card className="p-6 hover:border-lavender-400 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-rose-50 to-white h-full">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="font-serif text-h5 text-rose-900 font-semibold mb-2">
                  {reason.title}
                </h3>
                <p className="font-sans text-body-sm text-rose-700">
                  {reason.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="mt-16 bg-gradient-to-r from-rose-900 to-rose-800 text-white rounded-xl p-12 text-center">
          <p className="text-2xl font-bold mb-2">2605 2605 2605 2605</p>
          <p className="text-xl mb-4">
            "La mejor experiencia de barbería que he tenido. Calidad, profesionalismo y ambiente excelente."
          </p>
          <p className="text-lavender-300 font-semibold">
            - Juan Martinez | Cliente desde 2022
          </p>
        </div>
      </Container>
    </section>
  )
}
