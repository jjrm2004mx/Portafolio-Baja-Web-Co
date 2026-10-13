import { Container } from '@/components/shared/Container'

export function RestaurantLocationSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="h-96 bg-neutral-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601!3d40.71282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0xce36da7aafdd4caf!2sGourmet%20Restaurant!5e0!3m2!1ses!2sus!4v1234567890"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-8">
              Ubicación & Horarios
            </h2>

            {/* Address */}
            <div className="mb-8">
              <h3 className="font-serif text-h5 text-red-900 font-semibold mb-3">
                📍 Dirección
              </h3>
              <p className="font-sans text-body-lg text-red-700">
                Avenida Gastronómica 456, Centro Comercial Gourmet
                <br />
                Ciudad, CP 12345
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="font-serif text-h5 text-red-900 font-semibold mb-3">
                📞 Contacto
              </h3>
              <p className="font-sans text-body-lg text-red-700 mb-2">
                Teléfono: <span className="font-bold text-red-600">+1 (555) 123-4567</span>
              </p>
              <p className="font-sans text-body-lg text-red-700">
                WhatsApp: <span className="font-bold text-green-600">+1 (555) 123-4567</span>
              </p>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="font-serif text-h5 text-red-900 font-semibold mb-4">
                🕐 Horarios
              </h3>
              <div className="space-y-2 font-sans text-body-sm">
                <div className="flex justify-between">
                  <span className="text-red-700">Martes - Jueves:</span>
                  <span className="font-semibold text-red-900">12:00 - 15:00 | 19:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Viernes - Sábado:</span>
                  <span className="font-semibold text-red-900">12:00 - 15:00 | 19:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Domingo:</span>
                  <span className="font-semibold text-red-900">12:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-700">Lunes:</span>
                  <span className="font-semibold text-red-600">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Info badges */}
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-sm text-neutral-700">
                ✅ <span className="font-semibold">Estacionamiento disponible</span>
              </p>
              <p className="text-sm text-neutral-700">
                ✅ <span className="font-semibold">Acceso para silla de ruedas</span>
              </p>
              <p className="text-sm text-neutral-700">
                ✅ <span className="font-semibold">Climatización total</span>
              </p>
            </div>

            {/* CTA Button */}
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Reservar Ahora
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
