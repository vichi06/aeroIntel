import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import JobsSection from "@/components/JobsSection";

export const metadata: Metadata = {
  title: "Careers - AEROINTEL",
  description: "Careers - Advanced Drone Solutions",
};

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Jobs
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How to apply
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl text-gray-300">
              If you&apos;re excited by the idea of joining a dynamic team and
              think you have the expertise to help us shape the future of
              European defense technology, we&apos;d love to hear from you. At
              AEROINTEL, we&apos;re building the most innovative autonomous
              solutions in the industry, and we need passionate, driven
              individuals to join us on this mission.
              <br />
              <br />
              Whether your background is in robotics, software engineering,
              hardware design, or another relevant field, we offer opportunities
              to make a direct impact. If one of these roles feels like the
              perfect fit for your skills and ambitions
              <br />
              <br />
              Send us your CV, cover letter at{" "}
              <a
                href="mailto:jobs@aerointel.eu"
                className="text-[var(--orange)] hover:underline"
              >
                jobs@aerointel.eu
              </a>
            </p>
          </section>

          <JobsSection />
        </main>
      </div>
    </div>
  );
}
