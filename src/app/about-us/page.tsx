import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - AEROINTEL",
  description: "About Us - Advanced Drone Solutions",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              About Us
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl text-gray-300">
              The founding team of AEROINTEL is composed of two MSc Aerospace
              Engineering graduates from the TU Delft (Netherlands) and Imperial
              College London (United Kingdom). United by a deep-seated passion
              for innovation and a shared history that dates back to their high
              school days in France, AEROINTEL was founded in 2023 with the goal
              of modernizing weapon systems through the use of AI and other
              technologies. The founders created this company with the goal of
              making complex drone solutions as well as bigger projects such
              smart missiles. We are now 5 people working on this project.
              <br />
              <br />
              Our collaborative efforts have already resulted in SKYFALL, a
              fully autonomous one-shot drone capable of flying in GPS-denied
              missions. Our first prototype which is currently being tested for
              fully autonomous no GNSS flight.
              <br />
              <br />
              We believe that governments all over the world will heavily invest
              in the defense sector in the coming years. With a strong focus on
              drone development, we are in an ideal position to grow and become
              a part of many European nation&apos;s defense arsenals. And with
              constant software and hardware iterations, the SKYFALL drone will
              continuously improve in terms of target accuracy and pathfinding
              in order to achieve our common goals.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
