import { Container } from '@/components/shared/Container'
import { CONTACTO_BARBERIA } from '@/config/barberia.config'

export function BarberiaMasterSection() {
  const whatsappUrl = `https://wa.me/${CONTACTO_BARBERIA.whatsapp.replace(/[^0-9]/g, '')}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1C1917] via-[#44403C] to-[#1C1917] text-white py-20 md:py-32">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A16207] rounded-full opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A16207] rounded-full opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Cormorant' }}>
            Vive la Experiencia de una Barbería de Lujo
          </h2>

          {/* Description */}
          <p className="text-lg text-[#D1D5DB] mb-10 leading-relaxed" style={{ fontFamily: 'Montserrat' }}>
            Donde cada corte es una obra de arte. Donde cada cliente es tratado como la realeza. 
            Donde la tradición y la maestría se encuentran.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <button className="px-10 py-4 bg-[#A16207] hover:bg-[#92520a] text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ fontFamily: 'Montserrat' }}>
                Agendar Mi Cita
              </button>
            </a>
            <a href="tel:+525551234567" className="block">
              <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg border border-[#A16207]/30 transition-all duration-300" style={{ fontFamily: 'Montserrat' }}>
                +52 664 123 4567
              </button>
            </a>
          </div>

          {/* Benefits */}
          <div className="pt-8 border-t border-[#A16207]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#A16207] mb-2" style={{ fontFamily: 'Cormorant' }}>✓</div>
                <p style={{ fontFamily: 'Montserrat' }}>Especialistas Certificados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#A16207] mb-2" style={{ fontFamily: 'Cormorant' }}>✓</div>
                <p style={{ fontFamily: 'Montserrat' }}>Materiales Premium</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#A16207] mb-2" style={{ fontFamily: 'Cormorant' }}>✓</div>
                <p style={{ fontFamily: 'Montserrat' }}>Atmósfera Relajante</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
