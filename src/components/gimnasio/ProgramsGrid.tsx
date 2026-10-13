import React from 'react';
import { Zap, Dumbbell, Leaf, Flame } from 'lucide-react';

export default function ProgramsGrid() {
  const programs = [
    {
      icon: Zap,
      title: 'HIIT TRAINING',
      description: 'High-intensity interval training for maximum results in minimum time',
      duration: '45 min',
      level: 'Intermediate',
      color: '#F97316'
    },
    {
      icon: Dumbbell,
      title: 'STRENGTH',
      description: 'Build muscle and increase power with guided resistance training',
      duration: '60 min',
      level: 'All Levels',
      color: '#FB923C'
    },
    {
      icon: Leaf,
      title: 'YOGA & FLOW',
      description: 'Flexibility, balance, and mental clarity through mindful movement',
      duration: '50 min',
      level: 'Beginner',
      color: '#22C55E'
    },
    {
      icon: Flame,
      title: 'BOXING',
      description: 'Master boxing techniques while burning calories and building confidence',
      duration: '55 min',
      level: 'Intermediate',
      color: '#06B6D4'
    }
  ];

  return (
    <section className="w-full bg-[#1F2937] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[#22C55E] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - CLI feature-rich pattern */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full mb-6">
            <span className="text-[#22C55E] text-sm font-bold font-['Barlow_Condensed'] tracking-wide">TRAINING PROGRAMS</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            EVERYTHING YOU NEED
          </h2>
          <p className="font-['Barlow'] text-[#CBD5E1] max-w-2xl mx-auto">
            Diverse programs designed for every fitness level and goal
          </p>
        </div>

        {/* Programs Grid - CLI large sections (48px+ gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#313742]/40 backdrop-blur-sm p-8 rounded-xl border border-[#374151]/50 hover:border-current hover:bg-[#313742]/80 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{ '--hover-color': program.color } as React.CSSProperties}
              >
                {/* Hover gradient background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                  style={{ backgroundColor: program.color }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${program.color}20`, color: program.color }}
                  >
                    <Icon className="w-6 h-6 font-bold" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#F8FAFC] mb-3 tracking-wide">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Barlow'] text-[#CBD5E1] text-sm mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#374151]/30">
                    <div className="font-['Barlow_Condensed'] text-xs font-bold text-[#CBD5E1] uppercase tracking-wide">
                      {program.duration}
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-bold font-['Barlow_Condensed'] tracking-wide"
                      style={{ backgroundColor: `${program.color}20`, color: program.color }}
                    >
                      {program.level}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
