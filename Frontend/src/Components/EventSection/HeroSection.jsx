import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const HeroSection = ({ onRegisterClick }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);
  const charRefs = useRef([]);

  // Create particle references
  useEffect(() => {
    particlesRef.current = [];
    for (let i = 0; i < 30; i++) {
      particlesRef.current.push(React.createRef());
    }
  }, []);

  // Set up animations
  useEffect(() => {
    // Ensure all elements exist before animating
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !buttonRef.current || !glowRef.current) {
      return;
    }

    // Get valid particle elements
    const validParticles = particlesRef.current
      .map(p => p.current)
      .filter(Boolean);

    // Initial animations
    gsap.set([subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });
    
    if (validParticles.length > 0) {
      gsap.set(validParticles, {
        opacity: 0,
        scale: 0
      });
    }
    
    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.5
    });

    // Create character refs for title animation
    const titleChars = "Code Arena 3.0".split("");
    
    // Main timeline
    const tl = gsap.timeline();
    
    // Animate each character in the title
    charRefs.current.forEach((charEl, i) => {
      if (!charEl) return;
      
      gsap.set(charEl, {
        opacity: 0,
        y: 50,
        rotation: 10
      });
      
      tl.to(charEl, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
        delay: i * 0.05
      }, 0);
    });
    
    // Animate subtitle
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3");
    
    // Animate button
    tl.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");
    
    // Animate particles
    if (validParticles.length > 0) {
      tl.to(validParticles, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.5");
    }
    
    // Animate glow effect
    tl.to(glowRef.current, {
      opacity: 0.8,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    }, "-=1");
    
    // Floating particles animation
    validParticles.forEach((particle, i) => {
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;
      const yoyo = true;
      const repeat = -1;
      
      gsap.to(particle, {
        y: `+=${40 + Math.random() * 60}`,
        x: `+=${20 + Math.random() * 40}`,
        duration,
        delay,
        yoyo,
        repeat,
        ease: "sine.inOut"
      });
    });

    // Continuous title glow animation
    gsap.to(titleRef.current, {
      textShadow: "0 0 30px rgba(0, 229, 255, 0.8)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);
  return (
    <section 
      ref={heroRef}
      className="hero-container"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        perspective: "1000px"
      }}
    >
      {/* Neural network canvas */}
      <NeuralNetworkCanvas />
      
      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          ref={particlesRef.current[i]}
          className="hero-particle"
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${5 + Math.random() * 15}px`,
            height: `${5 + Math.random() * 15}px`,
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
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.5) 0%, rgba(15,12,41,0) 70%)",
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
        className="hero-content"
        style={{
          textAlign: "center",
          zIndex: 3,
          padding: "20px",
          width: "100%", 
          maxWidth: "1200px",  
          margin: "0 auto", 
        }}
      >
        <h1 
          ref={titleRef}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)", // Slightly smaller on mobile
            marginBottom: "1rem",
            color: "white",
            textShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            lineHeight: 1.1,
            overflow: "hidden",
            padding: "0 20px", // Add padding for mobile
            boxSizing: "border-box" // Ensure padding is included in width
          }}
        >
          {"Code Arena 3.0".split("").map((char, i) => (
            <span 
              key={i}
              ref={el => charRefs.current[i] = el}
              style={{
                display: "inline-block",
                minWidth: char === " " ? "0.5em" : "auto"
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p 
          ref={subtitleRef}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)", // Slightly smaller
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "2rem", // Reduced margin
            letterSpacing: "4px",
            textTransform: "uppercase",
            padding: "0 20px" // Add padding for mobile
          }}
        >
          AI in Healthcare
        </p>
        <button
          ref={buttonRef}
          onClick={onRegisterClick}
          style={{
            position: "relative",
            background: "transparent",
            color: "white",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)", // Slightly smaller
            padding: "12px 35px", // Smaller padding
            border: "2px solid #00e5ff",
            borderRadius: "50px",
            cursor: "pointer",
            overflow: "hidden",
            transition: "all 0.3s ease",
            letterSpacing: "1px",
            zIndex: 1,
            margin: "0 auto", // Center the button
            display: "block" // Ensure it respects margin auto
          }}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              background: "rgba(0, 229, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
              y: -3,
              duration: 0.3
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              background: "transparent",
              boxShadow: "none",
              y: 0,
              duration: 0.3
            });
          }}
        >
          Register Now
          <span 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.4), transparent)",
              transform: "translateX(-100%)",
              transition: "transform 0.6s ease",
              zIndex: -1
            }}
            className="btn-hover-effect"
          />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;