import { Container } from '@/components/shared/Container'

export function NewsletterCta() {
  return (
    <section className="py-24 bg-gradient-to-r from-red-900 via-red-800 to-neutral-900 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold mb-6">
            Descubre Nuestras Novedades
          </h2>
          <p className="font-sans text-body-lg sm:text-xl text-neutral-300 mb-10">
            Suscríbete a nuestro newsletter para conocer nuevos platos, eventos especiales y promociones exclusivas.
          </p>

          {/* Newsletter form */}
          <form className="flex flex-col sm:flex-row gap-3 mb-8 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-lg text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>

          {/* Social links */}
          <div className="mb-8">
            <p className="text-sm text-neutral-400 mb-4">Síguenos en redes sociales</p>
            <div className="flex gap-6 justify-center">
              <a
                href="#"
                className="text-red-400 hover:text-red-300 text-2xl transition-colors"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-2xl transition-colors"
                title="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-red-300 text-2xl transition-colors"
                title="YouTube"
              >
                ▶️
              </a>
              <a
                href="#"
                className="text-sky-400 hover:text-sky-300 text-2xl transition-colors"
                title="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="pt-8 border-t border-white/20">
            <a href="#reservation">
              <button className="px-8 py-4 bg-white text-red-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                Reserva Tu Mesa Ahora
              </button>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-500 mt-8">
            © 2026 Gourmet Restaurant. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio
          </p>
        </div>
      </Container>
    </section>
  )
}
