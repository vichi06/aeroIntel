"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [successUrl, setSuccessUrl] = useState("");

  useEffect(() => {
    setSuccessUrl(`${window.location.origin}/success`);
  }, []);

  return (
    <form
      action="https://formsubmit.co/39c7bfe78b77a841548a7dfa9c586efa"
      method="POST"
      className="space-y-6 max-w-2xl mx-auto w-full bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Contact Form Submission" />
      {successUrl && <input type="hidden" name="_next" value={successUrl} />}

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200"
          required
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200"
          required
          placeholder="your.email@example.com"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200 resize-none"
          required
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--orange)] text-white py-4 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}
