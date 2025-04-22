"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function SkyfallDrone() {
  const [openDetails, setOpenDetails] = useState({
    keyAreaRecognition: false,
    keyAreaLocalization: false,
    satellite: false,
    object: false,
  });

  const toggleDetails = (
    section:
      | "keyAreaRecognition"
      | "keyAreaLocalization"
      | "satellite"
      | "object"
  ) => {
    setOpenDetails((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto py-12 pt-32 px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col gap-8 md:gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-4 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--orange)]">
              Skyfall Drone
            </h1>
            <div className="w-full max-w-4xl">
              <Image
                src="/images/skyfall/skyfallzoom2.png"
                alt="Skyfall Drone"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white px-4">
              AUTONOMOUS, AI-POWERED, ONE-SHOT INTERCEPTOR DRONE
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl px-4">
              The world is changing at a rapid pace due to technological
              advances in the world of Artificial Intelligence. As a result, we
              are developing an interceptor drone that is able to defend the
              skies from any incoming threat.
            </p>
          </section>

          {/* Navigation Capabilities Section */}
          <section className="space-y-8 md:space-y-12 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="w-full max-w-4xl mx-auto">
              <Image
                src="/images/skyfall/3skyfall.png"
                alt="Skyfall Drone Navigation"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--orange)] text-center">
              Navigation Capabilities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Key Area Recognition */}
              <div className="flex flex-col">
                <div className="mb-4 w-full">
                  <Image
                    src="/images/skyfall/road1-frame.jpg"
                    alt="Road Recognition"
                    width={300}
                    height={600}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 w-full text-left">
                  KEY AREA RECOGNITION
                </h3>
                <div className="w-24 md:w-32 h-1 bg-[var(--orange)] mb-4"></div>
                <div className="w-full">
                  <div className="border-b border-white">
                    <button
                      onClick={() => toggleDetails("keyAreaRecognition")}
                      className="w-full text-left p-4 text-white font-bold flex gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDetails.keyAreaRecognition ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Advanced Area Recognition
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        openDetails.keyAreaRecognition
                          ? "max-h-[500px]"
                          : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-300">
                        SKYFALL utilizes advanced machine learning algorithms to
                        recognize and prioritize specific key areas, enabling it
                        to detect and focus on mission-critical zones. For
                        example, it can identify areas like roads, buildings and
                        fields.
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-white">
                    <button
                      onClick={() => toggleDetails("keyAreaLocalization")}
                      className="w-full text-left p-4 text-white font-bold flex gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDetails.keyAreaLocalization ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Localization using Areas
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        openDetails.keyAreaLocalization
                          ? "max-h-[500px]"
                          : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-300">
                        Using these highlighted areas, the drone is able to
                        navigate and find its precise current location.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Satellite Comparison */}
              <div className="flex flex-col">
                <div className="mb-4 w-full">
                  <Image
                    src="/images/skyfall/v1s.png"
                    alt="Satellite Comparison"
                    width={300}
                    height={600}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 w-full text-left">
                  SATELLITE COMPARISON
                </h3>
                <div className="w-24 md:w-32 h-1 bg-[var(--orange)] mb-4 ml-0"></div>
                <div className="w-full">
                  <div className="border-b border-white">
                    <button
                      onClick={() => toggleDetails("satellite")}
                      className="w-full text-left p-4 text-white font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDetails.satellite ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Satellite Imagery Analysis
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        openDetails.satellite ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-300">
                        Through integration with satellite imagery, SKYFALL
                        enhances its situational awareness, matching real-time
                        aerial views with satellite data for improved
                        navigation. This capability is crucial for geospatial
                        accuracy, especially in environments where ground
                        visibility is limited or landmarks are scarce.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Object Recognition */}
              <div className="flex flex-col md:col-span-2 lg:col-span-1">
                <div className="mb-4 w-full">
                  <Image
                    src="/images/skyfall/v3.png"
                    alt="Object Recognition"
                    width={300}
                    height={600}
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 w-full text-left">
                  OBJECT RECOGNITION
                </h3>
                <div className="w-24 md:w-32 h-1 bg-[var(--orange)] mb-4 ml-0"></div>
                <div className="w-full">
                  <div className="border-b border-white">
                    <button
                      onClick={() => toggleDetails("object")}
                      className="w-full text-left p-4 text-white font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDetails.object ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      Target Selection
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        openDetails.object ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 text-gray-300">
                        SKYFALL&apos;s object recognition technology allows it
                        to detect and classify critical objects in real-time,
                        from access control devices to security threats. By
                        distinguishing between various objects, SKYFALL can
                        carry out complex last mile tasks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bayonet Mount System */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
            <div>
              <p className="font-bold text-sm md:text-base">
                The SKYFALL drone has a bayonet mount, and the drone operator is
                able to quickly mount different types of payloads for a specific
                SKYFALL drone mission using an innovative Bayonet mount system.
                This gives the SKYFALL drone the flexibility it needs for
                operations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                className="w-full h-auto rounded-lg md:col-span-1 col-span-2"
              />
            </div>
          </section>

          {/* Production Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="flex items-center justify-center flex-col">
              <h2 className="flex flex-col text-xl md:text-2xl font-bold text-[var(--orange)] mb-4 text-center">
                One 3D printer makes a drone every 3 hours
              </h2>
              <Image
                src="/images/skyfall/filament.png"
                alt="3D Printer Filament"
                width={200}
                height={100}
                className="rounded-lg w-full max-w-[200px]"
              />
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-300">
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
