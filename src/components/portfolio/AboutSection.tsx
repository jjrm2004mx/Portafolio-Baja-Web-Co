import { Container } from '@/components/shared/Container'
import { BRAND } from '@/config/brand.config'

export function AboutSection() {
  const valueIcons: Record<string, string> = {
    Calidad: '✨',
    Innovación: '💡',
    Confianza: '🤝',
  }

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white"
    >
      <Container>
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-h2 sm:text-5xl font-bold text-navy-900 mb-3">
            Sobre {BRAND.name}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-navy-600 to-cyan-600 mx-auto" />
        </div>

        {/* Mission statement */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-body-lg sm:text-xl text-neutral-700 leading-relaxed">
            {BRAND.mission}
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {BRAND.values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-neutral-50 hover:bg-cyan-50 transition-colors duration-300"
            >
              <div className="text-4xl mb-3">
                {valueIcons[value] || '🎯'}
              </div>
              <h3 className="text-h5 text-navy-600 font-semibold mb-2">
                {value}
              </h3>
              <p className="text-body-sm text-neutral-600">
                Fundamental en cada proyecto que desarrollamos
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { number: '4', label: 'Demostraciones' },
            { number: '∞', label: 'Posibilidades' },
            { number: '100%', label: 'Personalizado' },
            { number: '24/7', label: 'Disponibles' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl font-bold text-navy-600 mb-1">
                {stat.number}
              </div>
              <p className="text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
