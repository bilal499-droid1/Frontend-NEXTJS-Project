"use client";

import Link from "next/link";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">
        This is a test page to see if routing works properly.
      </p>
      <div className="space-y-4">
        <div>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/login"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
