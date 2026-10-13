import { Star } from 'lucide-react';

export default function TrainersSection() {
  const trainers = [
    {
      name: 'SARAH MILLER',
      specialty: 'STRENGTH & CONDITIONING',
      certification: 'NASM-CPT | ACE-CES',
      image: 'https://images.unsplash.com/photo-1439149912108-ada44219e6e5?w=300&h=400&fit=crop&q=80',
      clients: '1200+'
    },
    {
      name: 'MARCUS JOHNSON',
      specialty: 'HIIT & BOXING',
      certification: 'ISSA-CPT | Boxing Coach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80',
      clients: '950+'
    },
    {
      name: 'ELENA RODRIGUEZ',
      specialty: 'YOGA & MINDFULNESS',
      certification: 'RYT-500 | Holistic Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&q=80',
      clients: '1100+'
    },
    {
      name: 'JAMES CHEN',
      specialty: 'NUTRITION & WELLNESS',
      certification: 'Registered Dietitian | Wellness Coach',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&q=80',
      clients: '800+'
    }
  ];

  return (
    <section className="w-full bg-[#1F2937] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#FB923C] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FB923C]/20 border border-[#FB923C]/30 rounded-full mb-6">
            <span className="text-[#FB923C] text-sm font-bold font-['Barlow_Condensed'] tracking-wide">MEET THE TEAM</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            CERTIFIED TRAINERS
          </h2>
          <p className="font-['Barlow'] text-[#CBD5E1] max-w-2xl mx-auto">
            World-class fitness experts dedicated to your transformation
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="group relative bg-[#313742]/40 backdrop-blur-sm rounded-xl border border-[#374151]/50 hover:border-[#F97316]/50 overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[#1F2937]">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                {/* Name */}
                <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#F8FAFC] mb-2 tracking-wide">
                  {trainer.name}
                </h3>

                {/* Specialty */}
                <p className="font-['Barlow_Condensed'] text-[#F97316] text-sm font-bold mb-3 tracking-wider">
                  {trainer.specialty}
                </p>

                {/* Certification */}
                <p className="font-['Barlow'] text-[#CBD5E1] text-xs mb-4 leading-relaxed">
                  {trainer.certification}
                </p>

                {/* Rating & Clients */}
                <div className="flex items-center justify-between pt-4 border-t border-[#374151]/30">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                    ))}
                  </div>
                  <span className="font-['Barlow_Condensed'] text-[#22C55E] text-xs font-bold">
                    {trainer.clients} CLIENTS
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
