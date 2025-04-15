import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              About AeroIntel
            </h1>
          </section>

          {/* Company Info Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h2 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  At AeroIntel, we are dedicated to revolutionizing the drone
                  industry through innovative autonomous technology. Our mission
                  is to develop cutting-edge solutions that enhance safety,
                  efficiency, and reliability in aerial operations.
                </p>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h2 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  We envision a future where autonomous drones are seamlessly
                  integrated into various industries, providing safe, efficient,
                  and cost-effective solutions for complex challenges. Our goal
                  is to be at the forefront of this technological revolution.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h2 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Our Values
                </h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Innovation: Constantly pushing the boundaries of what&apos;s
                    possible
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Excellence: Committed to delivering the highest quality
                    solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Safety: Prioritizing the security and reliability of our
                    technology
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Sustainability: Developing eco-friendly solutions for the
                    future
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-[var(--orange)]">
              Our Team
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our team consists of experts in aerospace engineering, artificial
              intelligence, and autonomous systems. Together, we combine decades
              of experience to push the boundaries of drone technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Engineering
                </h3>
                <p className="text-gray-700">
                  Our engineering team brings together expertise in aerospace,
                  robotics, and systems design.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  AI & Software
                </h3>
                <p className="text-gray-700">
                  Our software team develops cutting-edge AI algorithms and
                  autonomous systems.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Operations
                </h3>
                <p className="text-gray-700">
                  Our operations team ensures seamless integration and
                  deployment of our solutions.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
