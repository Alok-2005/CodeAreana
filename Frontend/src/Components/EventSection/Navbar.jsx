import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import codecraftLogo from "../../assets/codecraft-logo.png";
import acmwLogo from "../../assets/acmw-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "ABOUT", to: "about" },
    { label: "THEME", to: "theme" },
    { label: "PRIZES", to: "prizes" },
    { label: "PREVIOUS EVENTS", to: "previous-events" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <div className="logo-container">
        
                  <img src={codecraftLogo} alt="CodeCraft" className="logo" />
        <img src={acmwLogo} alt="ACM-W" className="logo" />
        </div>
      </div>

      {/* Hamburger Button */}
      <div 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={toggleMenu}
      >
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
              offset={-80}
              onClick={() => setIsOpen(false)}
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