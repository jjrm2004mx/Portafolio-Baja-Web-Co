import { Container } from '@/components/shared/Container'
import { useState } from 'react'

export function RestauranteCtaSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log('Reservation submitted:', formData)
    alert('\u00a1Gracias! Confirmaremos tu reservación en breve.')
    setFormData({ name: '', phone: '', date: '', time: '', partySize: '2', message: '' })
  }

  return (
    <section id="reservation" className="bg-stone-100 py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-4" style={{ fontFamily: 'Playfair Display SC, serif' }}>
            Reserva Tu Mesa
          </h2>
          <p className="text-xl text-stone-600">
            Únete a nosotros para una experiencia gastronómica inolvidable. Reserva tu mesa hoy y déjanos encargarnos del resto.
          </p>
          <p className="text-stone-600 mt-2">
            Para grupos de más de 8 personas, llámanos directamente.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Teléfono</h4>
                    <a href="tel:+525551234567" className="text-red-600 hover:text-red-700 font-semibold">
                      +52 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Correo Electrónico</h4>
                    <a href="mailto:reservas@elrestaurante.com.mx" className="text-red-600 hover:text-red-700 font-semibold">
                      reservas@elrestaurante.com.mx
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Dirección</h4>
                    <p className="text-stone-600">Ave. Principal 456, Tijuana, Baja California 22000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h4 className="text-xl font-bold text-stone-900 mb-4">Horarios de Atención</h4>
              <div className="space-y-3 text-stone-600">
                <div className="flex justify-between">
                  <span>Lunes - Jueves</span>
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Viernes - Sábado</span>
                  <span className="font-semibold">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Tu teléfono"
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">Fecha</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-900 mb-2">Hora</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-2">Número de Personas</label>
                <select
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'Persona' : 'Personas'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-900 mb-2">Peticiones Especiales</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿Alguna solicitud especial o restricción dietética?"
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300"
              >
                Reservar Ahora
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
