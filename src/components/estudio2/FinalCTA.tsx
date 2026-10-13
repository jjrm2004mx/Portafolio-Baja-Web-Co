import { MessageCircle, Send } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-navy-600 p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 blur-[120px] pointer-events-none"></div>

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-cyan-300 uppercase tracking-[0.2em] font-sans">
                Empecemos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-5 leading-tight font-display">
                ¿Listo para tener la página web que tu negocio merece?
              </h2>
              <p className="text-white/80 mb-8 font-sans">
                Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada. Respuesta en
                menos de 24 horas.
              </p>
              <a
                href="https://wa.me/525512345678?text=Hola%2C%20me%20interesa%20cotizar%20una%20p%C3%A1gina%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#1fba57] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                Mándanos un Mensaje
              </a>
            </div>

            <form className="space-y-4 bg-white rounded-2xl p-6 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                    Negocio
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Tipo de negocio"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                  Mensaje
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
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
