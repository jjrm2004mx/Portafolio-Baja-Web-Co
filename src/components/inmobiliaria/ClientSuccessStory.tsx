import { Card } from '@/components/shared/Card'

interface SuccessStoryProps {
  clientName: string
  clientRole: string
  quote: string
  story: string
  image: string
  propertyType: string
  rating: number
}

export function ClientSuccessStory({
  clientName,
  clientRole,
  quote,
  story,
  image,
  propertyType,
  rating,
}: SuccessStoryProps) {
  return (
    <Card variant="elevated" className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="h-80 md:h-full bg-neutral-200 overflow-hidden">
          <img src={image} alt={clientName} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, i) => (
              <span key={i} className="text-blue-500 text-xl">
                ★
              </span>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mb-6">
            <p className="font-sans text-lg italic text-neutral-700 leading-relaxed border-l-4 border-blue-600 pl-4 mb-4">
              "{quote}"
            </p>
          </blockquote>

          {/* Story */}
          <p className="font-sans text-neutral-600 text-sm mb-6 line-clamp-3">{story}</p>

          {/* Client Info */}
          <div className="flex items-end justify-between">
            <div>
              <p className="font-serif font-bold text-teal-900">{clientName}</p>
              <p className="font-sans text-xs text-neutral-600">
                {clientRole} • {propertyType}
              </p>
            </div>
            <button className="font-sans px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-all duration-300">
              Leer Historia
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
