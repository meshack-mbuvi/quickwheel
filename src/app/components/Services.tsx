"use client";

import { FaCalendarAlt, FaCarSide, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaCarSide size={32} />,
    title: "Flexible Car Rentals",
    description:
      "Rent a vehicle for several days or weeks with ease. Perfect for vacations, business trips, or extended stays.",
  },
  {
    icon: <FaCalendarAlt size={32} />,
    title: "Custom Booking Durations",
    description:
      "Choose a rental period that suits your schedule — daily, weekly, or even longer options available.",
  },
  {
    icon: <FaHeadset size={32} />,
    title: "24/7 Customer Support",
    description:
      "Need help with booking, extensions, or vehicle changes? Our team is always available to assist.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gray-100 flex items-center h-screen w-full text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
