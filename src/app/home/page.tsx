export default function Hero() {
  return (
    <div className="relative bg-[url('/hero-background.jpeg')] bg-cover bg-center w-full h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Quick Wheel Logistics
        </h1>
        <p className="text-xl md:text-4xl font-light">
          Now <br /> it&apos;s easy for you to <br /> rent a car
        </p>
      </div>
    </div>
  );
}
