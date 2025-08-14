import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionStyles.css";

gsap.registerPlugin(ScrollTrigger);

function Workflow() {
  useEffect(() => {
    gsap.fromTo(
      ".workflow-step",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".workflow-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  const steps = [
    "Registration & Team Formation",
    "Preliminary Online Round",
    "On-Site Coding Challenge",
    "Final Presentations & Judging",
    "Winner Announcement & Awards",
  ];

  return (
    <section id="workflow" className="section-container workflow-container">
      <h2>Workflow</h2>
      <div>
        {steps.map((step, index) => (
          <p key={index} className="workflow-step">
            {index + 1}. {step}
          </p>
        ))}
      </div>
    </section>
  );
}

export default Workflow;
