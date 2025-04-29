"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Preparing email..." });

    try {
      const subject = encodeURIComponent(
        `New Contact Form Submission from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=${subject}&body=${body}`;

      window.location.href = mailtoUrl;
      setStatus({
        type: "success",
        message: "Email client opened successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to open email client. Please try again." + error,
      });
    }
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
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-2xl mx-auto w-full bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800"
    >
      {status.type === "success" && (
        <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-400">
          {status.message}
        </div>
      )}
      {status.type === "error" && (
        <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-400">
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
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
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200"
            required
            placeholder="Your name"
            disabled={status.type === "loading"}
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
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200"
            required
            placeholder="your.email@example.com"
            disabled={status.type === "loading"}
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
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[var(--orange)] text-white transition-all duration-200 resize-none"
            required
            placeholder="Your message here..."
            disabled={status.type === "loading"}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[var(--orange)] text-white py-4 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.section>
  );
}
