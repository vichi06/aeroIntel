import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import KeyFeature from "@/components/KeyFeature";
import { FaIndustry, FaBrain, FaTachometerAlt } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skyfall Drone - AEROINTEL",
  description: "Skyfall Drone - Advanced Drone Solutions",
};

export default function SkyfallDrone() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full">
        <main className="flex flex-col">
          <Hero
            src="/videos/TopSpeed.mp4"
            title="SKYFALL"
            subtitle="The Cost-Effective Counter to ISR and One-Shot Drones"
            type="video"
          />

          {/* Skyfall Interceptor Section */}
          <section className="my-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row max-w-5xl mx-auto mt-8 gap-8">
              <div className="flex flex-col justify-center w-full lg:w-2/3">
                <h2 className="text-[var(--orange)] text-2xl sm:text-3xl mb-4">
                  Skyfall Interceptor
                </h2>
                <p className="text-sm sm:text-base">
                  SKYFALL is a compact, high-speed interceptor designed to
                  neutralize enemy ISR and loitering munitions at a fraction of
                  the cost of traditional defense systems. Built around a
                  10-inch quadcopter platform, SKYFALL leverages advanced
                  autonomy and high-agility flight dynamics to engage and
                  disable enemy drones. SKYFALL is designed to be rapidly
                  deployed in large numbers and manufactured at scale using
                  advanced 3D printing techniques.
                </p>
              </div>
              <div className="w-full lg:w-1/3 relative mt-6 lg:mt-0 flex justify-center">
                <img
                  src="/images/skyfall/sk1.png"
                  alt="Skyfall Drone"
                  className="object-contain w-[300px] h-auto"
                />
              </div>
            </div>
          </section>

          <KeyFeatures title="Key Features">
            <KeyFeature
              icon={FaIndustry}
              title="Manufacturing"
              description={[
                "3D-printed frame",
                "PPA-CF composites",
                "Optimized for strength",
              ]}
            />
            <KeyFeature
              icon={FaBrain}
              title="Intelligence"
              description={[
                "Real-time visual tracking",
                "Autonomous identification",
                "Target pursuit system",
              ]}
            />
            <KeyFeature
              icon={FaTachometerAlt}
              title="High Speed"
              description={[
                "Top speed: 240 km/h",
                "Rapid acceleration",
                "High maneuverability",
              ]}
            />
          </KeyFeatures>
        </main>
      </div>
    </div>
  );
}
