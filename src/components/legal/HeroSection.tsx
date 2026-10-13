import { Award, Scale, ShieldCheck, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image + navy overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/95 via-[#0A2342]/85 to-[#0A2342]/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl">
          {/* Gold badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/15 border border-[#C9A227]/40 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#C9A227]" />
            <span className="text-[#C9A227] text-sm font-semibold" style={{ fontFamily: 'IBM Plex Sans' }}>
              Más de 5,000 clientes confían en nosotros
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Lora' }}
          >
            Asesoría Legal Experta en la Que Puedes Confiar
          </h1>
          <div className="w-16 h-1 bg-[#C9A227] mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed" style={{ fontFamily: 'IBM Plex Sans' }}>
            Por más de 30 años, Sterling &amp; Asociados ha brindado representación legal de excelencia.
            Defendemos tus derechos con dedicación, experiencia y un compromiso inquebrantable con la justicia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12">
            <button
              className="bg-[#C9A227] hover:bg-[#B8911E] text-[#0A2342] font-semibold py-3.5 px-7 rounded transition-colors cursor-pointer"
              style={{ fontFamily: 'IBM Plex Sans' }}
            >
              Agendar Consulta Gratuita
            </button>
            <button
              className="bg-transparent text-white font-medium py-3.5 px-7 rounded border-2 border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
              style={{ fontFamily: 'IBM Plex Sans' }}
            >
              Ver Nuestros Resultados
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {[
              { icon: TrendingUp, value: '$500M+', label: 'Recuperados para clientes' },
              { icon: Scale, value: '98%', label: 'Tasa de éxito' },
              { icon: ShieldCheck, value: '30+', label: 'Años de experiencia' },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Lora' }}>{stat.value}</div>
                  <div className="text-white/70 text-sm" style={{ fontFamily: 'IBM Plex Sans' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
