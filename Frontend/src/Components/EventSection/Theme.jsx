import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

gsap.registerPlugin(ScrollTrigger);

const Theme = () => {
  const themeRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);

  // Create particle references
  useEffect(() => {
    particlesRef.current = [];
    for (let i = 0; i < 15; i++) {
      particlesRef.current.push(React.createRef());
    }
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!themeRef.current || !titleRef.current || !textRef.current || !glowRef.current) {
      return;
    }

    const validParticles = particlesRef.current
      .map(p => p.current)
      .filter(Boolean);

    // Initial setup
    gsap.set([titleRef.current, textRef.current], {
      opacity: 0,
      y: 50
    });

    if (validParticles.length > 0) {
      gsap.set(validParticles, {
        opacity: 0,
        scale: 0
      });
    }

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // Main timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: themeRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        toggleActions: "play none none reset"
      }
    });

    // Animate title
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate text
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");

    // Animate particles
    if (validParticles.length > 0) {
      tl.to(validParticles, {
        opacity: 0.8,
        scale: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: "back.out(1.7)"
      }, "-=0.6");
    }

    // Animate glow effect
    tl.to(glowRef.current, {
      opacity: 0.3,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    }, "-=1");

    // Floating particles animation
    validParticles.forEach((particle, i) => {
      const duration = 4 + Math.random() * 3;
      const delay = Math.random() * 2;
      
      gsap.to(particle, {
        y: `+=${20 + Math.random() * 30}`,
        x: `+=${10 + Math.random() * 20}`,
        duration,
        delay,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      
      gsap.to(particle, {
        rotation: 360,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        ease: "none"
      });
    });

    // Subtle glow animation for title
    gsap.to(titleRef.current, {
      textShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <section
      ref={themeRef}
      className="theme-container"
      style={{
        position: "relative",
        minHeight: "60vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        perspective: "1000px",
        padding: "60px 20px"
      }}
    >
      {/* Neural network canvas */}
      <NeuralNetworkCanvas />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          ref={particlesRef.current[i]}
          className="theme-particle"
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "linear-gradient(45deg, rgba(0, 229, 255, 0.8), rgba(0, 229, 255, 0.6))",
            boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            zIndex: 1
          }}
        />
      ))}

      {/* Center glow effect */}
      <div 
        ref={glowRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%)",
          zIndex: 2,
          pointerEvents: "none"
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at center, transparent 0%, rgba(15, 12, 41, 0.8) 70%)",
        zIndex: 2
      }} />

      <div 
        className="theme-content"
        style={{
          textAlign: "center",
          zIndex: 3,
          padding: "40px 20px",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        <h2 
          ref={titleRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "white",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            letterSpacing: "1px",
            lineHeight: 1.2,
            marginBottom: "1.5rem"
          }}
        >
          Theme: AI in Healthcare
        </h2>
        <p 
          ref={textRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "1px",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          Artificial Intelligence is transforming healthcare through predictive diagnostics, personalized treatment plans, advanced medical imaging, and streamlined hospital workflows. This year’s theme challenges participants to create innovative AI solutions that enhance patient care, optimize medical processes, and shape the future of medicine.
        </p>
      </div>
    </section>
  );
};

export default Theme;