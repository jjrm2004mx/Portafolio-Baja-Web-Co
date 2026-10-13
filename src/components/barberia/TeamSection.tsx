import { Container } from '@/components/shared/Container'
import { EQUIPO_BARBERIA } from '@/config/barberia.config'

export function BarberyTeamSection() {
  return (
    <section className="bg-[#1C1917] py-16 md:py-24 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cormorant' }}>
            Nuestro Equipo de Maestros
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat' }}>
            Especialistas certificados dedicados a tu transformación
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EQUIPO_BARBERIA.map((barbero, idx) => (
            <div
              key={barbero.id}
              className="group"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.15}s both`,
              }}
            >
              {/* Glass Morphism Card */}
              <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#A16207]/50 p-8 transition-all duration-300 group-hover:bg-white/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[#A16207] transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Avatar Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#A16207] to-[#7a3f01] rounded-full mb-6 flex items-center justify-center text-white text-3xl">
                    {barbero.nombre.charAt(0)}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Cormorant' }}>
                    {barbero.nombre}
                  </h3>

                  {/* Role */}
                  <p className="text-[#A16207] font-semibold mb-2" style={{ fontFamily: 'Montserrat' }}>
                    {barbero.rol}
                  </p>

                  {/* Specialty */}
                  <p className="text-[#D1D5DB]" style={{ fontFamily: 'Montserrat' }}>
                    {barbero.especialidad}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

