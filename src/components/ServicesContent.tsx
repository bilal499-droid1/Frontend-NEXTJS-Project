'use client';

import React from 'react';

export default function ServicesContent() {
  return (
    <section id="services" className="py-20 px-6 md:px-10 lg:px-20 bg-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div
        className="absolute -z-10 left-0 top-1/2 transform -translate-y-1/2"
        style={{
          width: "35%",
          height: "90%",
          background: "rgba(237, 233, 254, 0.5)",
          borderRadius: "0 50% 50% 0",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
            We extend our <span style={{ color: '#7956DF' }}>services</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black">
            to the <span style={{ color: '#7956DF' }}>wide</span> variety
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Auto-Labeling Card */}
          <div 
            className="rounded-lg p-8 transition-all duration-300" 
            style={{ backgroundColor: "#DED7F2", minHeight: "180px", width: "100%" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Auto-Labeling</h3>
            <p className="text-gray-700 leading-relaxed">
              Use natural prompts to automatically label images with Gemini 2.5. Reduce hours of manual effort in seconds.
            </p>
          </div>

          {/* Manual Annotation Card */}
          <div 
            className="rounded-lg p-8 transition-all duration-300" 
            style={{ backgroundColor: "#DED7F2", minHeight: "180px", width: "100%" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Manual Annotation</h3>
            <p className="text-gray-700 leading-relaxed">
              Use our modern annotation canvas (Konva.js) to draw bounding boxes or future polygon tools with ease.
            </p>
          </div>

          {/* Synthetic Image Generation Card */}
          <div 
            className="rounded-lg p-8 transition-all duration-300" 
            style={{ backgroundColor: "#DED7F2", minHeight: "180px", width: "100%" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Synthetic Image Generation</h3>
            <p className="text-gray-700 leading-relaxed">
              Upload 1-5 seed images and generate hundreds of variations using Imagen 3 — perfect for data augmentation.
            </p>
          </div>

          {/* Smart Export Card */}
          <div 
            className="rounded-lg p-8 transition-all duration-300" 
            style={{ backgroundColor: "#DED7F2", minHeight: "180px", width: "100%" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Export</h3>
            <p className="text-gray-700 leading-relaxed">
              Export your labeled datasets in popular formats like YOLO TXT and COCO JSON, ready for training ML models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
