"use client";

export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 w-full px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-lg mb-8 text-center">
          Have questions about booking, pricing, or fleet availability? Our team
          is here to help.
        </p>
        <ul className="space-y-6 text-gray-700 text-lg text-center">
          <li>
            📍 <strong>Address:</strong> Nairobi, Kenya
          </li>
          <li>
            📞 <strong>Phone:</strong> +254 715 423188
          </li>
          <li>
            ✉️ <strong>Email:</strong> info@quickwheel.co.ke
          </li>
          <li>
            ⏰ <strong>Working Hours:</strong> Mon – Sat, 8:00am – 6:00pm
          </li>
        </ul>
      </div>
    </section>
  );
}
