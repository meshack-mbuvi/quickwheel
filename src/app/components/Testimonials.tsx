"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Jane M.",
    quote:
      "Quick Wheel made my road trip to Naivasha effortless. The car was clean, well-serviced, and affordable!",
  },
  {
    name: "Samuel K.",
    quote:
      "Highly recommend! Booking was easy, and support was excellent. I’ll be back for my next trip.",
  },
  {
    name: "Aisha N.",
    quote:
      "Great customer service and reliable vehicles. I rented for a week and had zero issues.",
  },
];

export default function TestimonialCarousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!slider) return;

    timerRef.current = setInterval(() => {
      slider.current?.next();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slider]);

  return (
    <section className="bg-white py-20 px-6" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-gray-100 p-8 rounded-xl shadow-md">
              <p className="text-xl italic text-gray-700 mb-4">
                &quot;{item.quote}&quot;
              </p>
              <h4 className="text-lg font-semibold text-gray-900">
                – {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
