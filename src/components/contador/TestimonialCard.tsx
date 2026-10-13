interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating?: number
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-amber-400 text-lg">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-700 italic mb-4 leading-relaxed">
        "{quote}"
      </p>

      {/* Author */}
      <div className="border-t border-slate-200 pt-4">
        <p className="font-semibold text-slate-900">{author}</p>
        <p className="text-sm text-slate-600">{role}</p>
        <p className="text-xs text-amber-700 font-medium">{company}</p>
      </div>
    </div>
  )
}
