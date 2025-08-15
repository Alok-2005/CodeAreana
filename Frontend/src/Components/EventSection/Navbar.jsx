"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import codecraftLogo from "../../assets/codecraft-logo.png";
import acmwLogo from "../../assets/acmw-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  const menuItems = [
    { label: "ABOUT", to: "event" }, // Updated to match CodeArena.jsx section ID
    { label: "THEME", to: "theme" },
    { label: "WORKFLOW", to: "workflow" },
    { label: "PRIZES", to: "prizes" },
    { label: "PREVIOUS EVENTS", to: "previous-events" }, // Note: No section exists for this in CodeArena.jsx
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic offset based on navbar height
  const getNavbarHeight = () => {
    return navbarRef.current ? navbarRef.current.offsetHeight : 80;
  };

  // Custom smooth scroll fallback to avoid react-scroll lag
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = getNavbarHeight();
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setIsOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} ref={navbarRef}>
      <div className="navbar-left">
        <div className="logo-container">
          <img src={codecraftLogo} alt="CodeCraft" className="logo" />
          <img src={acmwLogo} alt="ACM-W" className="logo" />
        </div>
      </div>

      {/* Hamburger Button */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu */}
      <ul className={`navbar-right ${isOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.to}>
            <Link
              activeClass="active"
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-getNavbarHeight()} // Dynamic offset
              onClick={() => handleSmoothScroll(item.to)} // Fallback smooth scroll
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;