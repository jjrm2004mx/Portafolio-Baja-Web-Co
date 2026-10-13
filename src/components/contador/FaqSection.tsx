import { useState } from 'react'
import { Container } from '@/components/shared/Container'

const FAQ_ITEMS = [
  {
    question: '¿Cuál es el costo de los servicios?',
    answer:
      'Nuestros planes son personalizados y comienzan desde $2,500 mensuales para PYMES. Ofrecemos opciones mensuales, trimestrales y anuales con descuentos. Agenda una consulta gratuita para recibir una propuesta adaptada a tu empresa.',
  },
  {
    question: '¿Necesito documentación especial para comenzar?',
    answer:
      'No, nosotros nos encargamos de recopilar todo. En la primera consulta te explicamos exactamente qué necesitamos y proporcionamos una guía de documentos. Todo el proceso es simple y asesorado paso a paso.',
  },
  {
    question: '¿Cómo acceso mis reportes y documentos?',
    answer:
      'Recibirás un portal seguro con acceso 24/7 a todos tus reportes, facturas y documentación fiscal. Además, te enviaremos resúmenes mensuales por correo y podrás contactarnos para consultas específicas.',
  },
  {
    question: '¿Qué pasa si cambio mi régimen fiscal o situación empresarial?',
    answer:
      'Nos encargamos de cualquier cambio sin costo adicional. Avísanos inmediatamente y realizaremos los ajustes necesarios. Tu plan se adapta dinámicamente a los cambios que enfrentes.',
  },
  {
    question: '¿Ofrecen servicio de urgencias o atención rápida?',
    answer:
      'Sí, contamos con un servicio prioritario. Contacta directamente a tu asesor asignado por WhatsApp y resolveremos tu consulta en máximo 24 horas, incluso en fines de semana.',
  },
  {
    question: '¿Son seguros mis datos contables y fiscales?',
    answer:
      'Empleamos encriptación de nivel bancario y almacenamiento redundante. Cumplimos con todas las normas de protección de datos y confidencialidad. Tu información está protegida bajo nuestras políticas corporativas y legales.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section heading */}
        <div className="mb-16 text-center">
          <h2 className="text-h2 font-bold text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6" />
          <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre procesos, precios y cómo trabajamos
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-amber-400 transition-colors duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-amber-50 transition-colors duration-300"
              >
                <span className="text-h6 text-slate-900 font-semibold text-left">
                  {item.question}
                </span>
                <span
                  className={`text-2xl text-amber-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <p className="text-body-sm text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
