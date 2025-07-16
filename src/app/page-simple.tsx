'use client';

import Link from 'next/link';

export default function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Computer Vision Landing Page</h1>
      <p className="mb-4">This is a simplified version of the landing page.</p>
      <Link 
        href="/login" 
        className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md"
      >
        Go to Login
      </Link>
    </div>
  );
}
