import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function SkyfallDrone() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Skyfall Drone
            </h1>
            <div className="w-full max-w-4xl">
              <Image
                src="/images/skyfall/skyfallzoom2.png"
                alt="Skyfall Drone"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              AUTONOMOUS, AI-POWERED, ONE-SHOT INTERCEPTOR DRONE
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              The world is changing at a rapid pace due to technological
              advances in the world of Artificial Intelligence. As a result, we
              are developing an interceptor drone that is able to defend the
              skies from any incoming threat.
            </p>
          </section>

          {/* Navigation Capabilities Section */}
          <section className="space-y-12">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/skyfall/3skyfall.png"
                alt="Skyfall Drone Navigation"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-[var(--orange)] text-center">
              Navigation Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Key Area Recognition */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="/images/skyfall/road1-frame.jpg"
                    alt="Road Recognition"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Key area recognition
                </h3>
                <div className="w-32 h-1 bg-[var(--orange)] mb-4"></div>
                <div className="w-full">
                  <div className="border-b border-[var(--orange)]">
                    <button className="w-full text-left p-4 text-[var(--orange)] font-bold">
                      Advanced Area Recognition
                    </button>
                    <div className="p-4 text-gray-300">
                      SKYFALL utilizes advanced machine learning algorithms to
                      recognize and prioritize specific key areas, enabling it
                      to detect and focus on mission-critical zones. For
                      example, it can identify areas like roads, buildings and
                      fields.
                    </div>
                  </div>
                  <div className="border-b border-[var(--orange)]">
                    <button className="w-full text-left p-4 text-[var(--orange)] font-bold">
                      Localization using Areas
                    </button>
                    <div className="p-4 text-gray-300">
                      Using these highlighted areas, the drone is able to
                      navigate and find its precise current location.
                    </div>
                  </div>
                </div>
              </div>

              {/* Satellite Comparison */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="/images/skyfall/v1s.png"
                    alt="Satellite Comparison"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  satellite comparison
                </h3>
                <div className="w-32 h-1 bg-[var(--orange)] mb-4"></div>
                <div className="w-full">
                  <div className="border-b border-[var(--orange)]">
                    <button className="w-full text-left p-4 text-[var(--orange)] font-bold">
                      Satellite Imagery Analysis
                    </button>
                    <div className="p-4 text-gray-300">
                      Through integration with satellite imagery, SKYFALL
                      enhances its situational awareness, matching real-time
                      aerial views with satellite data for improved navigation.
                      This capability is crucial for geospatial accuracy,
                      especially in environments where ground visibility is
                      limited or landmarks are scarce.
                    </div>
                  </div>
                </div>
              </div>

              {/* Object Recognition */}
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  <Image
                    src="/images/skyfall/v3.png"
                    alt="Object Recognition"
                    width={300}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  object recognition
                </h3>
                <div className="w-32 h-1 bg-[var(--orange)] mb-4"></div>
                <div className="w-full">
                  <div className="border-b border-[var(--orange)]">
                    <button className="w-full text-left p-4 text-[var(--orange)] font-bold">
                      Target Selection
                    </button>
                    <div className="p-4 text-gray-300">
                      SKYFALL&apos;s object recognition technology allows it to
                      detect and classify critical objects in real-time, from
                      access control devices to security threats. By
                      distinguishing between various objects, SKYFALL can carry
                      out complex last mile tasks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bayonet Mount System */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-[var(--orange)] mb-4">
                Bayonet Mount System
              </h2>
              <p className="text-gray-300">
                The SKYFALL drone has a bayonet mount, and the drone operator is
                able to quickly mount different types of payloads for a specific
                SKYFALL drone mission using an innovative Bayonet mount system.
                This gives the SKYFALL drone the flexibility it needs for
                operations.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/images/skyfall/t1.png"
                alt="Bayonet Mount System 1"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/skyfall/t2.png"
                alt="Bayonet Mount System 2"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/skyfall/t3.png"
                alt="Bayonet Mount System 3"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </section>

          {/* Production Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <Image
                src="/images/skyfall/filament.png"
                alt="3D Printer Filament"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--orange)] mb-4">
                One 3D printer makes a drone every 3 hours
              </h2>
              <p className="text-gray-300">
                Many drones currently used are custom-built drones that are not
                easily manufacturable in large scale production. As a result,
                the SKYFALL was created, a drone with a strong focus on easy
                production in order to build thousands of SKYFALL drones that
                can be used in large quantities. A single 3D printer can make a
                drone every <span className="font-bold">3 hours</span>.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
