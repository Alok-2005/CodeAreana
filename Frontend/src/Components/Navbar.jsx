import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about_club" },
    { name: "Team", link: "#team" },
    { name: "CodeArena 3.0", link: "/events" },
    { name: "Contact", link: "#contact_us" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#181818]/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/white-logo.png"
              alt="CodeCraft x PCCOER Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-[#29a9fd] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#181818] transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3 text-lg font-medium">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block py-2 px-2 rounded-md hover:bg-gray-800 hover:text-[#29a9fd] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
