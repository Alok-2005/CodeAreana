import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import codecraftLogo from "../../assets/codecraft-logo.png";
import acmwLogo from "../../assets/acmw-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", to: "about" },
    { label: "THEME", to: "theme" },
    { label: "PRIZES", to: "prizes" },
    { label: "PREVIOUS EVENTS", to: "previous-events" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={codecraftLogo} alt="CodeCraft" className="logo" />
        <img src={acmwLogo} alt="ACM-W" className="logo" />
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
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
              duration={200}
              spy={true}
              offset={-80}
              onClick={() => setIsOpen(false)} // close menu after click
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
