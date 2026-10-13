import { Calendar, CreditCard, Plane, Users } from 'lucide-react';

export default function BookingPreview() {
  return (
    <section className="relative py-12 sm:py-20 px-4 md:px-8 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <span className="text-sm font-medium text-[#FBBF24] uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
            Reserva en línea
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
            Reserva tu viaje en <span className="text-[#FF6B4A]">menos de 2 minutos</span>
          </h2>
          <p className="text-[#64748B] mb-8 leading-relaxed" style={{ fontFamily: 'Inter' }}>
            Vuelos, hospedaje y experiencias en un solo checkout. Fechas flexibles, precios transparentes
            y cambios gratuitos hasta 48 horas antes de la salida.
          </p>

          <div className="space-y-4">
            {[
              { icon: Plane, label: 'Vuelos flexibles', desc: 'Compara más de 500 aerolíneas al instante' },
              { icon: Calendar, label: 'Cambios de fecha gratis', desc: 'Los planes cambian, nosotros nos adaptamos' },
              { icon: Users, label: 'Apto para grupos', desc: 'Reserva para 1 o hasta 12 viajeros' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white border border-[#E2E8F0] rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#FF6B4A]/10 text-[#FF6B4A] flex-shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>{item.label}</p>
                  <p className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: booking summary card */}
        <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>Resumen del Viaje</h3>
            <span className="text-xs px-3 py-1 rounded-full bg-[#34D399]/10 text-[#16A34A] font-semibold">Mejor precio</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=160&h=160&fit=crop&q=80"
              alt="Miniatura del destino seleccionado"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <p className="font-semibold text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>Reikiavik, Islandia</p>
              <p className="text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>7 noches · Tour de auroras boreales</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-sm" style={{ fontFamily: 'Inter' }}>
            <div className="flex justify-between text-[#64748B]">
              <span>Vuelos redondos</span>
              <span className="text-[#0F172A] font-medium">$640</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Hotel boutique (7 noches)</span>
              <span className="text-[#0F172A] font-medium">$780</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Excursión aurora boreal</span>
              <span className="text-[#0F172A] font-medium">$160</span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Impuestos y tarifas</span>
              <span className="text-[#0F172A] font-medium">$60</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-t border-[#E2E8F0] mb-6">
            <span className="text-[#64748B]" style={{ fontFamily: 'Inter' }}>Total por viajero</span>
            <span className="text-2xl font-bold text-[#FF6B4A]" style={{ fontFamily: 'Poppins' }}>
              $1,640
            </span>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FF6B4A] text-white font-bold tracking-wide hover:bg-[#E85A3A] hover:scale-105 transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Poppins' }}>
            <CreditCard className="w-5 h-5" />
            Confirmar y Pagar
          </button>
          <p className="text-center text-[#94A3B8] text-xs mt-3" style={{ fontFamily: 'Inter' }}>
            Cancelación gratuita dentro de las primeras 48 horas
          </p>
        </div>
      </div>
    </section>
  );
}
