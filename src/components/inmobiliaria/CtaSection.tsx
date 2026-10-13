import { Container } from '@/components/shared/Container'
import { CONTACTO_INMOBILIARIA } from '@/config/inmobiliaria.config'

export function InmobiliariCtaSection() {
  const whatsappUrl = `https://wa.me/${CONTACTO_INMOBILIARIA.whatsapp.replace(/[^0-9]/g, '')}`

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-r from-[#0F766E] via-[#0369A1] to-[#0F766E] text-white py-16 md:py-24">
      {/* Glassmorphism overlay elements */}
      <div className="absolute inset-0 opacity-10 backdrop-blur-md"></div>

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Cinzel' }}>
            Comienza Tu Inversión Hoy
          </h2>

          {/* Description */}
          <p className="text-lg text-white/90 mb-10" style={{ fontFamily: 'Josefin Sans' }}>
            Consulta gratuita. Asesoría personalizada. Soluciones a tu medida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <button className="px-10 py-4 bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ fontFamily: 'Josefin Sans' }}>
                Agendar Consulta
              </button>
            </a>
            <a href="tel:+525551234567" className="block">
              <button className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-lg border border-white/50 transition-all duration-300" style={{ fontFamily: 'Josefin Sans' }}>
                Llamar Directamente
              </button>
            </a>
          </div>

          {/* Trust Elements */}
          <div className="pt-8 border-t border-white/20 space-y-3">
            <p style={{ fontFamily: 'Josefin Sans' }}>✓ Análisis completo sin compromiso</p>
            <p style={{ fontFamily: 'Josefin Sans' }}>✓ Opciones de financiamiento flexible</p>
            <p style={{ fontFamily: 'Josefin Sans' }}>✓ Acompañamiento integral en tu inversión</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
