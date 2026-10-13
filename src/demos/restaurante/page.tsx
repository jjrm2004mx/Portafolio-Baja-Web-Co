import { RestaurantHeroSection } from '@/components/restaurante/HeroSection'
import { RestauranteMenuSection } from '@/components/restaurante/MenuSection'
import { RestauranteSpecialsSection } from '@/components/restaurante/SpecialsSection'
import { RestauranteTestimonialsSection } from '@/components/restaurante/TestimonialsSection'
import { RestauranteCtaSection } from '@/components/restaurante/CtaSection'

export function RestaurantPage() {
  return (
    <main>
      <RestaurantHeroSection />
      <RestauranteMenuSection />
      <RestauranteSpecialsSection />
      <RestauranteTestimonialsSection />
      <RestauranteCtaSection />
    </main>
  )
}

export default RestaurantPage
