import { CalendarCheck, MapPin, Phone, Scissors } from 'lucide-react';
import HeroSection from '../../components/barbershop/HeroSection';
import ServicesMenu from '../../components/barbershop/ServicesMenu';
import BeforeAfterGallery from '../../components/barbershop/BeforeAfterGallery';
import BookingPreview from '../../components/barbershop/BookingPreview';
import TeamSection from '../../components/barbershop/TeamSection';
import Testimonials from '../../components/barbershop/Testimonials';

export default function BarbershopPage() {
  return (
    <div className="bg-[#0F1623]">
      <HeroSection />
      <ServicesMenu />
      <BeforeAfterGallery />
      <BookingPreview />
      <TeamSection />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#1A2232] border-y border-[#D4A853]/15">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Tu Próximo Gran Corte Te Está <span className="text-[#D4A853]">Esperando</span>
          </h2>
          <p className="text-[#A0A8B8] text-lg mb-8">
            Reserva hoy y descubre por qué somos la barbería de confianza de la ciudad.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A853] hover:bg-[#c89a44] text-[#0F1623] font-bold rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <CalendarCheck className="w-5 h-5" strokeWidth={2} />
            Reservar Mi Cita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#D4A853]/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="w-6 h-6 text-[#D4A853]" strokeWidth={1.5} />
                <span className="text-xl font-bold text-white">
                  BARBER<span className="text-[#D4A853]">HOUSE</span>
                </span>
              </div>
              <p className="text-[#A0A8B8] text-sm max-w-xs">
                Tradición, oficio y estilo moderno en cada corte. Tu barbería de confianza.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Horario</h4>
              <ul className="text-[#A0A8B8] text-sm space-y-1">
                <li>Lun - Vie: 9:00 am - 8:00 pm</li>
                <li>Sábado: 9:00 am - 6:00 pm</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contacto</h4>
              <ul className="text-[#A0A8B8] text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D4A853]" strokeWidth={1.5} /> +52 (33) 9876-5432
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4A853]" strokeWidth={1.5} /> Av. Juárez 210, Guadalajara, Jal.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-[#A0A8B8] text-xs">
            © {new Date().getFullYear()} BarberHouse. Todos los derechos reservados. Demo con fines ilustrativos.
          </p>
        </div>
      </footer>
    </div>
  );
}
