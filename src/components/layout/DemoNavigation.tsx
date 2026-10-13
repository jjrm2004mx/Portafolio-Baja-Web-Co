import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BRAND } from '@/config/brand.config'

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

export function DemoNavigation() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  // Cierra el menú al cambiar de página
  useEffect(() => setOpen(false), [location.pathname])

  const linkClass = (path: string) =>
    `px-3 py-2 rounded transition-colors ${
      location.pathname === path ? 'bg-cyan-600 font-semibold' : 'hover:bg-navy-700'
    }`

  return (
    <nav className="bg-navy-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="font-bold text-lg flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/brand/logo/logo-primary.png"
              alt="Logo"
              className="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <span>{BRAND.name}</span>
          </Link>

          {/* Escritorio: links en línea, con wrap si no caben */}
          <div className="hidden xl:flex flex-wrap justify-end gap-1 text-sm">
            {demos.map((d) => (
              <Link key={d.path} to={d.path} className={linkClass(d.path)}>
                {d.label}
              </Link>
            ))}
          </div>

          {/* Celular/tablet: botón hamburguesa */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden p-2 rounded hover:bg-navy-700"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {open && (
          <div className="xl:hidden mt-3 pb-2 grid grid-cols-2 gap-2 text-sm">
            {demos.map((d) => (
              <Link key={d.path} to={d.path} className={`${linkClass(d.path)} py-3 text-center bg-navy-700/50`}>
                {d.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
