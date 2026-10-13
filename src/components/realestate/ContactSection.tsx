import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-[#C9A227] uppercase tracking-wider" style={{ fontFamily: 'Raleway' }}>
              Contáctanos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111827] mt-2 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              ¿Listo para Encontrar tu
              <br />
              <span className="text-[#C9A227]">Propiedad Soñada?</span>
            </h2>
            <p className="text-lg text-[#6B7280] mb-8" style={{ fontFamily: 'Raleway' }}>
              Agenda una consulta con uno de nuestros agentes expertos. Te ayudaremos a navegar el mercado
              y encontrar la propiedad perfecta que se adapte a tu estilo de vida y metas de inversión.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#111827] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[#111827]" style={{ fontFamily: 'Raleway' }}>+52 (33) 1234-5678</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#111827] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[#111827]" style={{ fontFamily: 'Raleway' }}>contacto@luxeestate.mx</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#111827]/5 flex items-center justify-center text-[#111827] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[#111827]" style={{ fontFamily: 'Raleway' }}>Av. Américas 1500, Guadalajara, Jal.</span>
              </div>
            </div>
          </div>

          {/* Glassmorphism form card */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-[#111827] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              Agenda una Consulta
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#E7E3DA] bg-white/70 focus:outline-none focus:border-[#C9A227] transition-colors"
                    placeholder="Juan"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#6B7280] mb-2">Apellido</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#E7E3DA] bg-white/70 focus:outline-none focus:border-[#C9A227] transition-colors"
                    placeholder="Pérez"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-[#6B7280] mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#E7E3DA] bg-white/70 focus:outline-none focus:border-[#C9A227] transition-colors"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6B7280] mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-[#E7E3DA] bg-white/70 focus:outline-none focus:border-[#C9A227] transition-colors"
                  placeholder="+52 (33) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6B7280] mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E7E3DA] bg-white/70 focus:outline-none focus:border-[#C9A227] transition-colors resize-none"
                  placeholder="Cuéntanos sobre las propiedades que buscas..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#111827] text-white font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer"
              >
                Solicitar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
