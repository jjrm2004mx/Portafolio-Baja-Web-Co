import { Card } from '@/components/shared/Card'

interface AgentCardProps {
  name: string
  title: string
  specialization: string
  transactions: number
  photo: string
  bio: string
}

export function AgentCard({ name, specialization, transactions, photo, bio }: AgentCardProps) {
  return (
    <Card variant="elevated" className="overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Photo */}
      <div className="relative h-64 overflow-hidden bg-neutral-200">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent flex items-end">
          <div className="w-full p-6 text-white">
            <p className="text-xs text-blue-300 font-semibold mb-1 font-sans">AGENTE</p>
            <h3 className="font-serif text-h4 font-bold mb-1">{name}</h3>
            <p className="font-sans text-sm text-neutral-200">{specialization}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{bio}</p>

        {/* Stats */}
        <div className="flex gap-4 mb-6 py-4 border-t border-b border-neutral-200">
          <div>
            <p className="font-serif text-2xl font-bold text-blue-600">{transactions}+</p>
            <p className="font-sans text-xs text-neutral-600">Transacciones</p>
          </div>
          <div>
            <p className="font-serif text-2xl font-bold text-teal-900">15+</p>
            <p className="font-sans text-xs text-neutral-600">Años Exp.</p>
          </div>
        </div>

        {/* CTA */}
        <button className="font-sans w-full px-4 py-3 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
          Contactar
        </button>
      </div>
    </Card>
  )
}
