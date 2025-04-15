import Navbar from "@/components/Navbar";

export default function NavigationModule() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Navigation Module
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              A fully autonomous navigation module usable on any drone
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
                  Our navigation module provides fully autonomous capabilities,
                  enabling drones to operate independently in complex
                  environments without human intervention.
                </p>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Universal Compatibility
                </h3>
                <p className="text-gray-700">
                  Designed to be integrated with any drone system, our
                  navigation module can enhance the capabilities of existing
                  drone fleets.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Advanced AI Integration
                </h3>
                <p className="text-gray-700">
                  Leveraging cutting-edge AI algorithms for real-time decision
                  making and path planning in dynamic environments.
                </p>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Precision Navigation
                </h3>
                <p className="text-gray-700">
                  Ensures accurate positioning and navigation even in
                  challenging conditions, including GPS-denied environments.
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
                  Commercial Drones
                </h3>
                <p className="text-gray-700">
                  Enhance the capabilities of commercial drone fleets with
                  autonomous navigation.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Industrial Applications
                </h3>
                <p className="text-gray-700">
                  Perfect for industrial inspection, monitoring, and data
                  collection.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Research & Development
                </h3>
                <p className="text-gray-700">
                  Ideal for research institutions and development projects
                  requiring advanced navigation capabilities.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
