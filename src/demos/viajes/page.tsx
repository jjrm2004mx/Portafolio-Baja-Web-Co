import HeroSection from '@/components/viajes/HeroSection';
import DestinationShowcase from '@/components/viajes/DestinationShowcase';
import FeaturesSection from '@/components/viajes/FeaturesSection';
import BookingPreview from '@/components/viajes/BookingPreview';
import Testimonials from '@/components/viajes/Testimonials';
import PlannerCTA from '@/components/viajes/PlannerCTA';

export default function ViajesPage() {
  return (
    <main className="w-full bg-white">
      {/* Sección 1: Hero con gradientes aurora + buscador de viaje */}
      <HeroSection />

      {/* Sección 2: Vitrina de destinos con colores vibrantes por destino */}
      <DestinationShowcase />

      {/* Sección 3: Por qué elegirnos */}
      <FeaturesSection />

      {/* Sección 4: Vista previa de reserva / checkout */}
      <BookingPreview />

      {/* Sección 5: Testimonios de viajeros */}
      <Testimonials />

      {/* Sección 6: CTA del planificador de viajes */}
      <PlannerCTA />
    </main>
  );
}
