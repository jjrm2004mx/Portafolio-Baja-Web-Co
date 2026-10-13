import { Container } from '@/components/shared/Container'

export function ConsultationCta() {
  return (
    <section className="py-24 bg-gradient-to-r from-teal-900 via-blue-800 to-neutral-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-h2 sm:text-5xl font-bold mb-6">
            Agendar Consulta Gratuita
          </h2>
          <p className="font-sans text-body-lg sm:text-xl text-neutral-300 mb-12">
            Habla con uno de nuestros expertos para diseñar una estrategia inmobiliaria personalizada según tus objetivos.
          </p>

          {/* Form */}
          <form className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="font-sans block text-sm font-semibold text-neutral-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="font-sans w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-sans block text-sm font-semibold text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="font-sans w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50"
                />
              </div>
            </div>

            {/* Phone & Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-sans block text-sm font-semibold text-neutral-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="font-sans w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50"
                />
              </div>

              <div>
                <label className="font-sans block text-sm font-semibold text-neutral-300 mb-2">
                  Interés
                </label>
                <select className="font-sans w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50">
                  <option value="buy" className="bg-navy-900">Comprar Propiedad</option>
                  <option value="sell" className="bg-navy-900">Vender Propiedad</option>
                  <option value="invest" className="bg-navy-900">Invertir</option>
                  <option value="other" className="bg-navy-900">Otro</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tus objetivos inmobiliarios..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-neutral-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-300/50 resize-none"
              />
            </div>

            {/* Checkbox */}
            <div className="mb-8 flex items-center gap-2">
              <input
                type="checkbox"
                id="consent"
                className="w-4 h-4 accent-amber-400"
              />
              <label htmlFor="consent" className="text-xs text-neutral-300">
                Acepto la política de privacidad y recibir comunicaciones
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 mb-6"
            >
              Agendar Consulta Gratuita
            </button>

            {/* Alternative */}
            <p className="text-sm text-neutral-400">
              ¿Prefieres hablar ahora?{' '}
              <a href="tel:+1555123456" className="text-amber-300 hover:text-amber-200 font-bold">
                Llamar
              </a>{' '}
              o{' '}
              <a href="https://wa.me/1555123456" className="text-amber-300 hover:text-amber-200 font-bold">
                WhatsApp
              </a>
            </p>
          </form>

          {/* Info */}
          <div className="mt-12 text-neutral-300">
            <p className="text-sm mb-4">⏱️ Consulta de 30 minutos • 🎯 Evaluación Personalizada • 📋 Sin Compromiso</p>
            <p className="text-xs text-neutral-400">Responderemos en menos de 2 horas</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
