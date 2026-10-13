import { useMemo, useState } from 'react';
import { Search, ExternalLink, Info, Sparkles } from 'lucide-react';

interface Project {
  name: string;
  tag: string;
  route: string;
  image: string;
}

const FILTERS = [
  'Todos',
  'Contabilidad',
  'Legal',
  'Inmobiliaria',
  'Barbería',
  'Spa & Belleza',
  'Restaurante',
  'Fitness',
  'Viajes',
];

const projects: Project[] = [
  {
    name: 'Rivera Contadores',
    tag: 'Contabilidad',
    route: '/demos/rivera-contadores',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Martínez & Asociados',
    tag: 'Legal',
    route: '/demos/legal',
    image: '/images/demo/Legal-Sterling-Asociados-2026.PNG',
  },
  {
    name: 'Despacho Jurídico',
    tag: 'Legal',
    route: '/demos/abogado',
    image: '/images/demo/Abogado-Juridico-2026.PNG',
  },
  {
    name: 'Torres Bienes Raíces',
    tag: 'Inmobiliaria',
    route: '/demos/inmobiliaria',
    image: '/images/demo/Inmobiliaria-1-2026.PNG',
  },
  {
    name: 'Bienes Raíces de Lujo',
    tag: 'Inmobiliaria',
    route: '/demos/realestate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Barbería Premium',
    tag: 'Barbería',
    route: '/demos/barbershop',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Spa & Bienestar',
    tag: 'Spa & Belleza',
    route: '/demos/spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Restaurante Gastronómico',
    tag: 'Restaurante',
    route: '/demos/restaurante',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Estudio de Fitness',
    tag: 'Fitness',
    route: '/demos/gimnasio',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Agencia de Viajes',
    tag: 'Viajes',
    route: '/demos/viajes',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&h=1000&fit=crop&q=80',
  },
];

const comingSoon = [
  {
    name: 'Clínica Médica',
    tag: 'Médico',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=1000&fit=crop&q=80',
  },
  {
    name: 'Consultorio Dental',
    tag: 'Dental',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&h=1000&fit=crop&q=80',
  },
];

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = activeFilter === 'Todos' || p.tag === activeFilter;
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) || p.tag.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-cyan-600 uppercase tracking-[0.2em] font-sans">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-600 mt-3 mb-4 font-display">
            Proyectos por Industria
          </h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Sticky search + filters */}
        <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 bg-neutral-50/90 backdrop-blur-md mb-10">
          <div className="relative max-w-md mx-auto mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" strokeWidth={1.75} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca por tipo de negocio..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-neutral-200 text-navy-600 placeholder-neutral-400 text-sm focus:outline-none focus:border-cyan-500 shadow-sm transition-colors font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap font-sans ${
                  activeFilter === filter
                    ? 'bg-navy-600 text-white shadow-md'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-cyan-500/50 hover:text-navy-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-neutral-100 border-b border-neutral-200">
                <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
              </div>

              {/* Scrolling preview */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-[220%] object-cover object-top transition-transform duration-[3500ms] ease-in-out group-hover:-translate-y-[54%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.route}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-cyan-500 text-white text-xs font-semibold hover:bg-cyan-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                    Ver en Vivo
                  </a>
                  <a
                    href={project.route}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/90 backdrop-blur-sm text-navy-600 text-xs font-semibold hover:bg-white transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" strokeWidth={2} />
                    Detalles
                  </a>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10px] font-semibold text-cyan-600 uppercase tracking-wider font-sans">
                  {project.tag}
                </span>
                <h3 className="text-navy-600 font-semibold mt-1 font-display">{project.name}</h3>
              </div>
            </div>
          ))}

          {/* Coming soon teasers */}
          {comingSoon
            .filter(() => activeFilter === 'Todos')
            .map((item, idx) => (
              <div key={`soon-${idx}`} className="group relative rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover blur-md scale-110 opacity-60" />
                  <div className="absolute inset-0 bg-navy-600/20 flex flex-col items-center justify-center gap-3 text-center px-6">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-navy-600 text-[10px] font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-cyan-500" strokeWidth={2} />
                      Próximamente
                    </span>
                    <h3 className="text-white font-semibold font-display drop-shadow">{item.name}</h3>
                    <span className="text-[10px] text-white/90 uppercase tracking-wider">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-neutral-500 mt-10 font-sans">
            No encontramos proyectos para &ldquo;{query}&rdquo;. Prueba otra búsqueda.
          </p>
        )}
      </div>
    </section>
  );
}
