import { Container } from '@/components/shared/Container'

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-bold mb-6">
            ¿Listo para optimizar tu fiscalidad?
          </h2>
          <p className="text-body-lg text-slate-300 mb-10 leading-relaxed">
            Nuestra primera consulta es completamente gratuita y sin compromiso.
            Conoce nuestro equipo, comenta tu situación actual y descubre cómo
            podemos ayudarte a reducir impuestos legalmente.
          </p>
          
          {/* CTAs - Primary (Gold) + Secondary */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://wa.me/+525551234567" target="_blank" rel="noopener noreferrer">
              <button className="w-full px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Agendar Consulta Gratuita
              </button>
            </a>
            <a href="tel:+525551234567">
              <button className="w-full px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold rounded-lg border border-white/30 transition-all duration-300">
                Llamar Ahora
              </button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="space-y-4 text-sm text-slate-300">
            <p className="flex items-center justify-center gap-2">
              <span className="text-amber-400 text-lg">✓</span>
              Primera consulta sin costo
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-amber-400 text-lg">✓</span>
              Respuesta garantizada en máximo 24 horas
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-amber-400 text-lg">✓</span>
              Datos confidenciales y protegidos bajo normativa legal
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
