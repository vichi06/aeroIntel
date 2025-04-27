"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo/Logotextwhitetrans.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("dropdown-menu");
      const hamburger = document.getElementById("hamburger-button");

      if (
        menu &&
        hamburger &&
        !menu.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleHamburgerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const navLinks = [
    { href: "/", label: "PATHFINDER" },
    { href: "/skyfall", label: "SKYFALL" },
    { href: "/strike", label: "STRIKE" },
    { href: "/about-us", label: "About Us" },
    { href: "/careers", label: "Jobs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] bg-gradient-to-r from-black/80 to-black/30 fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-7xl rounded-xl px-2 sm:px-8 lg:px-6">
      <div className="relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="AeroIntel Logo"
                className="w-auto h-12 md:h-16"
              />
            </Link>
          </div>

          {/* Navigation Tabs - Hidden on mobile, visible on lg screens and up */}
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-[var(--orange)] px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 relative group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--orange)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu - Show on mobile only */}
          <div className="lg:hidden relative">
            <button
              id="hamburger-button"
              onClick={handleHamburgerClick}
              className="text-white p-2 rounded-md hover:bg-[var(--orange)] focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showMenu && (
              <div
                id="dropdown-menu"
                className="absolute top-full right-0 w-48 bg-white rounded-md shadow-lg py-1 mt-2"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--orange)] hover:text-white"
                    onClick={() => setShowMenu(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
