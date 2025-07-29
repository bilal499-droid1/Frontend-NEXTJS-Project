"use client";

import { useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Annotation", icon: "✏️" },
    { name: "Generation", icon: "🎨" },
    { name: "Services", icon: "🔧" },
  ];

  return (
    <div
      className="min-h-screen flex relative"
      style={{ background: "#e8f1ff" }}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        style={{ background: "#e8f1ff" }}
      >
        {/* Vertical blue line */}
        <div
          className="absolute right-0 top-0 bottom-0 w-0.5"
          style={{ background: "#8C71E4" }}
        ></div>

        {/* Logo/Header */}
        <div
          className="p-6 border-b border-gray-200 flex items-center justify-between"
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

          {/* Close button for mobile */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setSidebarOpen(false); // Close sidebar on mobile after selection
              }}
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
        className="flex-1 relative overflow-hidden lg:ml-0"
        style={{ background: "#e8f1ff" }}
      >
        {/* Background decoration - SVG thick quarter-ring arc */}
        <div className="absolute bottom-0 right-0 pointer-events-none hidden lg:block">
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
          className="shadow-sm p-4 lg:p-6 relative"
          style={{ background: "#e8f1ff" }}
        >
          {/* Horizontal blue line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: "#8C71E4" }}
          ></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                Dashboard
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main
          className="p-4 lg:p-6 relative z-10"
          style={{ background: "#e8f1ff" }}
        >
          {/* Welcome Section with Invite Button */}
          <div className="mb-6 lg:mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Welcome back, Rafay
            </h2>
            <button
              className="px-4 lg:px-6 py-3 text-gray-800 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] border border-gray-300 w-full lg:w-auto"
              style={{ background: "#e8f1ff", minWidth: "150px" }}
            >
              Invite
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6 gap-4">
              <h3 className="text-lg lg:text-xl font-bold text-gray-800">
                Your Projects
              </h3>
              <button
                className="px-4 lg:px-6 py-3 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-full lg:w-auto"
                style={{ background: "#7956DF", minWidth: "150px" }}
                onClick={() => router.push("/create-project")}
              >
                + New Project
              </button>
            </div>

            {/* Empty Projects State */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 text-center">
              <div className="w-16 lg:w-24 h-16 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl lg:text-4xl text-gray-400">📂</span>
              </div>
              <h4 className="text-lg lg:text-xl font-bold text-gray-700 mb-2">
                No projects yet
              </h4>
              <p className="text-sm lg:text-base text-gray-500 font-bold mb-6">
                Create your first project to get started with Computer Vision
              </p>
              <button
                className="px-6 lg:px-8 py-3 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-full lg:w-auto"
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
