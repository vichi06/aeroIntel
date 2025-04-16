"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Contact Us
            </h1>
          </section>

          <section className="max-w-2xl mx-auto w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[var(--grey)] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[var(--grey)] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-[var(--grey)] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--orange)] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
