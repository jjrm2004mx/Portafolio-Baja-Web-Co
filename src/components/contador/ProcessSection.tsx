import { Container } from '@/components/shared/Container'

const PROCESS_STEPS = [
  {
    number: '1',
    icon: '📋',
    title: 'Diagnóstico Integral',
    description: 'Análisis profundo de tu situación fiscal, contable y financiera actual',
  },
  {
    number: '2',
    icon: '📝',
    title: 'Plan Personalizado',
    description: 'Estrategia fiscal 100% adaptada a tus objetivos y estructura empresarial',
  },
  {
    number: '3',
    icon: '⚙️',
    title: 'Implementación Inmediata',
    description: 'Ejecución de soluciones y optimizaciones dentro de 48 horas',
  },
  {
    number: '4',
    icon: '📊',
    title: 'Seguimiento Permanente',
    description: 'Reportes mensuales y ajustes según cambios normativos y operacionales',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-h2 font-bold text-slate-900 mb-4">
            Nuestro Proceso de Asesoría
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6" />
          <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
            Un enfoque estructurado, probado y transparente para optimizar tu gestión fiscal
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 -z-10" />

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-xl transition-all duration-300 border border-slate-200">
                {/* Step number circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-slate-900 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-h5 text-slate-900 font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
