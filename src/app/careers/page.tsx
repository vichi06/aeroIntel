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
              CAREERS
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
              className="bg-[var(--grey)] rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-[var(--orange)] hover:border-2"
              onClick={() => toggleJob("software")}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[var(--orange)]">
                  Software Engineer
                </h3>
                <span className="text-2xl">
                  {expandedJob === "software" ? "−" : "+"}
                </span>
              </div>
              {expandedJob === "software" && (
                <div className="mt-4 text-gray-300">
                  <p className="mb-4">
                    We are looking for a skilled Software Engineer to join our
                    team and help develop our autonomous navigation systems.
                  </p>
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Strong experience in C++ and Python</li>
                    <li>Knowledge of robotics frameworks (ROS, PX4)</li>
                    <li>Experience with computer vision and AI</li>
                    <li>Understanding of real-time systems</li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="bg-[var(--grey)] rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-[var(--orange)] hover:border-2"
              onClick={() => toggleJob("hardware")}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[var(--orange)]">
                  Hardware Engineer
                </h3>
                <span className="text-2xl">
                  {expandedJob === "hardware" ? "−" : "+"}
                </span>
              </div>
              {expandedJob === "hardware" && (
                <div className="mt-4 text-gray-300">
                  <p className="mb-4">
                    Join our hardware team to design and develop cutting-edge
                    drone systems and components.
                  </p>
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Experience in PCB design and embedded systems</li>
                    <li>Knowledge of sensor integration</li>
                    <li>
                      Understanding of power systems and battery management
                    </li>
                    <li>Experience with CAD software</li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="bg-[var(--grey)] rounded-lg p-6 cursor-pointer transition-all duration-200 hover:border-[var(--orange)] hover:border-2"
              onClick={() => toggleJob("ai")}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[var(--orange)]">
                  AI Engineer
                </h3>
                <span className="text-2xl">
                  {expandedJob === "ai" ? "−" : "+"}
                </span>
              </div>
              {expandedJob === "ai" && (
                <div className="mt-4 text-gray-300">
                  <p className="mb-4">
                    Help us develop advanced AI algorithms for autonomous
                    navigation and decision-making systems.
                  </p>
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Strong background in machine learning and computer vision
                    </li>
                    <li>Experience with deep learning frameworks</li>
                    <li>Knowledge of reinforcement learning</li>
                    <li>Understanding of autonomous systems</li>
                  </ul>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
