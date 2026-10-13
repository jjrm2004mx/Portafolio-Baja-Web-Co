import React from 'react';
import { Brain, Activity, Users, Apple } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI TRAINING',
      description: 'Personalized workout plans that adapt to your progress and goals in real-time',
      color: '#F97316'
    },
    {
      icon: Activity,
      title: 'REAL-TIME TRACKING',
      description: 'Monitor your metrics, calories, and performance with advanced analytics dashboard',
      color: '#FB923C'
    },
    {
      icon: Users,
      title: 'LIVE CLASSES',
      description: 'Join energetic group sessions with certified instructors streaming 24/7',
      color: '#22C55E'
    },
    {
      icon: Apple,
      title: 'NUTRITION PLAN',
      description: 'Custom meal plans and recipes designed by our nutrition specialists for optimal results',
      color: '#06B6D4'
    }
  ];

  return (
    <section className="w-full bg-[#111827] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/20 border border-[#F97316]/30 rounded-full mb-6">
            <span className="text-[#F97316] text-sm font-bold font-['Barlow_Condensed'] tracking-wide">PLATFORM FEATURES</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            EVERYTHING YOU NEED TO SUCCEED
          </h2>
          <p className="font-['Barlow'] text-[#CBD5E1] max-w-2xl mx-auto">
            Complete fitness ecosystem with cutting-edge technology and expert guidance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#313742]/30 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-[#374151]/40 hover:border-current hover:bg-[#313742]/70 transition-all duration-300 overflow-hidden"
                style={{ '--hover-color': feature.color } as React.CSSProperties}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: feature.color }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex gap-6">
                  {/* Icon Box */}
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                  >
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#F8FAFC] mb-3 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="font-['Barlow'] text-[#CBD5E1] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold font-['Barlow_Condensed'] text-lg rounded-lg hover:shadow-2xl hover:shadow-[#F97316]/50 hover:scale-105 transition-all duration-300 cursor-pointer tracking-wide">
            EXPLORE ALL FEATURES
          </button>
        </div>
      </div>
    </section>
  );
}
