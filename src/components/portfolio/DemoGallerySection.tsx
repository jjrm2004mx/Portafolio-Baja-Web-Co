import { Link } from 'react-router-dom'
import { Container } from '@/components/shared/Container'

interface Demo {
  id: string
  title: string
  description: string
  icon: string
  shortcut: string
}

export function DemoGallerySection() {
  const demos: Demo[] = [
    {
      id: 'contador',
      title: 'Despacho Contable',
      description: 'Asesoría contable integral, servicios fiscales y auditoría profesional',
      icon: '📊',
      shortcut: 'Haz clic aquí para ver →',
    },
    {
      id: 'barberia',
      title: 'Barbería Premium',
      description: 'Grooming de excelencia con equipo especializado en barbershop',
      icon: '✂️',
      shortcut: 'Explora la barbería →',
    },
    {
      id: 'restaurante',
      title: 'Restaurante Gastronómico',
      description: 'Cocina de autor con ingredientes locales y experiencia culinaria premium',
      icon: '🍽️',
      shortcut: 'Descubre el menú →',
    },
    {
      id: 'inmobiliaria',
      title: 'Inversión Inmobiliaria',
      description: 'Propiedades premium y oportunidades de inversión con asesoría integral',
      icon: '🏠',
      shortcut: 'Buscar propiedades →',
    },
    {
      id: 'abogado',
      title: 'Despacho Legal',
      description: 'Asesoría legal integral en derecho mercantil, laboral y familiar',
      icon: '⚖️',
      shortcut: 'Consulta legal →',
    },
    {
      id: 'viajes',
      title: 'Agencia de Viajes',
      description: 'Destinos vibrantes, reservas instantáneas y planificador de viajes personalizado',
      icon: '✈️',
      shortcut: 'Explora destinos →',
    },
    {
      id: 'legal',
      title: 'Bufete Legal Premium',
      description: 'Asesoría legal de confianza con diseño minimalista en navy y dorado',
      icon: '⚖️',
      shortcut: 'Conoce al despacho →',
    },
    {
      id: 'realestate',
      title: 'Bienes Raíces de Lujo',
      description: 'Propiedades premium con glassmorphism, recorridos virtuales y agentes expertos',
      icon: '🏙️',
      shortcut: 'Explora propiedades →',
    },
    {
      id: 'barbershop',
      title: 'Barbería Premium',
      description: 'Diseño oscuro y dorado, menú de servicios, galería antes/después y reservas en línea',
      icon: '💈',
      shortcut: 'Reserva tu corte →',
    },
    {
      id: 'rivera-contadores',
      title: 'Rivera Contadores',
      description: 'Landing page contable y fiscal con marca navy/cyan, servicios y agenda de consultas',
      icon: '📑',
      shortcut: 'Agenda tu consulta →',
    },
  ]

  return (
    <section className="py-8 bg-gradient-to-b from-navy-50 to-cyan-50">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl sm:text-6xl font-bold text-navy-900 mb-4">
            Explora Nuestras Landing Pages
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Cada demostración es una landing page profesional diseñada específicamente para su sector.
            <br />
            <span className="text-cyan-600 font-semibold">Haz clic en cualquiera para verla en acción.</span>
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <Link
              key={demo.id}
              to={`/demos/${demo.id}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`,
                opacity: 0,
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden h-full cursor-pointer border-2 border-transparent hover:border-cyan-400">
                {/* Header with icon and title */}
                <div className="bg-gradient-to-r from-navy-600 to-navy-800 text-white p-8">
                  <div className="text-6xl mb-4">{demo.icon}</div>
                  <h3 className="text-3xl font-bold">{demo.title}</h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-neutral-700 text-lg mb-6 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center gap-2 text-cyan-600 font-bold text-lg group-hover:text-cyan-700 transition-colors">
                    <span>{demo.shortcut}</span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:h-2 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Direct links section */}
        <div className="mt-8 bg-white rounded-xl p-6 border-2 border-cyan-200">
          <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
            ⚡ Acceso Rápido - Links Directos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <Link
              to="/demos/contador"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              📊 Contador
            </Link>
            <Link
              to="/demos/barberia"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              ✂️ Barbería
            </Link>
            <Link
              to="/demos/restaurante"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              🍽️ Restaurante
            </Link>
            <Link
              to="/demos/inmobiliaria"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              🏠 Inmobiliaria
            </Link>
            <Link
              to="/demos/abogado"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              ⚖️ Abogado
            </Link>
            <Link
              to="/demos/viajes"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              ✈️ Viajes
            </Link>
            <Link
              to="/demos/legal"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              ⚖️ Legal Premium
            </Link>
            <Link
              to="/demos/realestate"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              🏙️ Bienes Raíces Lujo
            </Link>
            <Link
              to="/demos/barbershop"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              💈 Barbería Premium
            </Link>
            <Link
              to="/demos/rivera-contadores"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              📑 Rivera Contadores
            </Link>
            <Link
              to="/estudio"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              ✨ Estudio
            </Link>
            <Link
              to="/studio2"
              className="px-6 py-3 bg-navy-600 hover:bg-navy-700 text-white font-bold rounded-lg transition-all duration-300 text-center hover:scale-105"
            >
              🌊 Estudio V2
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
