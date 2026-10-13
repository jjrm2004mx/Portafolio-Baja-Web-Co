import { HeroSection } from '@/components/portfolio/HeroSection'
import { DemoGallerySection } from '@/components/portfolio/DemoGallerySection'
import { AboutSection } from '@/components/portfolio/AboutSection'

export function PortfolioPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <DemoGallerySection />
      <AboutSection />
    </div>
  )
}
