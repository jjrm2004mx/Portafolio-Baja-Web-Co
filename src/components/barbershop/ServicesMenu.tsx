import { Scissors, Flame, Brush, Palette } from 'lucide-react';

interface Service {
  icon: typeof Scissors;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    name: 'Corte de Cabello',
    description: 'Corte clásico o moderno a tijera y máquina, con acabado perfecto.',
    price: '$250',
    duration: '30 min',
  },
  {
    icon: Flame,
    name: 'Arreglo de Barba',
    description: 'Perfilado y afeitado con navaja, toalla caliente y aceites premium.',
    price: '$180',
    duration: '25 min',
  },
  {
    icon: Brush,
    name: 'Corte + Barba',
    description: 'El combo completo: corte de precisión y arreglo de barba en una sesión.',
    price: '$380',
    duration: '50 min',
  },
  {
    icon: Palette,
    name: 'Color y Styling',
    description: 'Coloración profesional, camuflaje de canas y peinado de salida.',
    price: '$450',
    duration: '60 min',
  },
];

export default function ServicesMenu() {
  return (
    <section id="servicios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#D4A853] uppercase tracking-[0.2em]">Nuestros Servicios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Menú de <span className="text-[#D4A853]">Servicios</span>
          </h2>
          <div className="w-16 h-px bg-[#D4A853] mx-auto mb-5"></div>
          <p className="text-lg text-[#A0A8B8] max-w-2xl mx-auto">
            Cada servicio está diseñado para elevar tu estilo con la precisión y el detalle que mereces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#1A2232] border border-[#D4A853]/15 p-7 hover:border-[#D4A853]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl border border-[#D4A853]/40 flex items-center justify-center mb-6 text-[#D4A853] group-hover:bg-[#D4A853] group-hover:text-[#0F1623] transition-colors">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-[#A0A8B8] mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-5 border-t border-[#D4A853]/15">
                  <span className="text-xs text-[#A0A8B8] uppercase tracking-wider">{service.duration}</span>
                  <span className="text-2xl font-bold text-[#D4A853]">{service.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
