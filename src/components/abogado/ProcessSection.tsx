import { Container } from '@/components/shared/Container'
import { PROCESO } from '@/config/abogado.config'

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003366]" style={{ fontFamily: 'Lora' }}>
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-gray-600">
             Seis pasos claros y transparentes desde la consulta inicial hasta la resolución de tu caso
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {PROCESO.map((paso, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-[#D4AF37] text-[#003366] rounded-full font-bold text-lg">
                  {paso.numero}
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-6 md:ml-0 md:border-0 md:pl-0">
                <h3 className="text-xl font-bold text-[#003366] mb-2" style={{ fontFamily: 'Lora' }}>
                  {paso.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {paso.descripcion}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {paso.detalles.map((detalle, detIdx) => (
                    <li key={detIdx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[#1B7A8A] font-bold mt-0.5">→</span>
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 p-6 bg-[#F0F4F8] rounded-lg border border-[#1B7A8A]/20">
          <p className="text-gray-700 text-center">
            <strong className="text-[#003366]">Duración promedio:</strong> Contacto a resolución completa entre 1 a 12 meses según el tipo de caso. 
            Te informaremos con precisión en la consulta inicial.
          </p>
        </div>
      </Container>
    </section>
  )
}
