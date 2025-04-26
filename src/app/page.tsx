"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import NavigationFeature from "@/components/NavigationFeature";

const partners = [
  {
    src: "/images/partners/p1.png",
    alt: "Partner 1",
  },
  {
    src: "/images/partners/p2.png",
    alt: "Partner 2",
  },
  {
    src: "/images/partners/p3.png",
    alt: "Partner 3",
  },
  {
    src: "/images/partners/p4.png",
    alt: "Partner 4",
  },
];

// Duplicate partners array for seamless loop
const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

export default function Pathfinder() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full">
        <main className="flex flex-col">
          <Hero
            src="/videos/nils.mp4"
            title="PATHFINDER"
            subtitle="VISUAL POSITIONING MODULE for GNSS-DENIED ENVIRONMENTS"
            type="video"
          />

          {/* Pathfinder Module Section */}
          <section className="my-10">
            <div className="px-4">
              <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-10 gap-8">
                <div className="flex flex-col justify-center">
                  <h2 className="text-[var(--orange)] text-3xl">
                    PATHFINDER Module
                  </h2>
                  <p className="">
                    PATHFINDER is an advanced visual positioning system that
                    enables precise drone navigation in GNSS-denied
                    environments. Utilizing a multi-layer approach combining
                    computer vision and machine learning, it integrates three
                    core technologies: real-time satellite imagery correlation,
                    geometric pattern recognition, and terrain feature mapping.
                    The system provides continuous position data through MavLink
                    protocol, ensuring reliable autonomous navigation in
                    challenging operational conditions.
                  </p>
                </div>
                <Image
                  src="/images/pathfinder/nav.png"
                  alt="User Interface"
                  width={500}
                  height={500}
                  className="w-full md:w-auto"
                />
              </div>
            </div>

            {/* Compatible with */}
            <div className="text-center">
              <h3 className="text-2xl">Compatible with:</h3>
              <div className="relative w-full overflow-hidden mt-5">
                <div className="flex animate-scroll gap-4 whitespace-nowrap">
                  {duplicatedPartners.map((partner, index) => (
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={200}
                      height={200}
                      key={`${partner.src}-${index}`}
                      className="object-contain brightness-0 invert flex-shrink-0 w-[150px] md:w-[200px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Features Section */}
          <section className="flex max-w-5xl mx-auto text-center my-20 px-4">
            <div className="w-full">
              <h2 className="text-[var(--orange)] text-3xl">
                Navigation Features
              </h2>
              <div className="flex flex-col md:flex-row gap-8 mt-10 items-center">
                <NavigationFeature
                  src="/images/pathfinder/satellite.jpg"
                  title="Satellite Image Matching"
                  description="Real-time comparison with satellite imagery for precise positioning"
                />
                <NavigationFeature
                  src="/images/pathfinder/road.jpg"
                  title="Road Shape Recognition"
                  description="Advanced algorithms for identifying and matching road shapes"
                />
                <NavigationFeature
                  src="/images/pathfinder/intersection.png"
                  title="Intersection Recognition"
                  description="Identification of Intersections"
                />
              </div>
            </div>
          </section>

          {/* User Interface Section */}
          <section className="flex flex-col md:flex-row max-w-5xl mx-auto gap-10 mt-15 mb-20 px-4">
            <Image
              src="/images/pathfinder/screenshot.jpg"
              alt="User Interface"
              width={500}
              height={500}
              className="w-full md:w-auto"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-[var(--orange)] text-3xl">User interface</h2>
              <p>
                The PATHFINDER module features an intuitive user interface that
                provides real-time visualization of navigation data, system
                status, and performance metrics. The interface displays live
                camera feeds, position tracking, and system diagnostics in a
                clean, modern design. Operators can easily monitor the
                system&apos;s performance and make adjustments through a
                user-friendly dashboard.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
