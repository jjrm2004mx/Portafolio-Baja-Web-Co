import { Link, useLocation } from 'react-router-dom'
import { BRAND } from '@/config/brand.config'

export function DemoNavigation() {
  const location = useLocation()

  const demos = [
    { path: '/', label: 'Portafolio' },
    { path: '/demos/contador', label: 'Contador' },
    { path: '/demos/barberia', label: 'Barbería' },
    { path: '/demos/restaurante', label: 'Restaurante' },
    { path: '/demos/inmobiliaria', label: 'Inmobiliaria' },
    { path: '/demos/viajes', label: 'Viajes' },
    { path: '/demos/legal', label: 'Legal Premium' },
    { path: '/demos/realestate', label: 'Bienes Raíces Lujo' },
    { path: '/demos/barbershop', label: 'Barbería Premium' },
    { path: '/demos/rivera-contadores', label: 'Rivera Contadores' },
  ]

  return (
    <nav className="bg-navy-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-lg flex items-center gap-4 flex-shrink-0">
            <img
              src="/images/brand/logo/logo-primary.png"
              alt="Logo"
              className="w-20 h-20 flex-shrink-0"
            />
            <span>{BRAND.name}</span>
          </Link>

          <div className="flex gap-4 text-sm">
            {demos.map((demo) => (
              <Link
                key={demo.path}
                to={demo.path}
                className={`px-3 py-2 rounded transition-colors ${
                  location.pathname === demo.path
                    ? 'bg-cyan-600 font-semibold'
                    : 'hover:bg-navy-700'
                }`}
              >
                {demo.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
