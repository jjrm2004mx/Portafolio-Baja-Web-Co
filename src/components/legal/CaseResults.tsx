const stats = [
  { value: '$500M+', label: 'Total Recuperado' },
  { value: '5,000+', label: 'Casos Ganados' },
  { value: '98%', label: 'Tasa de Éxito' },
  { value: '30+', label: 'Años de Experiencia' },
];

const cases = [
  {
    amount: '$12.5M',
    type: 'Negligencia Médica',
    description: 'Veredicto para paciente que sufrió lesiones permanentes por negligencia quirúrgica.',
  },
  {
    amount: '$8.2M',
    type: 'Lesiones Personales',
    description: 'Acuerdo para trabajador de la construcción lesionado en un accidente laboral.',
  },
  {
    amount: '$5.7M',
    type: 'Responsabilidad de Producto',
    description: 'Fallo del jurado para familia afectada por piezas automotrices defectuosas.',
  },
  {
    amount: '$4.3M',
    type: 'Muerte Injusta',
    description: 'Acuerdo para la familia de la víctima en un accidente fatal de transporte de carga.',
  },
];

export default function CaseResults() {
  return (
    <section id="resultados" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#C9A227] text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Sans' }}>
            Resultados Comprobados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#0A2342] font-bold" style={{ fontFamily: 'Lora' }}>
            Resultados de Casos
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A227] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6" style={{ fontFamily: 'IBM Plex Sans' }}>
            Nuestro historial habla por sí solo. Hemos conseguido cientos de millones en veredictos y
            acuerdos para nuestros clientes.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 sm:mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-[#E2DFD5] rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-[#0A2342]" style={{ fontFamily: 'Lora' }}>{stat.value}</div>
              <div className="text-sm text-[#5B6472] mt-1" style={{ fontFamily: 'IBM Plex Sans' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white border border-[#E2DFD5] rounded-lg p-6 sm:p-8 flex gap-6 shadow-sm">
              <div className="flex-shrink-0">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9A227]" style={{ fontFamily: 'Lora' }}>
                  {c.amount}
                </div>
                <div className="text-sm text-[#5B6472] mt-1" style={{ fontFamily: 'IBM Plex Sans' }}>{c.type}</div>
              </div>
              <div className="flex-1">
                <p className="text-[#5B6472]" style={{ fontFamily: 'IBM Plex Sans' }}>{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#94A0AD] mt-8" style={{ fontFamily: 'IBM Plex Sans' }}>
          * Los resultados pasados no garantizan resultados futuros. Cada caso es único y los resultados varían
          según las circunstancias específicas.
        </p>
      </div>
    </section>
  );
}
