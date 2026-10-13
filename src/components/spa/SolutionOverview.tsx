import { Sparkles, Heart, Zap, Leaf } from 'lucide-react';

export default function SolutionOverview() {
  const solutions = [
    {
      icon: Sparkles,
      title: "Holistic Treatments",
      description: "Our expertly curated treatments work together to restore balance to your entire body and mind."
    },
    {
      icon: Heart,
      title: "Premium Ingredients",
      description: "We use only the finest organic and sustainable products for visible, lasting results."
    },
    {
      icon: Zap,
      title: "Expert Therapists",
      description: "Our certified wellness professionals are dedicated to your complete transformation."
    },
    {
      icon: Leaf,
      title: "Natural & Organic",
      description: "All treatments and products are sourced from nature's purest healing ingredients."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FDF2F8] to-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#831843] mb-6" style={{ fontFamily: 'Lora' }}>
            Your Path to Transformation
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
            At Serenity Spa, we've designed a complete wellness ecosystem that works together to restore your natural radiance and inner peace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border-2 border-[#FBCFE8] hover:border-[#EC4899] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F9A8D4] to-[#FBCFE8] flex items-center justify-center mb-4 group-hover:from-[#EC4899] group-hover:to-[#8B5CF6] transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#831843] mb-3" style={{ fontFamily: 'Lora' }}>
                  {solution.title}
                </h3>
                <p className="text-[#475569] leading-relaxed" style={{ fontFamily: 'Raleway' }}>
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-[#831843] mb-6 font-semibold" style={{ fontFamily: 'Raleway' }}>
            Ready to experience the difference?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'Raleway' }}>
            Explore All Treatments
          </button>
        </div>
      </div>
    </section>
  );
}
