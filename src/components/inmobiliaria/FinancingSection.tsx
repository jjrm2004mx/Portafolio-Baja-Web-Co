import { Container } from '@/components/shared/Container'
import { MortgageCalculator } from './MortgageCalculator'

export function FinancingSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold text-teal-900 mb-4">
            Opciones de Financiamiento
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-700 to-blue-600 mx-auto mb-6" />
          <p className="font-sans text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Trabaja con nuestros socios financieros para obtener las mejores tasas y términos personalizados.
          </p>
        </div>

        {/* Rates Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { term: 'Tasa 15 Años', rate: '6.2%', down: '20%' },
            { term: 'Tasa 20 Años', rate: '6.5%', down: '15%' },
            { term: 'Tasa 30 Años', rate: '6.8%', down: '10%' },
          ].map((item, index) => (
            <div
              key={index}
              className="font-sans text-center p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200"
            >
              <p className="text-neutral-600 mb-2 font-semibold">{item.term}</p>
              <p className="font-serif text-4xl font-bold text-blue-600 mb-2">{item.rate}</p>
              <p className="text-sm text-neutral-600">Desde {item.down} de pago inicial</p>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="mb-12">
          <MortgageCalculator />
        </div>

        {/* Benefits Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-h4 font-bold text-teal-900 mb-4">Sin Costos Ocultos</h3>
            <ul className="font-sans space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Cotizaciones transparentes y verificables</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Sin comisiones de originación adicionales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Cierre de transacción entre 21-30 días</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Soporte dedicado a lo largo del proceso</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-h4 font-bold text-navy-900 mb-4">Opciones Flexibles</h3>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Pago inicial desde 0% (programas especiales)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Refinanciamiento y préstamos sobre capital</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Tasas fijas y variables disponibles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Aprobación previa en menos de 24 horas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            Obtener Precalificación Ahora
          </button>
        </div>
      </Container>
    </section>
  )
}
