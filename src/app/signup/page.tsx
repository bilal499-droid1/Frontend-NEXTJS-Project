"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle signup logic here
    console.log("Signup attempted with:", { username, email, password });

    // Navigate to dashboard after successful signup
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-gray-50"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
      }}
    >
      {/* Background decorative curved shapes */}
      {/* Top left large curve */}
      <div
        className="absolute -top-32 -left-32 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 opacity-60"
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
          borderRadius: "0 0 100% 0",
          transform: "rotate(-10deg)",
        }}
      ></div>

      {/* Top right curve */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 opacity-50"
        style={{
          background: "linear-gradient(225deg, #c084fc 0%, #a855f7 100%)",
          borderRadius: "0 0 0 100%",
          transform: "rotate(15deg)",
        }}
      ></div>

      {/* Bottom left curve */}
      <div
        className="absolute -bottom-24 -left-24 w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 opacity-55"
        style={{
          background: "linear-gradient(45deg, #ddd6fe 0%, #c4b5fd 100%)",
          borderRadius: "0 100% 0 0",
          transform: "rotate(-5deg)",
        }}
      ></div>

      {/* Bottom right curve */}
      <div
        className="absolute -bottom-16 -right-16 w-32 h-32 sm:w-44 sm:h-44 lg:w-64 lg:h-64 opacity-45"
        style={{
          background: "linear-gradient(315deg, #e9d5ff 0%, #ddd6fe 100%)",
          borderRadius: "100% 0 0 0",
          transform: "rotate(20deg)",
        }}
      ></div>

      {/* Center floating blob */}
      <div
        className="hidden sm:block absolute top-1/4 right-1/4 w-32 h-32 lg:w-48 lg:h-48 opacity-30 animate-pulse animation-delay-2000"
        style={{
          background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
          borderRadius: "60% 40% 30% 70%",
          transform: "rotate(45deg)",
        }}
      ></div>

      {/* Sign Up Form */}
      <div
        className="backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-sm sm:max-w-md relative z-10 border border-white/50 overflow-hidden"
        style={{ background: "#E6E1F4" }}
      >
        {/* Purple corner shades */}
        <div
          className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
          style={{
            background: "#7956DF",
            borderRadius: "0 0 0 100%",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-18 h-18 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
          style={{
            background: "#7956DF",
            borderRadius: "0 100% 0 0",
          }}
        ></div>

        <div className="text-center mb-6 sm:mb-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
            SIGN UP
          </h1>
          <div className="w-16 h-0.5 bg-gray-400 mx-auto"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 relative z-10"
        >
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

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
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
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
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200 pr-10 sm:pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-white/60 backdrop-blur-sm border border-white/60 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200 pr-10 sm:pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <EyeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-3/4 sm:w-2/3 mx-auto block text-white py-2.5 sm:py-3 px-6 sm:px-6 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "#7956DF" }}
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4 sm:mt-6 relative z-10">
          <p className="text-gray-600 text-xs sm:text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-gray-800 font-semibold hover:underline transition-all duration-200"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
