"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #9333ea 0%, #7956DF 100%)",
                }}
              >
                <span className="text-white font-bold text-lg">C</span>
                <span className="text-white font-bold text-lg absolute bottom-0 right-1">
                  V
                </span>
                <div className="absolute w-[1px] h-6 bg-white/70 rotate-45 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </div>
              <div>
                <Link
                  href="/features"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Features
                </Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Careers
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Partners
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Section */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Legal Section</h3>
            <div className="space-y-2">
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Refund Policy
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and social links */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Computer Vision. All rights
            reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
