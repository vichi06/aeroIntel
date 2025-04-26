"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (jobName: string) => {
    setExpandedJob(expandedJob === jobName ? null : jobName);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <main className="flex flex-col gap-16">
          <section className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--orange)]">
              Jobs
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How to apply
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl text-gray-300">
              If you&apos;re excited by the idea of joining a dynamic team and
              think you have the expertise to help us shape the future of
              European defense technology, we&apos;d love to hear from you. At
              AEROINTEL, we&apos;re building the most innovative autonomous
              solutions in the industry, and we need passionate, driven
              individuals to join us on this mission.
              <br />
              <br />
              Whether your background is in robotics, software engineering,
              hardware design, or another relevant field, we offer opportunities
              to make a direct impact. If one of these roles feels like the
              perfect fit for your skills and ambitions
              <br />
              <br />
              Send us your CV, cover letter at{" "}
              <a
                href="mailto:jobs@aerointel.eu"
                className="text-[var(--orange)] hover:underline"
              >
                jobs@aerointel.eu
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <div
              className="bg-[var(--orange)] p-4 cursor-pointer transition-all duration-200 border border-white"
              onClick={() => toggleJob("robotics")}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  {expandedJob === "robotics" ? "−" : "+"}
                </span>
                <h4 className="text-2xl font-bold text-black text-left">
                  Robotics Engineer
                </h4>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedJob === "robotics" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="mt-4 text-black text-left">
                  <p className="mb-4">
                    As a ROS Software Engineer at AEROINTEL, you&apos;ll be part
                    of a pioneering team working on advanced drone swarming
                    technology. Your primary focus will be developing and
                    optimizing the robotic middleware and navigation
                    capabilities, with an emphasis on autonomous behaviors for
                    drones in diverse environments. This role will involve
                    designing, implementing, and testing ROS-based modules to
                    ensure stability, high performance, and efficient data
                    processing in real-world scenarios.
                  </p>

                  <h4 className="font-bold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Develop and maintain ROS-based modules for real-time
                      control, communication, and navigation.
                    </li>
                    <li>
                      Design and implement algorithms for autonomous navigation,
                      object detection, and sensor fusion.
                    </li>
                    <li>
                      Collaborate closely with cross-functional teams to
                      integrate ROS with our custom-built hardware and other
                      middleware.
                    </li>
                    <li>
                      Perform debugging, testing, and validation for software
                      deployed on drones.
                    </li>
                    <li>
                      Participate in code reviews, contribute to system
                      architecture, and document technical workflows.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      3+ years of experience in robotics software development
                      with ROS or ROS2.
                    </li>
                    <li>
                      Proven experience with C++/Python, and knowledge of ROS
                      communication (publish/subscribe, services, actions).
                    </li>
                    <li>
                      Strong understanding of robotics algorithms, including
                      path planning, sensor fusion, and state estimation.
                    </li>
                    <li>
                      Familiarity with embedded systems and real-time data
                      processing.
                    </li>
                    <li>
                      Ability to work independently and contribute actively in a
                      collaborative team environment.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Nice-to-Haves:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Experience with drone hardware or uncrewed aerial vehicles
                      (UAVs).
                    </li>
                    <li>
                      Background in SLAM, visual odometry, or similar
                      vision-based algorithms.
                    </li>
                    <li>
                      Familiarity with integration testing, CI/CD, and software
                      deployment in embedded environments.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">What We Offer:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Competitive salary and equity package.</li>
                    <li>
                      Opportunities for growth in a dynamic startup environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-[var(--orange)] p-4 cursor-pointer transition-all duration-200 border border-white"
              onClick={() => toggleJob("orbslam")}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  {expandedJob === "orbslam" ? "−" : "+"}
                </span>
                <h4 className="text-2xl font-bold text-black text-left">
                  ORB-SLAM Software Engineer
                </h4>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedJob === "orbslam" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="mt-4 text-black text-left">
                  <p className="mb-4">
                    We&apos;re looking for an ORB-SLAM Engineer to join our team
                    and drive the development of visual-based localization for
                    autonomous drones. This role focuses on enhancing the
                    precision and robustness of localization systems, especially
                    in GPS-denied environments, using ORB-SLAM and related
                    visual odometry methods. You&apos;ll play a crucial role in
                    making our navigation system resilient and reliable for
                    military-grade drone operations.
                  </p>

                  <h4 className="font-bold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Design and optimize ORB-SLAM-based localization algorithms
                      for use in real-time drone applications.
                    </li>
                    <li>
                      Conduct experiments and simulations to validate SLAM
                      performance in various environments.
                    </li>
                    <li>
                      Integrate SLAM algorithms with our vision sensors and
                      onboard compute platforms.
                    </li>
                    <li>
                      Collaborate with embedded engineers to ensure that SLAM
                      modules operate efficiently under hardware constraints.
                    </li>
                    <li>
                      Contribute to the documentation, code quality, and testing
                      framework for ORB-SLAM components.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      4+ years of experience with visual SLAM and localization
                      systems, specifically ORB-SLAM.
                    </li>
                    <li>Proficiency in C++ and experience with ROS or ROS2.</li>
                    <li>
                      Strong foundation in computer vision and 3D geometry, and
                      hands-on experience with camera calibration and sensor
                      fusion.
                    </li>
                    <li>
                      Experience optimizing algorithms for embedded systems with
                      limited resources.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Nice-to-Haves:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Experience with UAVs or other autonomous aerial vehicles.
                    </li>
                    <li>
                      Knowledge of additional SLAM frameworks or visual odometry
                      libraries.
                    </li>
                    <li>
                      Familiarity with GPU programming for real-time vision
                      processing.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">What We Offer:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Competitive salary and equity package.</li>
                    <li>
                      Opportunities for growth in a dynamic startup environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="bg-[var(--orange)] p-4 cursor-pointer transition-all duration-200 border border-white"
              onClick={() => toggleJob("hardware")}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">
                  {expandedJob === "hardware" ? "−" : "+"}
                </span>
                <h4 className="text-2xl font-bold text-black text-left">
                  Hardware/Robotics Engineer
                </h4>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedJob === "hardware" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="mt-4 text-black text-left">
                  <p className="mb-4">
                    As a Hardware Engineer at AEROINTEL, you will play a crucial
                    role in leading the design, integration, and testing of
                    hardware components for our cutting-edge drone technology.
                    You will work closely with cross-functional teams to ensure
                    optimal performance of our systems under diverse conditions,
                    balancing constraints such as SWAP (Size, Weight, and Power)
                    with cost-effectiveness and reliability. Your role will
                    encompass everything from CAD design to physical validation,
                    with opportunities to refine 3D models, run simulations, and
                    manage prototype production.
                  </p>

                  <h4 className="font-bold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Design and Integration: Lead the design and implementation
                      of hardware components using Fusion 360 and CAD, ensuring
                      compatibility and performance on drone platforms.
                    </li>
                    <li>
                      Simulation and Validation: Conduct CFD simulations and
                      real-world testing to validate hardware functionality,
                      durability, and aerodynamics in collaboration with our
                      testing team.
                    </li>
                    <li>
                      Prototyping: Create and iterate physical prototypes, with
                      a strong preference for experience in 3D printing and
                      rapid prototyping techniques.
                    </li>
                    <li>
                      Team Collaboration: Work closely with software and
                      embedded engineers to integrate hardware seamlessly with
                      drone navigation systems, including sensor and vision
                      modules.
                    </li>
                    <li>
                      Version Control and QA: Oversee version management and
                      quality assurance for components, ensuring they meet both
                      internal and industry standards.
                    </li>
                    <li>
                      Vendor Relations: Coordinate with suppliers and vendors to
                      source, validate, and manage hardware components, ensuring
                      compliance with design and performance specifications.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      4+ years of experience in hardware engineering for
                      robotics, drones, or similar embedded systems.
                    </li>
                    <li>
                      Expertise in Fusion 360, CAD, and CFD for designing and
                      validating hardware solutions.
                    </li>
                    <li>
                      Proven track record in designing hardware that balances
                      SWAP constraints while maintaining robustness and
                      cost-efficiency.
                    </li>
                    <li>
                      Experience in PCB design, power management, and
                      integrating sensor arrays and camera modules.
                    </li>
                    <li>
                      Ability to work independently and effectively within
                      multidisciplinary teams.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">Nice-to-Haves:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Experience with 3D printing techniques, including hands-on
                      prototyping and design iteration.
                    </li>
                    <li>
                      Knowledge of drone platforms or uncrewed aerial vehicles
                      (UAVs).
                    </li>
                    <li>
                      Familiarity with ROS, MAVLink, and other protocols used in
                      robotics and drone communication.
                    </li>
                  </ul>

                  <h4 className="font-bold mb-2 mt-4">What We Offer:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Competitive salary and equity package.</li>
                    <li>
                      Opportunities for growth in a dynamic startup environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
