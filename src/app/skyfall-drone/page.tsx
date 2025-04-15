import Navbar from "@/components/Navbar";

export default function SkyfallDrone() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Skyfall Drone
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The world&apos;s first fully autonomous single use drone
            </h2>
          </section>

          {/* Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Autonomous Navigation
                </h3>
                <p className="text-gray-700">
                  Skyfall utilizes advanced AI and machine learning algorithms
                  for autonomous navigation, enabling it to operate
                  independently in complex environments.
                </p>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Single-Use Design
                </h3>
                <p className="text-gray-700">
                  Designed for one-time use, Skyfall is cost-effective and
                  eliminates the need for recovery operations, making it ideal
                  for high-risk missions.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Rapid Deployment
                </h3>
                <p className="text-gray-700">
                  Skyfall can be deployed within minutes, providing immediate
                  response capabilities for time-critical operations.
                </p>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Advanced AI Capabilities
                </h3>
                <p className="text-gray-700">
                  Equipped with state-of-the-art AI systems for object
                  recognition, threat assessment, and mission execution.
                </p>
              </div>
            </div>
          </section>

          {/* Applications Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-[var(--orange)]">
              Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Defense
                </h3>
                <p className="text-gray-700">
                  Ideal for military and security applications, providing rapid
                  response capabilities.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Search & Rescue
                </h3>
                <p className="text-gray-700">
                  Perfect for locating and assessing emergency situations in
                  hard-to-reach areas.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Surveillance
                </h3>
                <p className="text-gray-700">
                  Provides real-time monitoring and data collection in various
                  environments.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
