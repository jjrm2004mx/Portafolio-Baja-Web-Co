export default function ProblemStatement() {
  return (
    <section className="py-20 px-4 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#831843] mb-6" style={{ fontFamily: 'Lora' }}>
            The Stress Never Stops
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway' }}>
            Daily stress, exhaustion, and tension accumulate in your body and mind. Most solutions are temporary fixes that don't address the root cause of your fatigue and imbalance.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-[#F1EEF5] border border-[#FBCFE8] hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ fontFamily: 'Lora' }}>🌙</div>
            <h3 className="text-xl font-bold text-[#831843] mb-3" style={{ fontFamily: 'Raleway' }}>Poor Sleep Quality</h3>
            <p className="text-[#475569] text-sm" style={{ fontFamily: 'Raleway' }}>
              Tension and stress prevent deep, restorative sleep.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-[#F1EEF5] border border-[#FBCFE8] hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ fontFamily: 'Lora' }}>😣</div>
            <h3 className="text-xl font-bold text-[#831843] mb-3" style={{ fontFamily: 'Raleway' }}>Chronic Pain & Tension</h3>
            <p className="text-[#475569] text-sm" style={{ fontFamily: 'Raleway' }}>
              Muscle knots and body aches limit your mobility and comfort.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#FDF2F8] to-[#F1EEF5] border border-[#FBCFE8] hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4" style={{ fontFamily: 'Lora' }}>🔴</div>
            <h3 className="text-xl font-bold text-[#831843] mb-3" style={{ fontFamily: 'Raleway' }}>Dull, Tired Skin</h3>
            <p className="text-[#475569] text-sm" style={{ fontFamily: 'Raleway' }}>
              Without proper care, skin loses vitality and radiance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
