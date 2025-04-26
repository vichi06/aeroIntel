"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logo/Logotextwhitetrans.png";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const shouldCollapse = window.scrollY > 50;
      setIsCollapsed(shouldCollapse);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`transition-opacity duration-300 ${
                isCollapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={logo}
                alt="AeroIntel Logo"
                className="w-auto h-16 md:h-24"
              />
            </Link>
          </div>

          {/* Navigation Tabs - Hidden on mobile, visible on lg screens and up */}
          <div
            className={`hidden lg:flex space-x-4 transition-opacity duration-300 ${
              isCollapsed ? "opacity-0" : "opacity-100"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-[var(--orange)] text-white"
                    : "bg-[var(--grey)] text-black hover:bg-[var(--orange)] hover:text-white"
                } px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu - Show on mobile or when collapsed on desktop */}
          <div
            className={`absolute right-4 lg:right-16 ${
              isCollapsed ? "lg:block" : "lg:hidden"
            }`}
          >
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
          </div>

          {/* Dropdown Menu */}
          {showMenu && (
            <div
              id="dropdown-menu"
              className="absolute top-16 right-4 lg:right-16 w-48 bg-white rounded-md shadow-lg py-1"
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
    </nav>
  );
}
