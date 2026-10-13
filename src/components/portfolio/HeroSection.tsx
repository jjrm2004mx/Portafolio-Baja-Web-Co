import { Link } from 'react-router-dom'
import { BRAND } from '@/config/brand.config'
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-600 via-navy-600 to-cyan-600 text-white">
      {/* Background pattern (placeholder for wave-pattern.svg) */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
            fill="white"
            opacity="0.1"
          />
          <path
            d="M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z"
            fill="white"
            opacity="0.05"
          />
        </svg>
      </div>

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src="/images/brand/logo/logo-primary.png"
              alt="BAJA WEB CO. Logo"
              className="h-24 sm:h-28 w-auto"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-h1 sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {BRAND.name}
          </h1>

          {/* Tagline */}
          <p className="text-body-lg sm:text-xl text-neutral-100 mb-6 animate-fade-in animation-delay-100">
            {BRAND.tagline}
          </p>

          {/* Description */}
          <p className="text-neutral-200 mb-10 max-w-xl mx-auto animate-fade-in animation-delay-200">
            Explora nuestras demostraciones de landing pages profesionales
            diseñadas para diferentes sectores. Cada una con su propio diseño,
            estrategia y enfoque específico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <Link to="/demos/contador">
              <Button size="lg" variant="primary">
                Explorar Demostraciones
              </Button>
            </Link>
            <a href="#about">
              <Button size="lg" variant="ghost">
                Conocer Más
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
