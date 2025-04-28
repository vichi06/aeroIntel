import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const navLinks = [
    { href: "/", label: "PATHFINDER" },
    { href: "/skyfall", label: "SKYFALL" },
    { href: "/strike", label: "STRIKE" },
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Jobs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="w-full pb-8 pt-12 text-center text-white bg-transparent border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/images/logo/Logotextwhitetrans.png"
                alt="AeroIntel Logo"
                className="mx-auto w-[120px] h-auto"
              />
            </Link>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/aerospaceintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <p className="text-sm md:text-base">
            © 2025 AeroIntel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
