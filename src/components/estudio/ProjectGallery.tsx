import { useMemo, useState } from 'react';
import { Search, ExternalLink, Info, Sparkles } from 'lucide-react';

interface Project {
  name: string;
  tag: string;
  route: string;
  image: string;
}

interface ComingSoon {
  name: string;
  tag: string;
  image: string;
}

const FILTERS = [
  'Todos',
  'Barbería',
  'Spa & Belleza',
  'Médico',
  'Dental',
  'Legal',
  'Restaurante',
  'Bienes Raíces',
  'Fitness',
];

const projects: Project[] = [
  {
    name: 'Barbería Premium',
    tag: 'Barbería',
    route: '/demos/barbershop',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Spa & Bienestar',
    tag: 'Spa & Belleza',
    route: '/demos/spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Bufete Legal Premium',
    tag: 'Legal',
    route: '/demos/legal',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Restaurante Gastronómico',
    tag: 'Restaurante',
    route: '/demos/restaurante',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Bienes Raíces de Lujo',
    tag: 'Bienes Raíces',
    route: '/demos/realestate',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Estudio de Fitness',
    tag: 'Fitness',
    route: '/demos/gimnasio',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Despacho Contable',
    tag: 'Contabilidad',
    route: '/demos/contador',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=1400&fit=crop&q=80',
  },
  {
    name: 'Agencia de Viajes',
    tag: 'Viajes',
    route: '/demos/viajes',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&h=1400&fit=crop&q=80',
  },
];

const comingSoon: ComingSoon[] = [
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
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.tag.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span
            className="text-xs font-medium text-[#C9A55C] uppercase tracking-[0.25em]"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Portafolio
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mt-3 mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Proyectos por <span className="text-[#C9A55C] italic">Industria</span>
          </h2>
          <div className="w-14 h-px bg-[#C9A55C] mx-auto"></div>
        </div>

        {/* Sticky search + filters */}
        <div className="sticky top-0 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 bg-[#0B0B0F]/90 backdrop-blur-md mb-10">
          <div className="relative max-w-md mx-auto mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3AD]" strokeWidth={1.75} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca por tipo de negocio..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#16161D] border border-white/10 text-white placeholder-[#A3A3AD] text-sm focus:outline-none focus:border-[#C9A55C]/50 transition-colors"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#C9A55C] text-[#0B0B0F]'
                    : 'bg-[#16161D] text-[#A3A3AD] border border-white/10 hover:border-[#C9A55C]/40 hover:text-white'
                }`}
                style={{ fontFamily: 'Raleway, sans-serif' }}
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
              className="group rounded-2xl bg-[#16161D] border border-white/5 overflow-hidden hover:border-[#C9A55C]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#0B0B0F]/60 border-b border-white/5">
                <span className="w-2 h-2 rounded-full bg-white/15"></span>
                <span className="w-2 h-2 rounded-full bg-white/15"></span>
                <span className="w-2 h-2 rounded-full bg-white/15"></span>
              </div>

              {/* Scrolling preview */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-[220%] object-cover object-top transition-transform duration-[3500ms] ease-in-out group-hover:-translate-y-[54%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.route}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#C9A55C] text-[#0B0B0F] text-xs font-semibold hover:bg-[#b8944c] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                    Ver en Vivo
                  </a>
                  <a
                    href={project.route}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" strokeWidth={2} />
                    Detalles
                  </a>
                </div>
              </div>

              <div className="p-5">
                <span className="text-[10px] font-medium text-[#C9A55C] uppercase tracking-wider">{project.tag}</span>
                <h3 className="text-white font-semibold mt-1" style={{ fontFamily: 'Lora, serif' }}>
                  {project.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Coming soon teasers */}
          {(activeFilter === 'Todos' || comingSoon.some((c) => c.tag === activeFilter)) &&
            comingSoon
              .filter((c) => activeFilter === 'Todos' || c.tag === activeFilter)
              .map((item, idx) => (
                <div
                  key={`soon-${idx}`}
                  className="group relative rounded-2xl bg-[#16161D] border border-white/5 overflow-hidden"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover blur-md scale-110 opacity-50"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0F]/50 flex flex-col items-center justify-center gap-3 text-center px-6">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C9A55C]/40 text-[#C9A55C] text-[10px] font-semibold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" strokeWidth={2} />
                        Próximamente
                      </span>
                      <h3 className="text-white font-semibold" style={{ fontFamily: 'Lora, serif' }}>
                        {item.name}
                      </h3>
                      <span className="text-[10px] text-[#A3A3AD] uppercase tracking-wider">{item.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#A3A3AD] mt-10" style={{ fontFamily: 'Raleway, sans-serif' }}>
            No encontramos proyectos para &ldquo;{query}&rdquo;. Prueba otra búsqueda.
          </p>
        )}
      </div>
    </section>
  );
}
