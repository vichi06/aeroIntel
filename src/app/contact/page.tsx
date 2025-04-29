import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ContactHeader from "@/components/ContactHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - AEROINTEL",
  description: "Contact Us - Advanced Drone Solutions",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <ContactHeader />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}
