"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#111] to-[#0a0a0a]">
      <div className="text-center space-y-6 max-w-2xl mx-auto w-full bg-[#111]/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-800/50 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur opacity-30 animate-pulse"></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Thank you for reaching out. We&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="pt-4">
          <div className="w-full bg-gray-800/50 rounded-full h-1.5">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-1.5 rounded-full animate-[progress_5s_linear]"></div>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Redirecting to home page...
          </p>
        </div>
      </div>
    </div>
  );
}
