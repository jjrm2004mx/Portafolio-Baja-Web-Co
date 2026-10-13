import { useState } from 'react'
import { Container } from '@/components/shared/Container'
import { FAQS } from '@/config/abogado.config'

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-[#F0F4F8]">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Lora' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Respuestas a las dudas más comunes sobre nuestros servicios legales
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#1B7A8A] transition-colors"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F0F4F8] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#003366] pr-4" style={{ fontFamily: 'Lora' }}>
                  {faq.pregunta}
                </h3>
                <span
                  className={`flex-shrink-0 text-2xl text-[#D4AF37] transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Answer */}
              {openIdx === idx && (
                <div className="px-6 pb-6 bg-blue-50/50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-white rounded-lg border-2 border-[#D4AF37] text-center">
          <h3 className="text-2xl font-bold text-[#003366] mb-3" style={{ fontFamily: 'Lora' }}>
            ¿Aún tienes dudas?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente. La consulta inicial es completamente gratuita.
          </p>
          <a href="#contacto" className="inline-block">
            <button className="px-8 py-3 bg-[#D4AF37] hover:bg-yellow-600 text-[#003366] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Agendar Consulta Gratuita
            </button>
          </a>
        </div>
      </Container>
    </section>
  )
}
