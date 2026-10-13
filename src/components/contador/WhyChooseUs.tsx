import { Container } from '@/components/shared/Container'
import { Card } from '@/components/shared/Card'

const BENEFITS = [
  {
    icon: '🎓',
    title: 'Expertos Certificados',
    description:
      'Equipo con certificaciones del Colegio de Contadores y especialización en fiscalidad mexicana.',
  },
  {
    icon: '⚡',
    title: 'Respuesta en 24 horas',
    description:
      'Soporte inmediato por WhatsApp, email y teléfono. Nunca esperes más de un día.',
  },
  {
    icon: '💰',
    title: 'ROI Comprobado',
    description:
      'Ahorro promedio de $35,000 anuales por cliente. Planes flexibles que se adaptan a ti.',
  },
  {
    icon: '🔒',
    title: 'Confidencialidad Total',
    description:
      'Encriptación de nivel bancario. Cumplimiento con RGPD y normativa de protección de datos.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-h2 font-bold text-slate-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6" />
          <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
            Diferenciadores que nos hacen líderes en asesoría contable profesional
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BENEFITS.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 hover:from-amber-50 hover:to-amber-100 transition-all duration-300 border border-slate-200 hover:border-amber-400"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-h5 text-slate-900 font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-slate-700 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Proof Stats */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">150+</div>
              <p className="text-slate-300">Empresas asesoradas</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">$35K</div>
              <p className="text-slate-300">Ahorro promedio anual</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-400 mb-2">16 años</div>
              <p className="text-slate-300">Experiencia comprobada</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
