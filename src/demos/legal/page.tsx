import HeroSection from '@/components/legal/HeroSection';
import PracticeAreas from '@/components/legal/PracticeAreas';
import AttorneyProfiles from '@/components/legal/AttorneyProfiles';
import CaseResults from '@/components/legal/CaseResults';
import Testimonials from '@/components/legal/Testimonials';
import ConsultationBooking from '@/components/legal/ConsultationBooking';
import { Scale } from 'lucide-react';

export default function LegalPage() {
  return (
    <main className="w-full bg-white">
      {/* Sección 1: Hero navy con overlay e imagen de fondo */}
      <HeroSection />

      {/* Sección 2: Vitrina de áreas de práctica */}
      <PracticeAreas />

      {/* Sección 3: Perfiles de abogados */}
      <AttorneyProfiles />

      {/* Sección 4: Resultados de casos */}
      <CaseResults />

      {/* Sección 5: Testimonios y reconocimientos */}
      <Testimonials />

      {/* Sección 6: Reserva de consulta */}
      <ConsultationBooking />

      {/* Footer navy */}
      <footer className="bg-[#0A2342] text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-[#C9A227]" />
                <div>
                  <span className="text-xl font-semibold" style={{ fontFamily: 'Lora' }}>Sterling &amp; Asociados</span>
                  <div className="text-xs text-white/60 tracking-wider">ABOGADOS</div>
                </div>
              </div>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>
                Brindando representación legal excepcional por más de 30 años. Comprometidos con la justicia,
                dedicados a nuestros clientes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]" style={{ fontFamily: 'IBM Plex Sans' }}>Áreas de Práctica</h4>
              <ul className="space-y-3 text-sm text-white/70" style={{ fontFamily: 'IBM Plex Sans' }}>
                <li>Lesiones Personales</li>
                <li>Derecho Corporativo</li>
                <li>Derecho Familiar</li>
                <li>Defensa Penal</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]" style={{ fontFamily: 'IBM Plex Sans' }}>Nuestro Despacho</h4>
              <ul className="space-y-3 text-sm text-white/70" style={{ fontFamily: 'IBM Plex Sans' }}>
                <li>Quiénes Somos</li>
                <li>Nuestros Abogados</li>
                <li>Resultados de Casos</li>
                <li>Testimonios</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#C9A227]" style={{ fontFamily: 'IBM Plex Sans' }}>¿Necesitas Ayuda Legal?</h4>
              <div className="p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-white/90 mb-2" style={{ fontFamily: 'IBM Plex Sans' }}>Llámanos ahora</p>
                <a href="tel:+6642183521" className="text-[#C9A227] font-semibold">(55) 1234-5678</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60" style={{ fontFamily: 'IBM Plex Sans' }}>
            © 2026 Sterling &amp; Asociados. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
