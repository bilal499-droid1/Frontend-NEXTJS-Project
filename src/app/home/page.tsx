"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Always show mobile menu on very small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setMobileMenuOpen(true);
      } else {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    // Only allow toggling if width > 400px
    if (window.innerWidth > 400) {
      setMobileMenuOpen((open) => !open);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="px-4 py-4 md:px-10 lg:px-20 flex justify-between items-center border-b border-gray-100 relative">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
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

        {/* Register Button (Desktop) */}
        <button
          onClick={() => router.push("/")}
          className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          style={{ backgroundColor: "#7956DF" }}
        >
          Register
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute z-50 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-4">
            <Link
              href="/home"
              className="block text-indigo-600 font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/features"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <button
              onClick={() => {
                router.push("/");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
              style={{ backgroundColor: "#7956DF" }}
            >
              Register
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-10 md:py-16 px-4 md:px-10 lg:px-20">
        {/* Background decoration - similar to login page but positioned differently */}
        <div
          className="absolute -top-24 -left-24 w-64 md:w-96 h-64 md:h-96 opacity-10"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
            borderRadius: "40% 60% 70% 30%",
            zIndex: 0,
          }}
        ></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              Auto-Label. Generate. Export. <span className="block">Done.</span>
            </h1>

            <p className="text-lg md:text-xl mb-2 md:mb-3">
              Smarter Datasets{" "}
              <span style={{ color: "#7956DF" }} className="font-semibold">
                Start Here
              </span>
            </p>

            <p className="text-gray-600 mb-3 text-sm md:text-base">
              Auto-label images using AI prompts. Generate synthetic data with
            </p>

            <p
              className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
              style={{ color: "#7956DF" }}
            >
              Gemini & Imagen 3.
            </p>

            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Export datasets instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors w-full sm:w-auto"
                style={{ backgroundColor: "#7956DF" }}
              >
                Get Started
              </button>

              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-8 lg:mt-0">
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
