import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
];

export default function BrandNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-navy-600 rounded flex items-center justify-center text-navy-600 font-bold text-lg font-display">
              R
            </div>
            <div className="leading-tight">
              <div className="text-navy-600 font-bold text-sm sm:text-base tracking-wide font-display">RIVERA</div>
              <div className="text-neutral-500 text-[10px] sm:text-xs tracking-[0.15em] font-sans">CONTADORES</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-600 hover:text-navy-600 text-sm font-medium transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-navy-600 hover:bg-navy-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Contáctanos
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy-600 cursor-pointer"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-neutral-200 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-neutral-600 hover:text-navy-600 text-sm font-medium font-sans"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-navy-600 text-white text-sm font-semibold rounded-lg"
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
