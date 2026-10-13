import { useEffect, useState } from 'react'
import { Container } from '@/components/shared/Container'
import { DemoCard } from './DemoCard'

interface Demo {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

interface DemoShowcaseProps {
  demos: Demo[]
}

export function DemoShowcase({ demos }: DemoShowcaseProps) {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const demoId = entry.target.getAttribute('data-demo-id')
            if (demoId) {
              setVisibleCards((prev) => new Set(prev).add(demoId))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50">
      <Container>
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-h2 sm:text-5xl font-bold text-navy-900 mb-4">
            Nuestras Demostraciones
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Cada demo es una landing page única diseñada con estrategia y
            estilo específico para su sector. Explora y descubre nuestro
            trabajo.
          </p>
        </div>

        {/* Demos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <div
              key={demo.id}
              data-demo-id={demo.id}
              className={`transition-all duration-700 ease-out ${
                visibleCards.has(demo.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <DemoCard {...demo} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
