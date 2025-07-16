"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "#F5F5F5" }}
    >
      {/* Bottom left arc decoration */}
      <div className="absolute bottom-0 left-0">
        <svg width="500" height="500" viewBox="0 0 500 500">
          <path
            d="M0,500 L0,0 A500,500 0 0,1 500,500 Z"
            fill="#7956DF"
            opacity="0.25"
          />
        </svg>
      </div>
      <div className="w-full max-w-xl mx-auto z-10">
        <h1 className="text-4xl font-bold mb-10 text-gray-900">
          Let's create your <span className="text-[#7956DF]">project</span>.
        </h1>
        <form className="space-y-6">
          <div>
            <label className="font-bold text-sm mb-1 block text-black">
              Project Name
            </label>
            <input
              type="text"
              className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
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
              className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
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
              className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
              placeholder="CC BY 4.0"
              defaultValue=""
              style={{ backgroundColor: "#FFFBFB" }}
            />
          </div>

          {/* Project Type Selection */}
          <div className="space-y-3">
            <div>
              <label className="font-bold text-sm mb-1 block text-black">
                Object Detection
              </label>
              <input
                type="text"
                className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
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
                className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
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
                className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
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
                className="w-full border border-[#b3a0ea] rounded-md px-4 py-3 outline-none text-gray-800"
                placeholder="Identify keypoints or skeletons."
                defaultValue=""
                style={{ backgroundColor: "#FFFBFB" }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="px-8 py-2 rounded-md border-2 border-[#7956DF] text-[#7956DF] font-bold bg-transparent hover:bg-[#f3eefe] transition"
              onClick={() => router.push("/dashboard")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 rounded-md bg-[#7956DF] text-white font-bold shadow-md hover:bg-[#6a4fd1] transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
