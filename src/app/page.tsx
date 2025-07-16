'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div 
        className="absolute -z-10" 
        style={{
          top: '-10%',
          right: '-5%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(121, 86, 223, 0.15) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      ></div>
      <div 
        className="absolute -z-10" 
        style={{
          bottom: '-15%',
          left: '-10%',
          width: '70%',
          height: '70%',
          background: 'radial-gradient(circle, rgba(121, 86, 223, 0.15) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      ></div>
      
      {/* Navigation Bar */}
      <nav className="px-6 py-4 md:px-10 lg:px-20 flex justify-between items-center border-b border-gray-100 relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-md flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #9333ea 0%, #7956DF 100%)' }}>
            <span className="text-white font-bold text-lg">C</span>
            <span className="text-white font-bold text-lg absolute bottom-0 right-1">V</span>
            <div className="absolute w-[1px] h-6 bg-white/70 rotate-45 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <span className="text-gray-900 font-extrabold text-lg">Computer <span style={{ color: '#7956DF' }}>Vision</span></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-sm">
          <Link href="/" className="text-indigo-600 font-bold">
            Home
          </Link>
          <Link href="/services" className="text-gray-800 font-bold hover:text-indigo-600 transition-colors">
            Services
          </Link>
          <Link href="/features" className="text-gray-800 font-bold hover:text-indigo-600 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-800 font-bold hover:text-indigo-600 transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-gray-800 font-bold hover:text-indigo-600 transition-colors">
            Docs
          </Link>
        </div>

        {/* Register Button */}
        <button
          onClick={() => router.push('/login')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
          style={{ backgroundColor: '#7956DF' }}
        >
          Register
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-transparent py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Auto-Label. Generate. Export. <span className="block">Done.</span>
            </h1>
            
            <p className="text-xl mb-3 font-bold text-gray-900">
              Smartest Datasets <span style={{ color: '#7956DF' }} className="font-bold">Start Here</span>
            </p>
            
            <p className="text-gray-900 font-bold mb-4">
              Auto-label images using AI prompts. Generate synthetic data with
            </p>
            
            <p className="text-2xl font-bold mb-4" style={{ color: '#7956DF' }}>
              Gemini & Imagen 3.
            </p>
            
            <p className="text-gray-900 font-bold mb-8">
              Export datasets instantly.
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => router.push('/login')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
                style={{ backgroundColor: '#7956DF' }}
              >
                Get Started
              </button>
              
              <button
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-8">
              <div className="relative w-full h-72 sm:h-80 md:h-96">
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/70 rounded-lg p-4">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#7956DF' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">AI-Powered Computer Vision</h3>
                    <p className="text-gray-600 mt-2">Label, annotate, and generate data with our platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
