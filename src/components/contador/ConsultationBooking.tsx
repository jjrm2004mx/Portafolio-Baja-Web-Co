import { Mail, Phone } from 'lucide-react';

export default function ConsultationBooking() {
  return (
    <section id="contacto" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1E3A8A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-white font-bold" style={{ fontFamily: 'Lora' }}>
            Agenda Tu Asesoria Fiscal
          </h2>
          <div className="w-16 h-1 bg-[#B45309] mx-auto mb-6"></div>
          <p className="text-lg text-white/85 max-w-2xl mx-auto" style={{ fontFamily: 'IBM Plex Sans' }}>
            Contacta con nosotros para una consulta inicial gratuita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Phone className="w-6 h-6 text-[#B45309] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Telefono</h3>
                <a href="tel:+525551234567" className="text-white/80 hover:text-[#B45309]">+52 (555) 123-4567</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Mail className="w-6 h-6 text-[#B45309] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:contacto@contadorcpa.com" className="text-white/80 hover:text-[#B45309]">contacto@contadorcpa.com</a>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Tu Nombre" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
            <input type="email" placeholder="Tu Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
            <input type="tel" placeholder="Tu Telefono" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white" />
            <button type="submit" className="w-full bg-[#B45309] hover:bg-[#92410E] text-white font-semibold py-3 rounded-lg">
              Agendar Consulta Gratuita
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
