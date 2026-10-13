import { BarberiHeroSection } from '@/components/barberia/HeroSection'
import { BarberyServicesGrid } from '@/components/barberia/ServicesGrid'
import { BarberyTeamSection } from '@/components/barberia/TeamSection'
import { BarberyGallerySection } from '@/components/barberia/GallerySection'
import { TestimonialSection } from '@/components/barberia/TestimonialSection'
import { BarberiCtaSection } from '@/components/barberia/CtaSection'

export function BarberyPage() {
  return (
    <main>
      <BarberiHeroSection />
      <BarberyServicesGrid />
      <BarberyTeamSection />
      <BarberyGallerySection />
      <TestimonialSection />
      <BarberiCtaSection />
    </main>
  )
}

export default BarberyPage
