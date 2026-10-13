import { Container } from '@/components/shared/Container'
import { CONTACTO_BARBERIA } from '@/config/barberia.config'

export function BarberiCtaSection() {
  const whatsappUrl = `https://wa.me/${CONTACTO_BARBERIA.whatsapp.replace(/[^0-9]/g, '')}`

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1C1917] via-[#44403C] to-[#1C1917] text-white py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A16207] rounded-full opacity-5 blur-3xl"></div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Cormorant' }}>
            Tu Transformación Comienza Aquí
          </h2>

          {/* Description */}
          <p className="text-lg text-[#D1D5DB] mb-10" style={{ fontFamily: 'Montserrat' }}>
            Especialistas en el arte de la barbería. Cada cita es una experiencia de lujo y profesionalismo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <button className="px-10 py-4 bg-[#A16207] hover:bg-[#92520a] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105" style={{ fontFamily: 'Montserrat' }}>
                Agendar Ahora
              </button>
            </a>
            <a href="tel:+525551234567" className="block">
              <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-[#A16207]/30 transition-all duration-300" style={{ fontFamily: 'Montserrat' }}>
                Llamar Directamente
              </button>
            </a>
          </div>

          {/* Trust Elements */}
          <div className="pt-8 border-t border-[#A16207]/20 space-y-3">
            <p style={{ fontFamily: 'Montserrat' }}>✓ Consulta sin compromiso</p>
            <p style={{ fontFamily: 'Montserrat' }}>✓ Maestros certificados</p>
            <p style={{ fontFamily: 'Montserrat' }}>✓ Materiales premium importados</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
