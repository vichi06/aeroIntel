import React from "react";
import Image from "next/image";

interface HeroProps {
  src: string;
  title: string;
  subtitle: string;
  type: "image" | "video";
}

const Hero: React.FC<HeroProps> = ({ src, title, subtitle, type }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden z-10">
      {type === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
          {title}
        </h1>
        <h4 className="text-shadow-lg text-base sm:text-lg md:text-xl lg:text-2xl">
          {subtitle}
        </h4>
      </div>
    </section>
  );
};

export default Hero;
