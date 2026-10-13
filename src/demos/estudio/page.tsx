import HeroSection from '../../components/estudio/HeroSection';
import FeaturedProject from '../../components/estudio/FeaturedProject';
import ProjectGallery from '../../components/estudio/ProjectGallery';
import ProcessSection from '../../components/estudio/ProcessSection';
import Testimonials from '../../components/estudio/Testimonials';
import FinalCTA from '../../components/estudio/FinalCTA';

export default function EstudioPage() {
  return (
    <div className="bg-[#0B0B0F]">
      <HeroSection />
      <FeaturedProject />
      <ProjectGallery />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-medium" style={{ fontFamily: 'Lora, serif' }}>
            BAJA WEB CO. <span className="text-[#C9A55C]">Estudio</span>
          </span>
          <p className="text-[#A3A3AD] text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © {new Date().getFullYear()} BAJA WEB CO. Todos los derechos reservados. Demo con fines ilustrativos.
          </p>
        </div>
      </footer>
    </div>
  );
}
