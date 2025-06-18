"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose a plan that fits your journey — rent by the number of days you
          need.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Economy</h3>
            <p className="text-3xl font-bold mb-2">
              KES 3,500<span className="text-base font-normal">/day</span>
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ Compact cars</li>
              <li>✓ Manual/Automatic</li>
              <li>✓ Ideal for city travel</li>
            </ul>
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-200">
              Book Now
            </Link>
          </div>

          {/* Plan 2 */}
          <div className="bg-blue-100 rounded-xl shadow-xl p-8 border-4 border-blue-600 scale-105">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-3xl font-bold mb-2">
              KES 3,000
              <span className="text-base font-normal">/day (7+ days)</span>
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ Sedans & Hatchbacks</li>
              <li>✓ Unlimited Mileage</li>
              <li>✓ 24/7 Support</li>
            </ul>
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-200">
              Book Now
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="bg-gray-100 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Executive</h3>
            <p className="text-3xl font-bold mb-2">
              KES 5,000<span className="text-base font-normal">/day</span>
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✓ SUVs & Luxury cars</li>
              <li>✓ Chauffeur available</li>
              <li>✓ Free delivery & pickup</li>
            </ul>
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-200">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
