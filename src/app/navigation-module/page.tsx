import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function NavigationModule() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Navigation Module
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl text-gray-300">
              The Navigation Module revolutionizes autonomous drone operations
              by enabling precise navigation in GPS-denied zones. Utilizing a
              combination of vision-based algorithms and three strategically
              placed onboard cameras, this module generates real-time GPS
              coordinates even in areas where satellite signals are unavailable
              or disrupted. Designed to enhance the reliability and autonomy of
              our drones, this system is ideal for applications in complex or
              hostile environments where conventional navigation systems fall
              short. This breakthrough offers unprecedented accuracy and
              stability, pushing the boundaries of autonomous drone technology
              and ensuring mission success in any environment.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-64 w-full">
              <Image
                src="/images/modules/mod1.png"
                alt="Navigation Module 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/images/modules/mod2.png"
                alt="Navigation Module 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 w-full">
              <Image
                src="/images/modules/mod3.png"
                alt="Navigation Module 3"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
