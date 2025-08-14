import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SectionStyles.css";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  useEffect(() => {
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".gallery-container",
          start: "top 80%",
        },
      }
    );
  }, []);

  const images = [
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
  ];

  return (
    <section id="gallery" className="section-container gallery-container">
      <h2>Previous Events</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Event ${index + 1}`} className="gallery-item" />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

