import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Implementaron nuestra contabilidad con excelencia. El equipo es altamente profesional.',
    author: 'Maria Lopez Garcia',
    role: 'Directora Administrativa',
    company: 'Grupo Lopez',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B45309] text-sm font-semibold uppercase">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-4 text-[#1E3A8A] font-bold">
            Confian en nuestro trabajo
          </h2>
          <div className="w-16 h-0.5 bg-[#B45309] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-[#E2DFD5] rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B45309] text-[#B45309]" />
                ))}
              </div>
              <p className="text-[#5B6472] mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-[#E2DFD5] pt-6">
                <p className="text-[#1E3A8A] font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-[#B45309] text-sm font-medium">
                  {testimonial.role}
                </p>
                <p className="text-[#5B6472] text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F8F7F2] rounded-lg p-8 text-center">
          <p className="text-[#5B6472] mb-6">
            Respaldados por certificaciones profesionales:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white border border-[#E2DFD5] rounded-lg text-[#1E3A8A] font-medium">
              IMCP Certificados
            </span>
            <span className="px-4 py-2 bg-white border border-[#E2DFD5] rounded-lg text-[#1E3A8A] font-medium">
              SAT Autorizado
            </span>
            <span className="px-4 py-2 bg-white border border-[#E2DFD5] rounded-lg text-[#1E3A8A] font-medium">
              ISO 9001:2015
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
