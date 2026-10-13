import { Card } from '@/components/shared/Card'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  details?: string[]
}

export function ServiceCard({ icon, title, description, details }: ServiceCardProps) {
  return (
    <Card className="p-6 h-full hover:border-amber-400 hover:shadow-lg bg-white border border-slate-200 transition-all duration-300">
      <div className="mb-4">
        <div className="text-5xl mb-4 drop-shadow-sm">{icon}</div>
        <h3 className="text-h5 text-slate-900 font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-body-sm text-slate-600 mb-4 leading-relaxed">{description}</p>
      
      {details && details.length > 0 && (
        <ul className="mb-4 space-y-2">
          {details.map((detail, i) => (
            <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
              <span className="text-amber-600 font-bold mt-1">✓</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      <button className="text-amber-700 font-semibold text-sm hover:text-amber-900 hover:underline transition-colors">
        Más detalles →
      </button>
    </Card>
  )
}
