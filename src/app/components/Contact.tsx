"use client";

import WhatsAppButton from "./Whatsapp";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 w-full px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-10 text-gray-700">
          Have questions about booking, pricing, or fleet availability? Our team
          is here to help.
        </p>

        {/* Contact Info */}
        <div className="space-y-6 text-lg text-gray-700">
          {/* WhatsApp */}
          <div>
            <WhatsAppButton />
          </div>

          {/* Email */}
          <div>
            ✉️ <strong>Email:</strong> info@quickwheel.co.ke
          </div>

          {/* Address */}
          <div>
            📍 <strong>Address:</strong> Nairobi, Kenya
          </div>

          {/* Hours */}
          <div>
            ⏰ <strong>Working Hours:</strong> Mon – Sat, 8:00am – 6:00pm
          </div>
        </div>
      </div>
    </section>
  );
}
