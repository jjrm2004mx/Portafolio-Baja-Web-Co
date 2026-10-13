import { AbogadoHeroSection } from '@/components/abogado/HeroSection'
import { ServicesGrid } from '@/components/abogado/ServicesGrid'
import { BenefitsSection } from '@/components/abogado/BenefitsSection'
import { ProcessSection } from '@/components/abogado/ProcessSection'
import { TestimonialSection } from '@/components/abogado/TestimonialSection'
import { FaqSection } from '@/components/abogado/FaqSection'
import { CtaSection } from '@/components/abogado/CtaSection'

export function AbogadoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <AbogadoHeroSection />

      {/* Services Section */}
      <ServicesGrid />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* FAQs Section */}
      <FaqSection />

      {/* Final CTA Section */}
      <CtaSection />

      {/* Footer with Demo Notice */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="mb-2">
            <strong className="text-white">Ejemplo Comercial de Demostración</strong>
          </p>
          <p>
            Esta landing page es un ejemplo del portafolio de Baja Web Co. Todos los datos personales, números de contacto y testimonios 
            son ficticios y solo con fines de demostración.
          </p>
          <p className="mt-4 text-xs">
            © 2026 Baja Web Co. | Portafolio de Servicios Profesionales
          </p>
        </div>
      </footer>
    </div>
  )
}
