"use client";

// import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8 lg:px-0 lg:py-0"
      style={{ background: "#F5F5F5" }}
    >
      {/* Bottom left arc decoration - hidden on mobile */}
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <svg width="500" height="500" viewBox="0 0 500 500">
          <path
            d="M0,500 L0,0 A500,500 0 0,1 500,500 Z"
            fill="#7956DF"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* Mobile background decoration */}
      <div className="absolute top-0 right-0 lg:hidden opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="150" cy="50" r="100" fill="#7956DF" />
        </svg>
      </div>

      <div className="w-full max-w-xl mx-auto z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-10 text-gray-900 text-center lg:text-left">
          Let&apos;s create your <span className="text-[#7956DF]">project</span>
          .
        </h1>
        <form className="space-y-4 lg:space-y-6">
          <div>
            <label className="font-bold text-sm mb-1 block text-black">
              Project Name
            </label>
            <input
              type="text"
              className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
              placeholder="E.g., Helmet Detection or Safety Gear"
              defaultValue=""
              style={{ backgroundColor: "#FFFBFB" }}
            />
          </div>
          <div>
            <label className="font-bold text-sm mb-1 block text-black">
              Annotation Group
            </label>
            <input
              type="text"
              className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
              placeholder="E.g., helmet, vest, person"
              defaultValue=""
              style={{ backgroundColor: "#FFFBFB" }}
            />
          </div>
          <div>
            <label className="font-bold text-sm mb-1 block text-black">
              License
            </label>
            <input
              type="text"
              className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
              placeholder="CC BY 4.0"
              defaultValue=""
              style={{ backgroundColor: "#FFFBFB" }}
            />
          </div>

          {/* Project Type Selection */}
          <div className="space-y-3 lg:space-y-3">
            <div>
              <label className="font-bold text-sm mb-1 block text-black">
                Object Detection
              </label>
              <input
                type="text"
                className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
                placeholder="Identify objects and their bounding boxes."
                defaultValue=""
                style={{ backgroundColor: "#FFFBFB" }}
              />
            </div>
            <div>
              <label className="font-bold text-sm mb-1 block text-black">
                Classification
              </label>
              <input
                type="text"
                className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
                placeholder="Assign labels to the entire image."
                defaultValue=""
                style={{ backgroundColor: "#FFFBFB" }}
              />
            </div>
            <div>
              <label className="font-bold text-sm mb-1 block text-black">
                Instance Segmentation
              </label>
              <input
                type="text"
                className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
                placeholder="Detect objects and their actual shape."
                defaultValue=""
                style={{ backgroundColor: "#FFFBFB" }}
              />
            </div>
            <div>
              <label className="font-bold text-sm mb-1 block text-black">
                Keypoint Detection
              </label>
              <input
                type="text"
                className="w-full border border-[#b3a0ea] rounded-md px-3 lg:px-4 py-2 lg:py-3 outline-none text-gray-800 text-sm lg:text-base"
                placeholder="Identify keypoints or skeletons."
                defaultValue=""
                style={{ backgroundColor: "#FFFBFB" }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between mt-6 lg:mt-8">
            <button
              type="button"
              className="w-full sm:w-auto px-6 lg:px-8 py-2 lg:py-2 rounded-md border-2 border-[#7956DF] text-[#7956DF] font-bold bg-transparent hover:bg-[#f3eefe] transition text-sm lg:text-base"
              onClick={() => router.push("/dashboard")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 lg:px-8 py-2 lg:py-2 rounded-md bg-[#7956DF] text-white font-bold shadow-md hover:bg-[#6a4fd1] transition text-sm lg:text-base"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
