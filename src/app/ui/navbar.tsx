"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 px-12 py-4 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Quick Wheel</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex ml-auto w-1/2 justify-end space-x-10 text-gray-700 font-medium">
        <Link href="#home" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="#services" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="#pricing" className="hover:text-blue-500">
          Pricing
        </Link>

        <Link href="#contact" className="hover:text-blue-500">
          Contact
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-800 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu">
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden px-6 py-4 flex flex-col space-y-4">
          <Link href="#home" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#services" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-blue-500">
            Pricing
          </Link>

          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
