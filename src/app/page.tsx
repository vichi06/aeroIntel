"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import useParallax from "@/hooks/useParallax";

export default function Home() {
  const offset = useParallax();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full">
        <main className="flex flex-col">
          {/* Video Section */}
          <section className="relative w-full h-screen overflow-hidden z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/DroneLaunch.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </section>

          {/* Hero Section */}
          <section className="relative flex flex-col items-center md:items-end justify-center space-y-8 md:min-h-[900px] min-h-[600px] px-4 sm:px-6 md:px-8">
            <div
              className="absolute inset-0 z-0 w-[100%] justify-self-end"
              style={{
                transform: `translateY(${offset * 0.2 - 200}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/4-1.png"
                  alt="Background"
                  fill
                  className="md:object-contain object-cover w-full md:object-[100%_100%] object-[50%_100%]"
                  priority
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
            <div className="relative z-10 w-full md:w-[90%] text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl mx-auto md:mx-0">
                The world&apos;s first fully autonomous{" "}
                <span className="text-[var(--orange)]">single use</span> drone
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mt-6 md:mt-8 mx-auto md:mx-0">
                Skyfall is revolutionizing the drone industry with its
                innovative single-use design and fully autonomous capabilities.
              </p>
              <Link
                href="/skyfall-drone"
                className="bg-[var(--orange)] text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-colors duration-200 mt-6 md:mt-8 inline-block"
              >
                Find out more about skyfall
              </Link>
            </div>
          </section>

          {/* Navigation Module Section */}
          <section className="relative flex flex-col items-center md:items-end justify-center space-y-8 min-h-[600px] md:min-h-[800px] overflow-hidden px-4 sm:px-6 md:px-8">
            <div
              className="absolute inset-0 z-0"
              style={{
                transform: `translateY(${offset * 0.2 - 200}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/modules/mod0bc.png"
                  alt="Navigation Module"
                  fill
                  className="object-cover w-full"
                  priority
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto w-full text-center md:text-right md:justify-items-end">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto md:mx-0">
                And a fully autonomous{" "}
                <span className="text-[var(--orange)]">navigation module</span>{" "}
                usable on any drone
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mt-6 md:mt-8 mx-auto md:mx-0">
                Our cutting-edge navigation technology can be integrated into
                any drone system, providing unparalleled autonomy and precision.
              </p>
              <Link
                href="/navigation-module"
                className="bg-[var(--orange)] text-white hover:bg-white hover:text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-colors duration-200 mt-6 md:mt-8 inline-block"
              >
                Find out more about the navigation module
              </Link>
            </div>
          </section>

          {/* Careers Section */}
          <section className="relative flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 md:py-16 bg-[var(--orange)]">
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
              <div className="text-white font-bold text-xl sm:text-2xl text-center sm:text-left">
                WE ARE LOOKING FOR TALENT!
              </div>
              <Link
                href="/careers"
                className="bg-transparent text-white border border-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold transition-colors duration-200 flex items-center gap-2 hover:bg-white hover:text-[var(--orange)]"
              >
                GO TO THE CAREERS PAGE
                <svg
                  className="w-4 h-4"
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
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
