import { Card } from '@/components/shared/Card'

interface MenuItemCardProps {
  icon: string
  title: string
  description: string
  price: string
  dietary?: string
}

export function MenuItemCard({
  icon,
  title,
  description,
  price,
  dietary,
}: MenuItemCardProps) {
  return (
    <Card className="p-6 h-full hover:border-red-600 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      {/* Image/Icon */}
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-h5 text-red-700 font-semibold mb-2 font-serif">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-neutral-600 mb-4 min-h-12 font-sans">
        {description}
      </p>

      {/* Dietary info */}
      {dietary && (
        <p className="text-xs text-red-600 font-semibold mb-4">
          {dietary}
        </p>
      )}

      {/* Price footer */}
      <div className="pt-4 border-t border-neutral-200">
        <span className="text-lg font-bold text-red-600">${price}</span>
      </div>
    </Card>
  )
}
