import { Container } from '@/components/shared/Container'

export function LocationSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="h-96 bg-rose-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0xce36da7aafdd4caf!2sNew%20York%20City%20Barbershop!5e0!3m2!1ses!2sus!4v1234567890"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="font-serif text-h2 sm:text-5xl font-bold text-rose-900 mb-8">
              Ubicación & Horarios
            </h2>

            {/* Address */}
            <div className="mb-8">
              <h3 className="font-serif text-h5 text-rose-900 font-semibold mb-3">
                📍 Dirección
              </h3>
              <p className="font-sans text-body-lg text-rose-700">
                Calle Principal 123, Centro Comercial
                <br />
                Tijuana, BC 22000
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="font-serif text-h5 text-rose-900 font-semibold mb-3">
                📞 Contacto
              </h3>
              <p className="font-sans text-body-lg text-rose-700 mb-2">
                Teléfono: <span className="font-bold text-lavender-500">+1 (555) 123-4567</span>
              </p>
              <p className="font-sans text-body-lg text-rose-700">
                WhatsApp: <span className="font-bold text-green-600">+1 (555) 123-4567</span>
              </p>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="font-serif text-h5 text-rose-900 font-semibold mb-4">
                🕐 Horarios
              </h3>
              <div className="space-y-2 font-sans text-body-sm">
                <div className="flex justify-between">
                  <span className="text-rose-700">Lunes - Viernes:</span>
                  <span className="font-semibold text-rose-900">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-700">Sábado:</span>
                  <span className="font-semibold text-rose-900">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rose-700">Domingo:</span>
                  <span className="font-semibold text-lavender-500">Cerrado</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-lavender-500 hover:bg-lavender-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Reservar Cita
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
