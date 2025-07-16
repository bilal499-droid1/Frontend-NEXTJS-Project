"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FeaturesContent from '@/components/FeaturesContent';

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div
        className="absolute -z-10 left-0 top-0 bottom-0"
        style={{
          width: "20%",
          background: "rgba(237, 233, 254, 0.5)",
          borderRadius: "0 100% 100% 0 / 0 50% 50% 0",
        }}
      ></div>

      {/* Navigation Bar */}
      <nav className="px-6 py-4 md:px-10 lg:px-20 flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div
            className="w-10 h-10 rounded-md flex items-center justify-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #9333ea 0%, #7956DF 100%)",
            }}
          >
            <span className="text-white font-bold text-lg">C</span>
            <span className="text-white font-bold text-lg absolute bottom-0 right-1">
              V
            </span>
            <div className="absolute w-[1px] h-6 bg-white/70 rotate-45 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <span className="text-gray-900 font-extrabold text-lg">
            Computer <span style={{ color: "#7956DF" }}>Vision</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-sm">
          <Link href="/" className="text-gray-800 font-bold hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-800 font-bold hover:text-indigo-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/features"
            className="text-indigo-600 font-bold"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-800 font-bold hover:text-indigo-600 transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Register Button */}
        <button
          onClick={() => router.push("/login")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          style={{ backgroundColor: "#7956DF" }}
        >
          Register
        </button>
      </nav>

      {/* Features Content */}
      <FeaturesContent />
    </div>
  );
}
