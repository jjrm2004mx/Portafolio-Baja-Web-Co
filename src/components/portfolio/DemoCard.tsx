import { Link } from 'react-router-dom'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'

interface DemoCardProps {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

export function DemoCard({
  id,
  title,
  description,
  icon,
  image,
}: DemoCardProps) {
  return (
    <Link to={`/demos/${id}`}>
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-navy-100 to-cyan-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Icon and title row */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{icon}</span>
            <h3 className="text-h5 font-semibold text-navy-600">{title}</h3>
          </div>

          {/* Description */}
          <p className="text-body-sm text-neutral-600 mb-4">{description}</p>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size="sm"
            className="w-full"
            onClick={(e) => {
              e.preventDefault()
              // Navigate handled by Link
            }}
          >
            Ver Demo →
          </Button>
        </div>
      </Card>
    </Link>
  )
}
