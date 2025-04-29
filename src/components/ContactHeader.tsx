"use client";
import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center space-y-8"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
        Contact Us
      </h1>
      <p className="text-gray-400 max-w-2xl text-lg">
        Have questions or want to work together? We&apos;d love to hear from
        you. Send us a message and we&apos;ll respond as soon as possible.
      </p>
    </motion.section>
  );
}
