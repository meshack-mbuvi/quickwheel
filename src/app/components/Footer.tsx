import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] w-full text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-red-400 mb-3">Quick Wheel</h3>
          <p className="text-gray-300">
            Reliable car rentals for every journey. Choose from our wide fleet
            and enjoy affordable pricing, convenience, and support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-300">
            <li>📍 Nairobi, Kenya</li>
            <li>📞 +254 715 423188</li>
            <li>✉️ info@quickwheel.co.ke</li>
            <li>🕒 Mon – Sat, 8:00am – 6:00pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Quick Wheel Logistics. All rights reserved.
      </div>
    </footer>
  );
}
