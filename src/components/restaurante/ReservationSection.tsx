import { Container } from '@/components/shared/Container'

export function ReservationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-red-50 to-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 text-center">
            <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-4">
              Reserva Tu Mesa
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6" />
            <p className="font-sans text-body-lg text-neutral-600">
              Disponibilidad limitada. Te recomendamos reservar con anticipación.
            </p>
          </div>

          {/* Reservation form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <form className="space-y-6">
              {/* Row 1: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-red-700 mb-2 font-sans">
                    Fecha
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-red-700 mb-2 font-sans">
                    Hora
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  />
                </div>
              </div>

              {/* Row 2: Party Size & Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-red-700 mb-2 font-sans">
                    Cantidad de Personas
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 font-sans">
                    <option>1 persona</option>
                    <option>2 personas</option>
                    <option>3 personas</option>
                    <option>4 personas</option>
                    <option>5-6 personas</option>
                    <option>7+ personas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-600 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Row 3: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-navy-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-600 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-navy-600 mb-2">
                  Notas Especiales (Alergias, preferencias, etc.)
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos sobre restricciones dietéticas o preferencias especiales..."
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Reservar Mesa
              </button>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="text-center">
            <p className="text-neutral-600 mb-4">
              ¿Prefieres hablar directamente?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1555123456" className="text-orange-600 font-bold hover:text-orange-700">
                📞 Llamar: +1 (555) 123-4567
              </a>
              <a href="https://wa.me/1555123456" className="text-green-600 font-bold hover:text-green-700">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
