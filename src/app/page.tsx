"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offset;
};

export default function Home() {
  const offset = useParallax();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full">
        <main className="flex flex-col">
          {/* Video Section */}
          <section className="relative w-full h-screen overflow-hidden">
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
          <section className="relative flex flex-col items-end justify-center space-y-8 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full md:min-h-[800px] overflow-hidden">
            <div
              className="absolute inset-0 z-0 w-[95%] justify-self-end"
              style={{
                transform: `translateY(${offset * 0.1}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/4-1.png"
                  alt="Background"
                  fill
                  className="object-contain w-full"
                  priority
                  sizes="100vw"
                  quality={100}
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl text-left">
                The world&apos;s first fully autonomous{" "}
                <span className="text-[var(--orange)]">single use</span> drone
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mt-8">
                Skyfall is revolutionizing the drone industry with its
                innovative single-use design and fully autonomous capabilities.
              </p>
              <Link
                href="/skyfall-drone"
                className="bg-[var(--orange)] text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 mt-8 inline-block"
              >
                Find out more about skyfall
              </Link>
            </div>
            <div className="relative w-full h-[200px] md:hidden">
              <Image
                src="/images/4-1.png"
                alt="Background"
                fill
                className="object-contain"
                priority
                sizes="100vw"
                quality={100}
              />
            </div>
          </section>

          {/* Navigation Module Section */}
          <section className="relative flex flex-col items-end justify-center space-y-8 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full md:min-h-[500px] overflow-hidden mb-20">
            <div
              className="absolute inset-0 z-0 w-[90%]"
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
                  className="object-contain w-full"
                  priority
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-3xl text-right">
                And a fully autonomous{" "}
                <span className="text-[var(--orange)]">navigation module</span>{" "}
                usable on any drone
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl text-right mt-8">
                Our cutting-edge navigation technology can be integrated into
                any drone system, providing unparalleled autonomy and precision.
              </p>
              <Link
                href="/navigation-module"
                className="bg-[var(--orange)] text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 mt-8 inline-block"
              >
                Find out more about the navigation module
              </Link>
            </div>
            <div className="relative w-full h-[200px] md:hidden">
              <Image
                src="/images/modules/mod0bc.png"
                alt="Navigation Module"
                fill
                className="object-contain"
                priority
                sizes="100vw"
                quality={100}
                style={{ objectPosition: "center 0%" }}
              />
            </div>
          </section>

          {/* Careers Section */}
          <section className="relative flex items-center justify-between w-full px-12 sm:px-16 lg:px-20 py-16 bg-[var(--orange)]">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
              <div className="text-white font-bold text-2xl">
                WE ARE LOOKING FOR TALENT!
              </div>
              <Link
                href="/careers"
                className="bg-transparent text-white border border-white px-8 py-3 text-lg font-bold transition-colors duration-200 flex items-center gap-2 hover:bg-white hover:text-[var(--orange)]"
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
