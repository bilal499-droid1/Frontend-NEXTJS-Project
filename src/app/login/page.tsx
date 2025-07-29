"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
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
      className="min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-hidden bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Background decorative curved shapes - simplified design */}
      {/* Top left large curve */}
      <div
        className="absolute -top-32 -left-32 w-80 lg:w-96 h-80 lg:h-96 opacity-70"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
          borderRadius: "0 0 100% 0",
        }}
      ></div>

      {/* Bottom right curve */}
      <div
        className="absolute -bottom-32 -right-32 w-80 lg:w-96 h-80 lg:h-96 opacity-70"
        style={{
          background: "linear-gradient(315deg, #a855f7 0%, #9333ea 100%)",
          borderRadius: "100% 0 0 0",
        }}
      ></div>

      <div
        className="backdrop-blur-lg rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 w-full max-w-sm lg:max-w-md relative z-10 border border-white/50 overflow-hidden"
        style={{ background: "#E6E1F4" }}
      >
        {/* Purple corner shades - responsive */}
        <div
          className="absolute top-0 right-0 w-24 lg:w-32 h-24 lg:h-32"
          style={{
            background: "#7956DF",
            borderRadius: "0 0 0 100%",
          }}
        ></div>

        <div
          className="absolute bottom-0 left-0 w-20 lg:w-28 h-20 lg:h-28"
          style={{
            background: "#7956DF",
            borderRadius: "0 100% 0 0",
          }}
        ></div>

        <div className="text-center mb-6 lg:mb-8 relative z-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
            LOG IN
          </h1>
          <div className="w-12 lg:w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 lg:space-y-6 relative z-10"
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 lg:px-4 py-2 lg:py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-700 text-sm lg:text-base"
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
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 lg:px-4 py-2 lg:py-2 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-700 text-sm lg:text-base"
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
            className="w-3/4 sm:w-2/3 mx-auto block text-white py-2.5 lg:py-3 px-6 lg:px-6 rounded-full font-semibold text-sm lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "#7956DF" }}
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-center mt-4 lg:mt-6 relative z-10">
            <p className="text-gray-600 text-xs lg:text-sm">
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
