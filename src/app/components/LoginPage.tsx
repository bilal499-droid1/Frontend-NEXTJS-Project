"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", email, password);

    // Redirect to dashboard after successful login
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Background decorative curved shapes */}
      {/* Top left large curve */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 opacity-60"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
          borderRadius: "0 0 100% 0",
          transform: "rotate(-10deg)",
        }}
      ></div>

      {/* Top right curve */}
      <div
        className="absolute -top-20 -right-20 w-80 h-80 opacity-50"
        style={{
          background: "linear-gradient(225deg, #c084fc 0%, #a855f7 100%)",
          borderRadius: "0 0 0 100%",
          transform: "rotate(15deg)",
        }}
      ></div>

      {/* Bottom left curve */}
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 opacity-55"
        style={{
          background: "linear-gradient(45deg, #ddd6fe 0%, #c4b5fd 100%)",
          borderRadius: "0 100% 0 0",
          transform: "rotate(-5deg)",
        }}
      ></div>

      {/* Bottom right curve */}
      <div
        className="absolute -bottom-16 -right-16 w-64 h-64 opacity-45"
        style={{
          background: "linear-gradient(315deg, #e9d5ff 0%, #ddd6fe 100%)",
          borderRadius: "100% 0 0 0",
          transform: "rotate(20deg)",
        }}
      ></div>

      {/* Center floating blob */}
      <div
        className="absolute top-1/4 right-1/4 w-48 h-48 opacity-30 animate-pulse animation-delay-2000"
        style={{
          background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70%",
          transform: "rotate(45deg)",
        }}
      ></div>

      <div
        className="backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 border border-white/50 overflow-hidden"
        style={{ background: "#E6E1F4" }}
      >
        {/* Purple corner shades */}
        <div
          className="absolute top-0 right-0 w-32 h-32"
          style={{
            background: "#7956DF",
            borderRadius: "0 0 0 100%",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-28 h-28"
          style={{
            background: "#7956DF",
            borderRadius: "0 100% 0 0",
          }}
        ></div>

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold text-gray-700 mb-2">LOG IN</h1>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-2/3 mx-auto block text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "#7956DF" }}
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-6 relative z-10">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-gray-800 font-semibold hover:underline transition-colors duration-200"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
