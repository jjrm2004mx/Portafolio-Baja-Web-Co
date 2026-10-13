import { useState } from 'react';
import { CalendarCheck, Clock3 } from 'lucide-react';

const barbers = [
  { name: 'Diego Ramírez', role: 'Barbero Maestro', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80' },
  { name: 'Carlos Medina', role: 'Especialista en Fades', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80' },
  { name: 'Luis Herrera', role: 'Especialista en Barba', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80' },
];

const timeSlots = ['9:00', '10:30', '12:00', '13:30', '16:00', '17:30', '19:00'];

export default function BookingPreview() {
  const [selectedBarber, setSelectedBarber] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(2);

  return (
    <section id="reservar" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#D4A853] uppercase tracking-[0.2em]">Reserva en Línea</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Agenda tu <span className="text-[#D4A853]">Cita</span>
          </h2>
          <div className="w-16 h-px bg-[#D4A853] mx-auto mb-5"></div>
          <p className="text-lg text-[#A0A8B8] max-w-2xl mx-auto">
            Elige tu barbero favorito y el horario que mejor se acomode a tu día.
          </p>
        </div>

        <div className="rounded-2xl bg-[#1A2232] border border-[#D4A853]/15 p-6 sm:p-10">
          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <span className="text-[#D4A853]">01</span> Elige tu Barbero
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {barbers.map((barber, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBarber(idx)}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                  selectedBarber === idx
                    ? 'border-[#D4A853] bg-[#D4A853]/10'
                    : 'border-[#D4A853]/15 hover:border-[#D4A853]/40'
                }`}
              >
                <img src={barber.avatar} alt={barber.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">{barber.name}</div>
                  <div className="text-[#A0A8B8] text-xs">{barber.role}</div>
                </div>
              </button>
            ))}
          </div>

          <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
            <span className="text-[#D4A853]">02</span> Horarios Disponibles Hoy
          </h3>
          <div className="flex flex-wrap gap-3 mb-10">
            {timeSlots.map((slot, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSlot(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedSlot === idx
                    ? 'border-[#D4A853] bg-[#D4A853] text-[#0F1623]'
                    : 'border-[#D4A853]/20 text-white hover:border-[#D4A853]/50'
                }`}
              >
                <Clock3 className="w-4 h-4" strokeWidth={1.75} />
                {slot}
              </button>
            ))}
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4A853] hover:bg-[#c89a44] text-[#0F1623] font-bold rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer">
            <CalendarCheck className="w-5 h-5" strokeWidth={2} />
            Confirmar Reserva con {barbers[selectedBarber].name.split(' ')[0]} — {timeSlots[selectedSlot]} hrs
          </button>
        </div>
      </div>
    </section>
  );
}
