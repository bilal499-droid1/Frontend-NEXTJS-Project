"use client";

import React from "react";

export default function PricingContent() {
  return (
    <section
      id="pricing"
      className="py-20 px-6 md:px-10 lg:px-20 bg-white relative overflow-hidden"
    >
      {/* Large curved shape on left side */}
      <div
        className="absolute -z-10 left-0 top-0 bottom-0"
        style={{
          width: "15%",
          background: "rgba(237, 233, 254, 0.5)",
          borderRadius: "0 100% 100% 0",
        }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
            Flexible Pricing for Every
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#7956DF" }}
          >
            Stage of Growth.
          </h3>
        </div>

        {/* Speech bubble "Pay Only for What You Use" */}
        <div className="relative max-w-xs mx-auto md:mx-0 md:ml-auto md:mr-16 mb-16">
          <div
            className="rounded-xl p-3 bg-white border-2 border-black relative"
            style={{ maxWidth: "180px" }}
          >
            <p className="text-center">
              <span className="text-black font-extrabold">
                Pay Only for What
              </span>{" "}
              <br />
              <span style={{ color: "#7956DF" }} className="font-black text-lg">
                You Use
              </span>
            </p>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-10 w-4 h-4 bg-white border-r-2 border-b-2 border-black transform rotate-45"></div>
          </div>
          {/* Circle decorations */}
          <div className="absolute -bottom-8 left-8 w-3 h-3 rounded-full bg-black"></div>
          <div className="absolute -bottom-12 left-4 w-2 h-2 rounded-full bg-black"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div
            className="rounded-lg p-6 text-center transition-all duration-300"
            style={{ backgroundColor: "#EDE9FE", minHeight: "350px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Free</h3>
            <div className="text-3xl font-bold mb-6">$0/mo</div>

            <div className="space-y-2 text-center mb-8">
              <p className="text-gray-700">30 AI Credits</p>
              <p className="text-gray-700">Public Projects</p>
              <p className="text-gray-700">Basic Tools</p>
            </div>

            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors"
              style={{ backgroundColor: "#7956DF" }}
            >
              Choose
            </button>
          </div>

          {/* Starter Plan */}
          <div
            className="rounded-lg p-6 text-center transition-all duration-300"
            style={{ backgroundColor: "#EDE9FE", minHeight: "350px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Starter</h3>
            <div className="text-3xl font-bold mb-6">$15/mo</div>

            <div className="space-y-2 text-center mb-8">
              <p className="text-gray-700">200 Credits</p>
              <p className="text-gray-700">Private Projects</p>
              <p className="text-gray-700">Auto-Labeling & Gen</p>
            </div>

            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors"
              style={{ backgroundColor: "#7956DF" }}
            >
              Choose
            </button>
          </div>

          {/* Pro Plan */}
          <div
            className="rounded-lg p-6 text-center transition-all duration-300"
            style={{ backgroundColor: "#EDE9FE", minHeight: "350px" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pro</h3>
            <div className="text-3xl font-bold mb-6">$40/mo</div>

            <div className="space-y-2 text-center mb-8">
              <p className="text-gray-700">500+ Credits</p>
              <p className="text-gray-700">Team Access</p>
              <p className="text-gray-700">Priority Support</p>
            </div>

            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors"
              style={{ backgroundColor: "#7956DF" }}
            >
              Choose
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
