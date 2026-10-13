const stats = [
  { value: '+', label: 'Ahorros Fiscales Generados' },
  { value: '800+', label: 'Empresas Asesoradas' },
  { value: '99%', label: 'Cumplimiento Normativo' },
  { value: '15+', label: 'Anos de Experiencia' },
];

const cases = [
  {
    amount: '.8M',
    type: 'Optimizacion Fiscal',
    description: 'Ahorro tributario anual para empresa manufacturera mediana mediante estructura fiscal optimizada.',
  },
];

export default function FinancialCaseResults() {
  return (
    <section id="resultados" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B45309] text-sm font-semibold uppercase tracking-wider">
            Resultados Comprobados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#1E3A8A] font-bold">
            Resultados Financieros
          </h2>
          <div className="w-16 h-0.5 bg-[#B45309] mx-auto"></div>
          <p className="text-lg text-[#5B6472] max-w-2xl mx-auto mt-6">
            Nuestro historial habla por si solo. Hemos generado cientos de millones en ahorros fiscales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 sm:mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-[#E2DFD5] rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">{stat.value}</div>
              <div className="text-sm text-[#5B6472] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((case_item, idx) => (
            <div key={idx} className="bg-white border border-[#E2DFD5] rounded-lg p-8 hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-1">
                {case_item.amount}
              </h3>
              <p className="text-[#B45309] font-semibold">
                {case_item.type}
              </p>
              <p className="text-[#5B6472] mt-4">
                {case_item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
