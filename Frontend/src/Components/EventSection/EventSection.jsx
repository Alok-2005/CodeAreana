import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionStyles.css";

gsap.registerPlugin(ScrollTrigger);

function EventSection() {
  useEffect(() => {
    gsap.fromTo(
      ".about-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="section-container about-container">
      <h2>About Us</h2>
      <p>
        <strong>Code Arena 3.0</strong>, organized by <strong>CodeCraft</strong> in
        partnership with <strong>ACM-W</strong>, is an exciting coding competition
        celebrating innovation, collaboration, and problem-solving. This year’s
        focus — <strong>AI in Healthcare</strong> — challenges participants to
        push boundaries and create impactful technological solutions that
        transform healthcare.
      </p>
    </section>
  );
}

export default EventSection;
