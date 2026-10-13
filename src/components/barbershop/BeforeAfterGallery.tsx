const gallery = [
  {
    before: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=600&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&h=600&fit=crop&q=80',
    label: 'Fade Clásico',
  },
  {
    before: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=500&h=600&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&h=600&fit=crop&q=80',
    label: 'Barba Perfilada',
  },
  {
    before: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=500&h=600&fit=crop&q=80',
    after: 'https://images.unsplash.com/photo-1593702288056-f173606876e4?w=500&h=600&fit=crop&q=80',
    label: 'Corte Texturizado',
  },
];

export default function BeforeAfterGallery() {
  return (
    <section id="galeria" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1623]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#D4A853] uppercase tracking-[0.2em]">Transformaciones</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Antes <span className="text-[#D4A853]">&amp;</span> Después
          </h2>
          <div className="w-16 h-px bg-[#D4A853] mx-auto mb-5"></div>
          <p className="text-lg text-[#A0A8B8] max-w-2xl mx-auto">
            La diferencia que marca un corte hecho con precisión y oficio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A2232] border border-[#D4A853]/15 overflow-hidden hover:border-[#D4A853]/50 transition-all duration-300"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={item.before} alt={`Antes - ${item.label}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[#0F1623]/80 text-[#A0A8B8] text-[10px] font-semibold uppercase tracking-wider">
                    Antes
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden border-l border-[#D4A853]/30">
                  <img src={item.after} alt={`Después - ${item.label}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded bg-[#D4A853] text-[#0F1623] text-[10px] font-semibold uppercase tracking-wider">
                    Después
                  </span>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-white font-semibold">{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
