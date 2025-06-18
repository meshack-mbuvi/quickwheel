"use client";

import WhatsAppButton from "./Whatsapp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[url('/hero-background.jpeg')] bg-cover bg-center w-full h-screen">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          Quick Wheel Logistics
        </h1>
        <p className="text-lg md:text-2xl font-light max-w-xl">
          Renting a car just got easier — flexible, affordable rentals for days
          or weeks.
        </p>
        <p className="mt-8">
          <WhatsAppButton />
        </p>
      </div>
    </section>
  );
}
