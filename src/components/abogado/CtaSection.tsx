import { Container } from '@/components/shared/Container'
import { ABOGADO, CONTACTO } from '@/config/abogado.config'

export function CtaSection() {
  const whatsappUrl = `https://wa.me/${CONTACTO.whatsapp.replace(/[^0-9]/g, '')}?text=Hola%20Lic.%20${ABOGADO.nombre.split(' ')[1]},%20me%20gustaría%20agendar%20una%20consulta%20gratuita.`

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-[#1B7A8A] to-[#003366]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Lora' }}>
            Resolvamos tu Situación Legal Hoy
          </h2>

          {/* Subheading */}
          <p className="text-lg text-blue-100 mb-8">
            Consulta gratuita sin compromiso. Respuesta inmediata por WhatsApp.
          </p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] hover:bg-yellow-600 text-[#003366] font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                💬 WhatsApp - Contactar Ahora
              </button>
            </a>
            <a href={`tel:${CONTACTO.telefono}`} className="block">
              <button className="w-full sm:w-auto px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-lg border-2 border-white transition-all duration-300">
                ☎️ Llamar
              </button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <p className="text-blue-50 mb-3">
              <strong>Email:</strong> {CONTACTO.email}
            </p>
            <p className="text-blue-50 mb-3">
              <strong>Teléfono:</strong> {CONTACTO.telefono}
            </p>
            <p className="text-blue-50 mb-3">
              <strong>Horario:</strong> {CONTACTO.horario}
            </p>
            <p className="text-blue-50">
              <strong>Ubicación:</strong> {CONTACTO.direccion}
            </p>
          </div>

          {/* Response Time */}
          <p className="mt-8 text-blue-100 text-sm">
            ⏱️ Respuesta garantizada en menos de 1 hora. Disponible 24/7 por WhatsApp.
          </p>
        </div>
      </Container>
    </section>
  )
}
