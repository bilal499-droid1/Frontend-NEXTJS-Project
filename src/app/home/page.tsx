"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from '@/components/Footer';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 md:px-10 lg:px-20 flex justify-between items-center border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ background: "#7956DF" }}
          >
            <span className="text-white font-bold text-sm">CV</span>
          </div>
          <span className="text-gray-900 font-bold">
            Computer <span style={{ color: "#7956DF" }}>Vision</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-sm">
          <Link href="/home" className="text-indigo-600 font-semibold">
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/features"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Register Button */}
        <button
          onClick={() => router.push("/")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          style={{ backgroundColor: "#7956DF" }}
        >
          Register
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 px-6 md:px-10 lg:px-20">
        {/* Background decoration - similar to login page but positioned differently */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 opacity-10"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
            borderRadius: "40% 60% 70% 30%",
            zIndex: 0,
          }}
        ></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Auto-Label. Generate. Export. <span className="block">Done.</span>
            </h1>

            <p className="text-xl mb-3">
              Smarter Datasets{" "}
              <span style={{ color: "#7956DF" }} className="font-semibold">
                Start Here
              </span>
            </p>

            <p className="text-gray-600 mb-4">
              Auto-label images using AI prompts. Generate synthetic data with
            </p>

            <p className="text-2xl font-bold mb-4" style={{ color: "#7956DF" }}>
              Gemini & Imagen 3.
            </p>

            <p className="text-gray-600 mb-8">Export datasets instantly.</p>

            <div className="flex space-x-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
                style={{ backgroundColor: "#7956DF" }}
              >
                Get Started
              </button>

              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/hero-image.png"
                alt="Computer Vision Demo"
                width={600}
                height={400}
                className="w-full h-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x400?text=Computer+Vision";
                }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
