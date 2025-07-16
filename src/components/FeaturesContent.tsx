'use client';

import React from 'react';

export default function FeaturesContent() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 lg:px-20 bg-white relative overflow-hidden">
      {/* Large curved shape on left side */}
      <div
        className="absolute -z-10 left-0 top-0 bottom-0"
        style={{
          width: "30%",
          background: "rgba(237, 233, 254, 0.5)",
          borderRadius: "0 100% 100% 0 / 0 50% 50% 0",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
            Powerful Features Built for
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            <span style={{ color: '#7956DF' }}>Vision AI Teams</span>
          </h3>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Label Anything with a
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold" style={{ color: '#7956DF' }}>
            Single Prompt
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Prompt-Based Labeling Card */}
          <div 
            className="rounded-lg p-6 transition-all duration-300" 
            style={{ backgroundColor: "#EDE9FE", minHeight: "200px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Prompt-Based Labeling</h3>
            <p className="text-gray-700 leading-relaxed">
              Type &quot;find all safety helmets&quot; and watch the system detect and label all objects instantly.
            </p>
          </div>

          {/* AI Credit System Card */}
          <div 
            className="rounded-lg p-6 transition-all duration-300" 
            style={{ backgroundColor: "#EDE9FE", minHeight: "200px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">AI Credit System</h3>
            <p className="text-gray-700 leading-relaxed">
              Transparent usage with AI credits. Only pay for what you use &mdash; top up anytime.
            </p>
          </div>

          {/* High-Speed Rendering Card */}
          <div 
            className="rounded-lg p-6 transition-all duration-300" 
            style={{ backgroundColor: "#EDE9FE", minHeight: "200px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">High-Speed Rendering</h3>
            <p className="text-gray-700 leading-relaxed">
              We use React + UI virtualization to ensure smooth scrolling even for 10,000+ images.
            </p>
          </div>

          {/* Clean UI/UX Card */}
          <div 
            className="rounded-lg p-6 transition-all duration-300" 
            style={{ backgroundColor: "#EDE9FE", minHeight: "200px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Clean UI/UX</h3>
            <p className="text-gray-700 leading-relaxed">
              User-friendly experience that makes annotation simple and fast for every skill level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
