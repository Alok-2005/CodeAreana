import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionStyles.css";

gsap.registerPlugin(ScrollTrigger);

function Theme() {
  useEffect(() => {
    gsap.fromTo(
      ".theme-container",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".theme-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="theme" className="section-container theme-container">
      <h2>Theme: AI in Healthcare</h2>
      <p>
        Artificial Intelligence is revolutionizing healthcare — from predictive
        diagnostics and personalized treatment plans to advanced medical imaging
        and automated hospital workflows. This year’s theme encourages
        participants to explore innovative applications of AI that can improve
        lives and reshape the future of medicine.
      </p>
    </section>
  );
}

export default Theme;

