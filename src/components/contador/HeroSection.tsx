import { Award, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image + navy overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/95 via-[#1E3A8A]/85 to-[#1E3A8A]/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl">
          {/* Gold badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B45309]/15 border border-[#B45309]/40 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#B45309]" />
            <span className="text-[#B45309] text-sm font-semibold" style={{ fontFamily: 'IBM Plex Sans' }}>
              Más de 15 años de experiencia fiscal
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Lora' }}
          >
            Asesoría Contable y Fiscal en la Que Puedes Confiar
          </h1>
          <div className="w-16 h-1 bg-[#B45309] mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
            Con 15 años de experiencia en contabilidad, auditoría y asesoría fiscal, la CPA Laura Morales Gutiérrez ha ayudado a cientos de PYMES 
            a optimizar sus finanzas, cumplir regulaciones y crecer de forma sostenible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            <button
              className="bg-[#B45309] hover:bg-[#92410E] text-white font-semibold py-3.5 px-7 rounded transition-colors cursor-pointer"
              style={{ fontFamily: 'IBM Plex Sans' }}
            >
              Agendar Asesoría Fiscal
            </button>
            <button
              className="bg-transparent text-white font-medium py-3.5 px-7 rounded border-2 border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
              style={{ fontFamily: 'IBM Plex Sans' }}
            >
              Ver Servicios
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#B45309] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold" style={{ fontFamily: 'IBM Plex Sans' }}>Certificaciones Profesionales</p>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>Contador Público Certificado, Cédula Profesional, Miembro IMCP</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#B45309] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold" style={{ fontFamily: 'IBM Plex Sans' }}>Especialización en Auditoría</p>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>Análisis profundo y cumplimiento normativo garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
