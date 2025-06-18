"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Quick Wheel Logistics
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Quick Wheel Logistics is a trusted car rental company dedicated to
            making vehicle hire simple, affordable, and flexible. Whether you
            need a car for a day, a week, or even longer, we’ve got you covered
            with a fleet of well-maintained vehicles tailored to meet your
            needs.
          </p>
          <p className="text-lg leading-relaxed">
            We serve both individuals and businesses, ensuring smooth and
            reliable transportation across the region. With competitive pricing,
            24/7 customer support, and a commitment to quality service, Quick
            Wheel makes your journey worry-free from start to finish.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about.jpeg"
            alt="Quick Wheel Logistics cars"
            className="w-full h-full object-cover"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
