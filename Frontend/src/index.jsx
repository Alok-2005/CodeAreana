import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Tooltip } from "bootstrap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MoreInfo from "./components/MoreInfo";
import Organizers from "./components/Organizers";
import Conduct from "./components/CodeOfConduct";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Team from "./Components/Team";
import "./index.css"
export default function index() {
  useEffect(() => {
    // Initialize Bootstrap tooltips (if any exist)
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => new Tooltip(el));
  }, []);

  const redirectToContact = () => {
    const el = document.getElementById("contact_us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return  (
       <>
      <Navbar />
      <Hero />
      <About />
      <MoreInfo />
      <Organizers />
      <Team />
      <Conduct />
      <Contact />
      <Footer />
    </>
  );
}
