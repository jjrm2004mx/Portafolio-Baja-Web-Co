import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'STARTER',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for fitness enthusiasts starting their journey',
      features: [
        'Unlimited class access',
        'Basic progress tracking',
        'Mobile app access',
        'Community support',
        '1 Free consultation/month'
      ],
      highlighted: false,
      cta: 'START FREE TRIAL'
    },
    {
      name: 'PRO',
      price: '$19.99',
      period: '/month',
      description: 'Most popular - everything you need for serious results',
      features: [
        'All Starter features',
        'AI-powered training plans',
        'Real-time performance analytics',
        'Priority trainer support',
        'Unlimited consultations',
        'Nutrition meal plans',
        'Exclusive member events'
      ],
      highlighted: true,
      cta: 'GET PRO ACCESS'
    },
    {
      name: 'ELITE',
      price: '$39.99',
      period: '/month',
      description: 'Premium experience with exclusive features',
      features: [
        'All Pro features',
        'Personal training sessions (4/month)',
        'Custom meal planning & coaching',
        '1-on-1 strategy sessions',
        'VIP gym access priority',
        'Exclusive elite community',
        'Advanced biometric tracking'
      ],
      highlighted: false,
      cta: 'BECOME ELITE'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#111827] to-[#0F172A] py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#22C55E] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-[#F97316] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full mb-6">
            <span className="text-[#22C55E] text-sm font-bold font-['Barlow_Condensed'] tracking-wide">FLEXIBLE PLANS</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            CHOOSE YOUR PLAN
          </h2>
          <p className="font-['Barlow'] text-[#CBD5E1] max-w-2xl mx-auto">
            All plans include 30-day free trial. Cancel anytime, no hidden fees.
          </p>
        </div>

        {/* Pricing Cards Grid - CLI feature-rich pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 group ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-br from-[#313742] to-[#1F2937] border-2 border-[#F97316] shadow-2xl shadow-[#F97316]/20 hover:shadow-[#F97316]/40'
                  : 'bg-[#313742]/40 backdrop-blur-sm border border-[#374151]/50 hover:border-[#F97316]/30 hover:bg-[#313742]/60'
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white px-4 py-1 rounded-full text-xs font-bold font-['Barlow_Condensed'] tracking-wide">
                    RECOMMENDED
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8 h-full flex flex-col">
                {/* Plan Name */}
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#F8FAFC] mb-2 tracking-wide">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="font-['Barlow'] text-[#CBD5E1] text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className={`font-['Barlow_Condensed'] text-4xl font-bold tracking-tight ${
                      plan.highlighted ? 'text-[#F97316]' : 'text-[#F8FAFC]'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="font-['Barlow'] text-[#CBD5E1]">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-bold font-['Barlow_Condensed'] text-lg tracking-wide mb-8 transition-all duration-300 cursor-pointer ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white hover:shadow-lg hover:shadow-[#F97316]/50 hover:scale-105'
                    : 'border-2 border-[#F97316] text-white hover:bg-[#F97316]/10 hover:border-[#FB923C]'
                }`}>
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="font-['Barlow'] text-[#CBD5E1] text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl ${
                plan.highlighted ? 'bg-[#F97316]' : 'bg-[#22C55E]'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-['Barlow'] text-[#CBD5E1] mb-6">
            Need a corporate membership or bulk licensing?
          </p>
          <button className="px-8 py-4 border-2 border-[#F97316] text-white font-bold font-['Barlow_Condensed'] text-lg rounded-lg hover:bg-[#F97316]/20 transition-all duration-300 cursor-pointer tracking-wide">
            CONTACT SALES
          </button>
        </div>
      </div>
    </section>
  );
}
