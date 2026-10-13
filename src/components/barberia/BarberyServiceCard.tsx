import { Card } from '@/components/shared/Card'

interface BarberyServiceCardProps {
  icon: string
  title: string
  description: string
  price: string
  time: string
}

export function BarberyServiceCard({
  icon,
  title,
  description,
  price,
  time,
}: BarberyServiceCardProps) {
  return (
    <Card className="p-6 h-full hover:border-lavender-400 hover:bg-rose-50 transition-all duration-300 group cursor-pointer">
      {/* Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-h5 text-rose-700 font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="font-sans text-body-sm text-rose-600 mb-4">{description}</p>

      {/* Time and price footer */}
      <div className="flex items-center justify-between pt-4 border-t border-rose-200">
        <span className="text-sm font-semibold text-rose-600">{time}</span>
        <span className="text-lg font-bold text-lavender-500">{price}</span>
      </div>
    </Card>
  )
}
