import { MessageCircle, Send } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F]">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-[#16161D] border border-white/5 p-8 sm:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A55C]/[0.08] blur-[120px] pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span
                className="text-xs font-medium text-[#C9A55C] uppercase tracking-[0.25em]"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Empecemos
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mt-3 mb-5 leading-tight"
                style={{ fontFamily: 'Lora, serif' }}
              >
                ¿Listo para tener la landing page que tu negocio merece?
              </h2>
              <p className="text-[#A3A3AD] mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada. Respuesta en menos
                de 24 horas.
              </p>
              <a
                href="https://wa.me/6642183521?text=Hola%2C%20me%20interesa%20cotizar%20una%20landing%20page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#1fba57] text-[#0B0B0F] font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                Escríbenos por WhatsApp
              </a>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#A3A3AD] mb-2 uppercase tracking-wider">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-white/10 text-white placeholder-[#A3A3AD]/60 focus:outline-none focus:border-[#C9A55C]/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A3A3AD] mb-2 uppercase tracking-wider">Negocio</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-white/10 text-white placeholder-[#A3A3AD]/60 focus:outline-none focus:border-[#C9A55C]/50 transition-colors"
                    placeholder="Tipo de negocio"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#A3A3AD] mb-2 uppercase tracking-wider">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-white/10 text-white placeholder-[#A3A3AD]/60 focus:outline-none focus:border-[#C9A55C]/50 transition-colors"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-xs text-[#A3A3AD] mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-white/10 text-white placeholder-[#A3A3AD]/60 focus:outline-none focus:border-[#C9A55C]/50 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C9A55C] hover:bg-[#b8944c] text-[#0B0B0F] font-semibold rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                <Send className="w-4 h-4" strokeWidth={2} />
                Solicitar Cotización
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
