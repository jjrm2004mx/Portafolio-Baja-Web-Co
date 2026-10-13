import { Container } from '@/components/shared/Container'

export function ChefStorySection() {
  return (
    <section className="py-24 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chef image */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/demo/IMG_9810.jpg"
              alt="Chef Maestro"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Story */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
              Chef de Autor
            </div>

            <h2 className="font-serif text-h2 sm:text-5xl font-bold text-red-900 mb-6">
              La Pasión por la Cocina
            </h2>

            <div className="space-y-4 text-body-lg text-neutral-700 mb-8 font-sans">
              <p>
                Mi viaje en la gastronomía comenzó hace 18 años en las cocinas de
                Europa, donde aprendí la importancia de la precisión, la calidad y
                la pasión por cada ingrediente.
              </p>
              <p>
                Tras trabajar en restaurantes con Estrella Michelin, decidí crear un
                espacio donde pudiera expresar mi creatividad libremente, fusionando
                técnicas clásicas con sabores locales.
              </p>
              <p>
                Cada plato en nuestro menú cuenta una historia. La historia del
                agricultor que cultiva nuestros tomates, del pescador que trae lo
                mejor del día, del panadero que prepara nuestro pan artesanal.
              </p>
            </div>

            {/* Chef stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">18+</p>
                <p className="text-sm text-neutral-600">Años en Cocina</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">∞</p>
                <p className="text-sm text-neutral-600">Creatividad</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">100%</p>
                <p className="text-sm text-neutral-600">Pasión</p>
              </div>
            </div>

            {/* Chef quote */}
            <blockquote className="border-l-4 border-red-600 pl-6 italic text-xl text-red-900 font-serif">
              "La cocina es un viaje sin destino. Cada día aprendemos algo nuevo
              de nuestros ingredientes, de nuestros clientes, de nosotros mismos."
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  )
}
