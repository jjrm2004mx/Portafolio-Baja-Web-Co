import { RealEstateHeroSection as InmobiliariHeroSection } from '@/components/inmobiliaria/HeroSection'
import { FeaturedPropertiesSection as InmobiliariPropertiesSection } from '@/components/inmobiliaria/FeaturedPropertyCard'
import { FinancingSection as InmobiliariFinancingSection } from '@/components/inmobiliaria/FinancingSection'
import { InmobiliariTestimonialsSection } from '@/components/inmobiliaria/TestimonialsSection'
import { InmobiliariCtaSection } from '@/components/inmobiliaria/CtaSection'

export function RealEstatePage() {
  return (
    <main>
      <InmobiliariHeroSection />
      <InmobiliariPropertiesSection />
      <InmobiliariFinancingSection />
      <InmobiliariTestimonialsSection />
      <InmobiliariCtaSection />
    </main>
  )
}

export default RealEstatePage
