import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    title: 'Ubicación de la Oficina',
    lines: ['Av. Reforma 500, Piso 12', 'Ciudad de México, CDMX 06600'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    lines: ['(55) 1234-5678', 'Disponible 24/7 para emergencias'],
  },
  {
    icon: Mail,
    title: 'Correo Electrónico',
    lines: ['contacto@sterlinglegal.mx', 'Respondemos en menos de 24 horas'],
  },
];

const officeHours = [
  { day: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM' },
  { day: 'Sábado', hours: '9:00 AM - 2:00 PM' },
  { day: 'Domingo', hours: 'Cerrado' },
];

export default function ConsultationBooking() {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: contact info */}
          <div>
            <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
              Ponte en Contacto
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#0A2342] font-bold" style={{ fontFamily: 'Lora' }}>
              Agenda tu Consulta Gratuita
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A227]"></div>
            <p className="text-lg text-[#5B6472] mt-6 mb-8" style={{ fontFamily: 'IBM Plex Sans' }}>
              Da el primer paso para resolver tu asunto legal. Nuestro equipo está listo para escuchar,
              asesorar y defender tus derechos. Contáctanos hoy para una consulta confidencial.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0A2342] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2342]" style={{ fontFamily: 'Lora' }}>{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-[#5B6472]" style={{ fontFamily: 'IBM Plex Sans' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Office hours */}
            <div className="mt-8 p-6 bg-white border border-[#E2DFD5] rounded-lg">
              <h4 className="font-semibold text-[#0A2342] mb-4 flex items-center gap-2" style={{ fontFamily: 'Lora' }}>
                <Clock className="w-5 h-5 text-[#C9A227]" />
                Horario de Oficina
              </h4>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>
                {officeHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-[#5B6472]">{item.day}</span>
                    <span className="text-[#0A2342] font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: consultation form */}
          <div className="bg-white border border-[#E2DFD5] rounded-lg p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#0A2342] mb-6" style={{ fontFamily: 'Lora' }}>
              Solicita una Consulta
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>Nombre *</label>
                  <input
                    type="text"
                    placeholder="Juan"
                    className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>Apellido *</label>
                  <input
                    type="text"
                    placeholder="Pérez"
                    className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] focus:outline-none focus:border-[#C9A227] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>Correo Electrónico *</label>
                <input
                  type="email"
                  placeholder="juan@ejemplo.com"
                  className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] focus:outline-none focus:border-[#C9A227] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>Número de Teléfono *</label>
                <input
                  type="tel"
                  placeholder="(55) 1234-5678"
                  className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] focus:outline-none focus:border-[#C9A227] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>Área de Práctica *</label>
                <select className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] focus:outline-none focus:border-[#C9A227] transition-colors cursor-pointer">
                  <option value="">Selecciona un área de práctica</option>
                  <option value="personal-injury">Lesiones Personales</option>
                  <option value="corporate">Derecho Corporativo</option>
                  <option value="family">Derecho Familiar</option>
                  <option value="criminal">Defensa Penal</option>
                  <option value="estate">Planeación Patrimonial</option>
                  <option value="employment">Derecho Laboral</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0A2342] mb-1.5" style={{ fontFamily: 'IBM Plex Sans' }}>
                  Breve Descripción de tu Caso
                </label>
                <textarea
                  placeholder="Por favor, describe brevemente tu asunto legal..."
                  className="w-full border border-[#E2DFD5] rounded px-4 py-2.5 text-sm text-[#0A2342] min-h-[120px] resize-none focus:outline-none focus:border-[#C9A227] transition-colors"
                ></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacidad" className="mt-1 cursor-pointer" />
                <label htmlFor="privacidad" className="text-sm text-[#5B6472] cursor-pointer" style={{ fontFamily: 'IBM Plex Sans' }}>
                  Acepto la política de privacidad y consiento ser contactado respecto a mi solicitud.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C9A227] hover:bg-[#B8911E] text-[#0A2342] font-semibold py-3.5 rounded transition-colors cursor-pointer"
                style={{ fontFamily: 'IBM Plex Sans' }}
              >
                Enviar Solicitud
              </button>
              <p className="text-xs text-center text-[#94A0AD]" style={{ fontFamily: 'IBM Plex Sans' }}>
                Tu información es confidencial y está protegida por el secreto profesional abogado-cliente.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
