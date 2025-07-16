"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const router = useRouter();

  const navigationItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Annotation", icon: "✏️" },
    { name: "Generation", icon: "🎨" },
    { name: "Services", icon: "🔧" },
  ];

  return (
    <div className="min-h-screen flex" style={{ background: "#e8f1ff" }}>
      {/* Sidebar */}
      <div
        className="w-64 shadow-lg relative"
        style={{ background: "#e8f1ff" }}
      >
        {/* Vertical blue line */}
        <div
          className="absolute right-0 top-0 bottom-0 w-0.5"
          style={{ background: "#8C71E4" }}
        ></div>

        {/* Logo/Header */}
        <div
          className="p-6 border-b border-gray-200"
          style={{ background: "#e8f1ff" }}
        >
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
            <div>
              <span className="text-gray-800 font-extrabold text-lg">
                Computer{" "}
              </span>
              <span
                className="font-extrabold text-lg"
                style={{ color: "#7956DF" }}
              >
                Vision
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors duration-200 ${
                activeTab === item.name
                  ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-bold">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div
          className="absolute bottom-0 w-64 p-6 border-t border-gray-200"
          style={{ background: "#e8f1ff" }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-gray-700 font-bold">Rafay</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{ background: "#e8f1ff" }}
      >
        {/* Background decoration - SVG thick quarter-ring arc */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <svg width="420" height="420" viewBox="0 0 420 420">
            <path
              d="M420,420 A210,210 0 0 0 0,210"
              fill="none"
              stroke="#b3a0ea"
              strokeWidth="60"
            />
          </svg>
        </div>

        {/* Header */}
        <header
          className="shadow-sm p-6 relative"
          style={{ background: "#e8f1ff" }}
        >
          {/* Horizontal blue line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: "#8C71E4" }}
          ></div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 relative z-10" style={{ background: "#e8f1ff" }}>
          {/* Welcome Section with Invite Button */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome back, Rafay
            </h2>
            <button
              className="px-6 py-3 text-gray-800 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-gray-300"
              style={{ background: "#e8f1ff", minWidth: "150px" }}
            >
              Invite
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Your Projects</h3>
              <button
                className="px-6 py-3 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#7956DF", minWidth: "150px" }}
                onClick={() => router.push("/create-project")}
              >
                + New Project
              </button>
            </div>

            {/* Empty Projects State */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">📂</span>
              </div>
              <h4 className="text-xl font-bold text-gray-700 mb-2">
                No projects yet
              </h4>
              <p className="text-gray-500 font-bold mb-6">
                Create your first project to get started with Computer Vision
              </p>
              <button
                className="px-8 py-3 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "#7956DF" }}
                onClick={() => router.push("/create-project")}
              >
                Create First Project
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
