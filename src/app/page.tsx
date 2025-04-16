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
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="w-full">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="relative flex flex-col items-start justify-center space-y-8 min-h-[600px] w-full pb-32 overflow-hidden">
            <div
              className="absolute inset-0 z-0 w-full -top-40 mt-40 ml-15 md:block hidden"
              style={{
                transform: `translateY(${offset * 0.5}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0 scale-100 md:scale-100">
                <Image
                  src="/4-1.png"
                  alt="Background"
                  fill
                  className="object-contain w-full"
                  priority
                  sizes="100vw"
                  quality={100}
                  style={{ objectPosition: "center 30%" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-40">
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
            <div className="absolute bottom-0 w-[120%] h-[200px] md:hidden mt-8">
              <Image
                src="/4-1.png"
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
          <section className="relative flex flex-col items-end justify-center space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full md:min-h-[800px] overflow-hidden">
            <div
              className="absolute inset-0 z-0 w-[105%] -left-40 mr-40 md:block hidden"
              style={{
                transform: `translateY(${offset * 0.3}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0 scale-100 md:scale-100">
                <Image
                  src="/mod0bc.png"
                  alt="Navigation Module"
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
            <div className="absolute bottom-20 w-[120%] h-[200px] md:hidden">
              <Image
                src="/mod0bc.png"
                alt="Navigation Module"
                fill
                className="object-contain"
                priority
                sizes="100vw"
                quality={100}
              />
            </div>
          </section>

          {/* Careers Section */}
          <section className="relative flex flex-col items-center justify-center space-y-8 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[600px] overflow-hidden my-4">
            <div
              className="absolute inset-0 z-0 w-full"
              style={{
                transform: `translateY(${offset * 0.2}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
            </div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)] animate-pulse">
                WE ARE LOOKING FOR TALENT!
              </h3>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our team of innovators and help shape the future of
                autonomous drone technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/careers"
                  className="bg-[var(--orange)] text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[var(--orange)]/50"
                >
                  EXPLORE CAREERS
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-[var(--orange)] text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  CONTACT US
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="bg-[var(--grey)]/10 backdrop-blur-sm p-6 rounded-lg border border-[var(--orange)]/20 hover:border-[var(--orange)] transition-all duration-300">
                  <h4 className="text-[var(--orange)] font-bold mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-300 text-sm">Push boundaries</p>
                </div>
                <div className="bg-[var(--grey)]/10 backdrop-blur-sm p-6 rounded-lg border border-[var(--orange)]/20 hover:border-[var(--orange)] transition-all duration-300">
                  <h4 className="text-[var(--orange)] font-bold mb-2">
                    Growth
                  </h4>
                  <p className="text-gray-300 text-sm">Learn & develop</p>
                </div>
                <div className="bg-[var(--grey)]/10 backdrop-blur-sm p-6 rounded-lg border border-[var(--orange)]/20 hover:border-[var(--orange)] transition-all duration-300">
                  <h4 className="text-[var(--orange)] font-bold mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-300 text-sm">Make a difference</p>
                </div>
                <div className="bg-[var(--grey)]/10 backdrop-blur-sm p-6 rounded-lg border border-[var(--orange)]/20 hover:border-[var(--orange)] transition-all duration-300">
                  <h4 className="text-[var(--orange)] font-bold mb-2">Team</h4>
                  <p className="text-gray-300 text-sm">Collaborate & create</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
