import HeroSection from '../../components/estudio2/HeroSection';
import FeaturedProject from '../../components/estudio2/FeaturedProject';
import ProjectGallery from '../../components/estudio2/ProjectGallery';
import ProcessSection from '../../components/estudio2/ProcessSection';
import Testimonials from '../../components/estudio2/Testimonials';
import FinalCTA from '../../components/estudio2/FinalCTA';

export default function Estudio2Page() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedProject />
      <ProjectGallery />
      <ProcessSection />
      <Testimonials />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/brand/logo/logo-primary.png" alt="BAJA WEB CO." className="w-10 h-10" />
            <span className="text-navy-600 font-bold font-display">
              BAJA WEB CO. <span className="text-cyan-600">Estudio</span>
            </span>
          </div>
          <p className="text-neutral-500 text-xs font-sans">
            © {new Date().getFullYear()} BAJA WEB CO. Todos los derechos reservados. Presencia digital para negocios.
          </p>
        </div>
      </footer>
    </div>
  );
}
