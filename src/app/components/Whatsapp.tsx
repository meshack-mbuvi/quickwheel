import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/254715423188"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg">
      📞 Chat on WhatsApp
    </Link>
  );
}
