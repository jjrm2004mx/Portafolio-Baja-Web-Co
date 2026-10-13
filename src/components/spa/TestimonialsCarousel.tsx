import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Interior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      text: "Serenity Spa transformed my weekly routine. I finally feel relaxed and renewed. The attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      text: "The facial treatments have given my skin a glow I didn't think was possible. I'm absolutely hooked!",
      rating: 5
    },
    {
      name: "Jessica Brown",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      text: "A truly transformative experience. The massage therapy combined with skincare is the perfect wellness combo.",
      rating: 5
    },
    {
      name: "Rachel Green",
      role: "Life Coach",
      image: "https://images.unsplash.com/photo-1517746915202-cebf02d3b79d?w=400&h=400&fit=crop",
      text: "I recommend Serenity Spa to everyone. It's not just a spa—it's a sanctuary for healing and rejuvenation.",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlay(false);
      }
      if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlay(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-20 px-4 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#831843] text-center mb-6" style={{ fontFamily: 'Lora' }}>
          Loved by Our Clients
        </h2>
        <p className="text-lg text-[#475569] text-center max-w-2xl mx-auto mb-16 leading-relaxed" style={{ fontFamily: 'Raleway' }}>
          Real transformations from real people who discovered their serenity.
        </p>

        {/* Carousel Container */}
        <div
          className="relative bg-gradient-to-br from-[#FDF2F8] to-[#F1EEF5] rounded-3xl p-12 border border-[#FBCFE8] shadow-lg transition-all duration-300"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Testimonial Content */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            {/* Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#EC4899]/20 to-transparent" />
            </div>

            {/* Quote */}
            <div className="space-y-6">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#EC4899] text-[#EC4899]" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl font-semibold text-[#831843] leading-relaxed" style={{ fontFamily: 'Lora' }}>
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-lg font-bold text-[#831843]" style={{ fontFamily: 'Raleway' }}>
                  {testimonial.name}
                </p>
                <p className="text-[#475569]" style={{ fontFamily: 'Raleway' }}>
                  {testimonial.role}
                </p>
              </div>

              {/* Slide Indicator */}
              <div className="pt-4 border-t border-[#FBCFE8]">
                <p className="text-sm text-[#475569]" style={{ fontFamily: 'Raleway' }}>
                  {current + 1} of {testimonials.length}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-end">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#FBCFE8] text-[#EC4899] hover:border-[#EC4899] hover:bg-[#FDF2F8] transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#FBCFE8] text-[#EC4899] hover:border-[#EC4899] hover:bg-[#FDF2F8] transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:ring-offset-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  setIsAutoPlay(false);
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? 'bg-[#EC4899] w-8' : 'bg-[#FBCFE8]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Accessibility Info */}
        <p className="text-center text-sm text-[#475569] mt-6" style={{ fontFamily: 'Raleway' }}>
          Use arrow keys to navigate between testimonials
        </p>
      </div>
    </section>
  );
}
