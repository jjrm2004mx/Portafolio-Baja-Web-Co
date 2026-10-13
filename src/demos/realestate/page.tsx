import HeroSection from '../../components/realestate/HeroSection';
import FeaturedListings from '../../components/realestate/FeaturedListings';
import VirtualTourPreview from '../../components/realestate/VirtualTourPreview';
import WhyChooseUs from '../../components/realestate/WhyChooseUs';
import AgentProfiles from '../../components/realestate/AgentProfiles';
import ContactSection from '../../components/realestate/ContactSection';

export default function LuxeEstatePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedListings />
      <VirtualTourPreview />
      <WhyChooseUs />
      <AgentProfiles />
      <ContactSection />

      {/* Footer */}
      <footer className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="lg:col-span-2">
              <span className="text-2xl font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
                LUXE<span className="text-[#C9A227]">ESTATE</span>
              </span>
              <p className="text-white/60 mt-4 mb-6 max-w-xs" style={{ fontFamily: 'Raleway' }}>
                Tu socio de confianza en bienes raíces de lujo. Descubre propiedades excepcionales en las
                ubicaciones más prestigiosas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Propiedades</h4>
              <ul className="space-y-2 text-white/60 text-sm" style={{ fontFamily: 'Raleway' }}>
                <li>Villas de Lujo</li>
                <li>Penthouses</li>
                <li>Residencias</li>
                <li>Inversión</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Compañía</h4>
              <ul className="space-y-2 text-white/60 text-sm" style={{ fontFamily: 'Raleway' }}>
                <li>Nuestro Equipo</li>
                <li>Recorridos Virtuales</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Contacto</h4>
              <ul className="space-y-2 text-white/60 text-sm" style={{ fontFamily: 'Raleway' }}>
                <li>+52 (33) 1234-5678</li>
                <li>contacto@luxeestate.mx</li>
                <li>Guadalajara, Jal.</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm" style={{ fontFamily: 'Raleway' }}>
            © {new Date().getFullYear()} LuxeEstate. Todos los derechos reservados. Demo con fines ilustrativos.
          </div>
        </div>
      </footer>
    </div>
  );
}
