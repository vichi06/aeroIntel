import KeyFeature from "@/components/KeyFeature";
import KeyFeatures from "@/components/KeyFeatures";
import { FaBrain, FaIndustry, FaTachometerAlt } from "react-icons/fa";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function NavigationModule() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        src="/images/strike/striket2.png"
        title="STRIKE7 & STRIKE10"
        subtitle="Built in the Netherlands 🇱🇺 | Tested in Ukraine 🇺🇦"
        type="image"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <div className="text-center">
            <p>In partnership with:</p>
            <Image
              src="/images/partners/airvolute.svg"
              width="300"
              height="200"
              alt=""
              className="m-auto"
            />
          </div>

          <section className="text-center">
            <h2 className="text-[var(--orange)] text-3xl">
              Advanced FPV Strike Drone
            </h2>
            <p>
              STRIKE is our manually operated FPV drone, developed with direct
              feedback from the frontlines in Ukraine. AEROINTEL maintains
              weekly contact with drone producers in Ukraine, allowing us to
              continuously refine and evolve our FPV strike drone in line with
              the latest Ukrainian technologies. While the drone is built in the
              Netherlands, it incorporates valuable insights and innovations
              from Ukraine through our partnerships with different brigades and
              local FPV drone producers. This collaborative approach ensures
              STRIKE remains at the forefront of modern drone warfare, combining
              global expertise with frontline experience.
            </p>
          </section>

          <KeyFeatures title="Key Features">
            <KeyFeature
              icon={FaIndustry}
              title="Range"
              description={["Maximum range of 12 km"]}
            />
            <KeyFeature
              icon={FaBrain}
              title="Cruise Velocity"
              description={["100 km/h cruise speed"]}
            />
            <KeyFeature
              icon={FaTachometerAlt}
              title="Endurance"
              description={["15 minutes flight time"]}
            />
          </KeyFeatures>
        </main>
      </div>
    </div>
  );
}
