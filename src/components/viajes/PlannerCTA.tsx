import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';

export default function PlannerCTA() {
  return (
    <section className="relative py-12 sm:py-20 px-4 md:px-8 bg-white overflow-hidden">
      {/* Aurora gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22D3EE] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B4A] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#A855F7] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F172A]" style={{ fontFamily: 'Poppins' }}>
          ¿Listo para tu Próxima
          <br />
          <span className="text-[#FF6B4A]">Aventura?</span>
        </h2>
        <p className="text-lg text-[#64748B] mb-10 max-w-xl mx-auto" style={{ fontFamily: 'Inter' }}>
          Comienza a planear el viaje de tus sueños hoy mismo. Nuestros expertos en viajes están listos
          para ayudarte a crear recuerdos inolvidables.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
          <button className="flex items-center px-8 py-3.5 bg-[#FF6B4A] text-white font-semibold rounded-xl hover:bg-[#E85A3A] hover:scale-105 transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Poppins' }}>
            Planea tu Viaje
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-3.5 border-2 border-[#E2E8F0] text-[#0F172A] font-semibold rounded-xl hover:border-[#FF6B4A] hover:text-[#FF6B4A] transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Poppins' }}>
            Hablar con un Experto
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-[#64748B]" style={{ fontFamily: 'Inter' }}>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#FF6B4A]" />
            Reserva segura
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#FF6B4A]" />
            Garantía de mejor precio
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FF6B4A]" />
            50K+ viajeros felices
          </span>
        </div>
      </div>
    </section>
  );
}
