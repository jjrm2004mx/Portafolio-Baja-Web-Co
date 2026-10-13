import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
              Agenda una Consulta
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-600 mt-3 mb-5 leading-tight font-display">
              Hablemos de las finanzas de tu negocio
            </h2>
            <p className="text-neutral-600 mb-8 font-sans">
              Cuéntanos sobre tu situación fiscal o contable y te contactaremos con una propuesta
              clara, sin letras pequeñas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-600/5 flex items-center justify-center text-navy-600 flex-shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-navy-600 font-sans">+52 (33) 4567-8901</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-600/5 flex items-center justify-center text-navy-600 flex-shrink-0">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-navy-600 font-sans">contacto@riveracontadores.mx</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-600/5 flex items-center justify-center text-navy-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-navy-600 font-sans">Av. Hidalgo 450, Guadalajara, Jal.</span>
              </div>
            </div>

            <a
              href="https://wa.me/525534567890?text=Hola%2C%20me%20interesa%20una%20consulta%20contable"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#1fba57] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              Mándanos un Mensaje
            </a>
          </div>

          <form className="space-y-4 bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-500 mb-2 uppercase tracking-wider font-sans">
                ¿En qué podemos ayudarte?
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-200 text-navy-600 placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Cuéntanos sobre tu situación fiscal o contable..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
            >
              <Send className="w-4 h-4" strokeWidth={2} />
              Agendar Consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
