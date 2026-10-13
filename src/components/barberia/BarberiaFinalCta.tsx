import { Container } from '@/components/shared/Container'

export function BarberiaFinalCta() {
  return (
    <section className="py-24 bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold mb-6">
            ¡Únete a Nuestra Comunidad!
          </h2>
          <p className="font-sans text-body-lg sm:text-xl text-rose-100 mb-10">
            Más de 500 clientes confían en nosotros cada mes. Sé parte de la
            experiencia premium de barbería artesanal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-lavender-500 hover:bg-lavender-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              Reservar Mi Primera Cita
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all">
              Seguir en Instagram
            </button>
          </div>

          {/* Promo */}
          <div className="bg-lavender-500/20 border border-lavender-500/50 rounded-lg p-4">
            <p className="text-sm">
              <span className="font-bold text-lavender-200">🎁 Promo Especial:</span>{' '}
              15% OFF en tu primera cita. Código: FIRST15
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
