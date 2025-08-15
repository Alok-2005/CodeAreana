import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import codecraftLogo from "../../assets/codecraft-logo.png";
import acmwLogo from "../../assets/acmw-logo.png";

const HeroSection = ({ onRegisterClick }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);
  const typewriterRef = useRef(null);
  const [typewriterText, setTypewriterText] = useState('');

  // Typewriter effect
  useEffect(() => {
    const text = "Code Arena 3.0";
    let index = 0;
    
    const typeWriter = () => {
      if (index <= text.length) {
        setTypewriterText(text.substring(0, index));
        index++;
        if (index <= text.length) {
          setTimeout(typeWriter, 150);
        }
      }
    };
    
    // Start typewriter after initial delay
    setTimeout(() => {
      typeWriter();
    }, 1500);
  }, []);

  // Create particle references
  useEffect(() => {
    particlesRef.current = [];
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(React.createRef());
    }
  }, []);

  // Set up animations
  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !buttonRef.current || !glowRef.current) {
      return;
    }

    const validParticles = particlesRef.current
      .map(p => p.current)
      .filter(Boolean);

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
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

    // Main timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate presenter text
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate subtitle
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3");

    // Animate button
    tl.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

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
        y: `+=${30 + Math.random() * 40}`,
        x: `+=${15 + Math.random() * 30}`,
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
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          ref={particlesRef.current[i]}
          className="hero-particle"
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "linear-gradient(45deg, rgba(0, 229, 255, 0.8), rgba(0, 229, 255, 0.6))",
            boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 12}px`,
            height: `${6 + Math.random() * 12}px`,
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
          width: "600px",
          height: "600px",
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
        className="hero-content"
        style={{
          textAlign: "center",
          zIndex: 3,
          padding: "40px 20px",
          width: "100%", 
          maxWidth: "1000px",  
          margin: "0 auto", 
        }}
      >
        <div 
          ref={titleRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            marginBottom: "1rem",
            color: "rgba(255, 255, 255, 0.9)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            lineHeight: 1.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          <img 
            src={codecraftLogo} 
            alt="CodeCraft" 
            style={{ 
              height: "150px",
              width: "auto",
              maxWidth: "300px"
            }} 
          /> 
          <span style={{ fontSize: "1.5em" }}>X</span>
          <img 
            src={acmwLogo} 
            alt="ACM-W" 
            style={{ 
              height: "150px",
              width: "auto",
              maxWidth: "300px"
            }} 
          />
          <br />
        </div>

          <span style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: "bold",

            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            marginBottom: "1rem",
            color: "rgba(255, 255, 255, 0.9)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            lineHeight: 1.4,}}>Presents</span>
        
        <h1 
          ref={typewriterRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            marginBottom: "1.5rem",
            color: "white",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            letterSpacing: "1px",
            lineHeight: 1.1,
            minHeight: "1.2em"
          }}
        >
          {typewriterText}
          <span 
            style={{ 
              opacity: typewriterText.length < 14 ? 1 : 0,
              animation: typewriterText.length < 14 ? 'blink 1s infinite' : 'none',
              marginLeft: '2px',
              color: 'white'
            }}
          >
            |
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.1rem, 2.8vw, 1.4rem)",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "3rem",
            letterSpacing: "2px",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 3rem auto"
          }}
        >
          Join the ultimate coding competition and showcase your skills
        </p>
        
        <button
          ref={buttonRef}
          onClick={onRegisterClick}
          style={{
            position: "relative",
            background: "linear-gradient(45deg, #00e5ff, #0091ea)",
            color: "white",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            padding: "16px 45px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            overflow: "hidden",
            transition: "all 0.4s ease",
            letterSpacing: "1px",
            zIndex: 1,
            boxShadow: "0 8px 25px rgba(0, 229, 255, 0.4)",
            textTransform: "uppercase"
          }}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              transform: "translateY(-3px) scale(1.05)",
              boxShadow: "0 12px 35px rgba(0, 229, 255, 0.5)",
              duration: 0.3
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              transform: "translateY(0) scale(1)",
              boxShadow: "0 8px 25px rgba(0, 229, 255, 0.4)",
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
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transform: "translateX(-100%)",
              transition: "transform 0.6s ease",
              zIndex: -1
            }}
            className="btn-hover-effect"
          />
        </button>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .hero-container:hover .btn-hover-effect {
          transform: translateX(100%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;