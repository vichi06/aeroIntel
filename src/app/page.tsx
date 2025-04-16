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
                  src="/images/4-1.png"
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
                  src="/images/modules/mod0bc.png"
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
                src="/images/modules/mod0bc.png"
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
          <section className="relative flex items-center justify-between w-full px-8 sm:px-12 lg:px-16 py-16 bg-[var(--orange)]">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
              <div className="text-white font-bold text-2xl">
                WE ARE LOOKING FOR TALENT!
              </div>
              <Link
                href="/careers"
                className="bg-white text-[var(--orange)] hover:bg-black hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
              >
                GO TO THE CAREERS PAGE
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
