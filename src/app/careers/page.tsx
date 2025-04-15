import Navbar from "@/components/Navbar";

export default function Careers() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-space-mono)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              WE ARE RECRUITING TALENT
            </h1>
          </section>

          {/* Join Our Team Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-[var(--orange)]">
              Join Our Team
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We&apos;re looking for passionate individuals who want to be part
              of revolutionizing the drone industry. Join us in developing
              cutting-edge autonomous technology and shaping the future of
              aerial systems.
            </p>
          </section>

          {/* Open Positions Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-[var(--orange)] text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Senior Aerospace Engineer
                </h3>
                <p className="text-gray-700 mb-4">
                  Lead the development of our next-generation drone systems and
                  contribute to groundbreaking innovations in autonomous flight.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    5+ years of experience in aerospace engineering
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Expertise in drone systems and autonomous flight
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Strong problem-solving and leadership skills
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  AI/ML Engineer
                </h3>
                <p className="text-gray-700 mb-4">
                  Develop advanced autonomous navigation algorithms and machine
                  learning models for our drone systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Strong background in AI and machine learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Experience with computer vision and robotics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Proficiency in Python and relevant ML frameworks
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Systems Integration Specialist
                </h3>
                <p className="text-gray-700 mb-4">
                  Ensure seamless integration of hardware and software
                  components in our autonomous systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Experience in systems integration and testing
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Knowledge of embedded systems and robotics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Strong debugging and problem-solving skills
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--grey)] rounded-lg p-8 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-2xl font-bold text-[var(--orange)] mb-4">
                  Software Developer
                </h3>
                <p className="text-gray-700 mb-4">
                  Contribute to the development of our autonomous navigation
                  software and control systems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Strong programming skills in C++ and Python
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Experience with robotics frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--orange)] mr-2">•</span>
                    Knowledge of real-time systems
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-[var(--orange)]">
              Why Join AeroIntel?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  Work on cutting-edge technology and push the boundaries of
                  what&apos;s possible in autonomous systems.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Growth
                </h3>
                <p className="text-gray-700">
                  Opportunities for professional development and career
                  advancement in a fast-growing industry.
                </p>
              </div>
              <div className="bg-[var(--grey)] rounded-lg p-6 border-2 border-transparent hover:border-[var(--orange)] transition-all duration-200">
                <h3 className="text-xl font-bold text-[var(--orange)] mb-4">
                  Impact
                </h3>
                <p className="text-gray-700">
                  Make a real difference by developing solutions that will shape
                  the future of autonomous technology.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
