import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Neural Network Canvas Component
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const nodes = [];
    const nodeCount = 40;
    const maxDistance = 120;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw nodes
        ctx.fillStyle = "rgba(0, 229, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect near mouse
        const distMouse = Math.hypot(node.x - (mouse.current.x || 0), node.y - (mouse.current.y || 0));
        if (distMouse < 100) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#00e5ff";
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw connecting lines
        nodes.forEach((other) => {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.3 * (1 - dist / maxDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "auto"
      }}
    />
  );
};

function EventSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Create particle references
  useEffect(() => {
    particlesRef.current = [];
    for (let i = 0; i < 15; i++) {
      particlesRef.current.push(React.createRef());
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!section || !title || !content || !glow) return;

    const validParticles = particlesRef.current
      .map(p => p.current)
      .filter(Boolean);

    // Initial setup
    gsap.set([title, content], {
      opacity: 0,
      y: 60
    });

    gsap.set(validParticles, {
      opacity: 0,
      scale: 0
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.5
    });

    // Scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => setIsVisible(true),
        onLeave: () => setIsVisible(false),
        onEnterBack: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false)
      }
    });

    // Main animations
    tl.to(glow, {
      opacity: 0.2,
      scale: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1")
    .to(content, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.6");

    // Animate particles
    if (validParticles.length > 0) {
      tl.to(validParticles, {
        opacity: 0.7,
        scale: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=1");
    }

    // Floating particles animation
    validParticles.forEach((particle, i) => {
      const duration = 5 + Math.random() * 3;
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
        duration: 10 + Math.random() * 5,
        repeat: -1,
        ease: "none"
      });
    });

    // Title glow effect
    gsap.to(title, {
      textShadow: "0 0 25px rgba(0, 229, 255, 0.6)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        padding: "0px 20px"
        
      }}
    >
      {/* Neural network canvas */}
      <NeuralNetworkCanvas />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i}
          ref={particlesRef.current[i]}
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "linear-gradient(45deg, rgba(0, 229, 255, 0.8), rgba(0, 145, 234, 0.6))",
            boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            zIndex: 2
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
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
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
        background: "radial-gradient(circle at center, transparent 0%, rgba(15, 12, 41, 0.6) 80%)",
        zIndex: 2
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 3,
        maxWidth: "900px",
        textAlign: "center",
        padding: "40px"
      }}>
        <h2 
          ref={titleRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            marginBottom: "2.5rem",
            color: "white",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            letterSpacing: "1px",
            lineHeight: 1.2
          }}
        >
          About Us
        </h2>
        
        <div 
          ref={contentRef}
          style={{
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            lineHeight: 1.8,
            color: "rgba(255, 255, 255, 0.9)",
            letterSpacing: "0.5px",
            maxWidth: "800px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(0, 229, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            <span style={{ 
              fontWeight: 700, 
              color: "#00e5ff",
              fontSize: "1.1em"
            }}>Code Arena 3.0</span>, organized by{" "}
            <span style={{ 
              fontWeight: 600, 
              color: "#00e5ff" 
            }}>CodeCraft</span>{" "}
            in partnership with{" "}
            <span style={{ 
              fontWeight: 600, 
              color: "#00e5ff" 
            }}>ACM-W</span>, is an exciting coding competition celebrating innovation, collaboration, and problem-solving.
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            This year's focus —{" "}
            <span style={{ 
              fontWeight: 700, 
              color: "#00e5ff",
              textShadow: "0 0 10px rgba(0, 229, 255, 0.5)"
            }}>AI in Healthcare</span>{" "}
            — challenges participants to push boundaries and create impactful technological solutions that transform healthcare.
          </p>
          
          <div style={{
            marginTop: "2rem",
            padding: "20px 0",
            borderTop: "1px solid rgba(0, 229, 255, 0.2)"
          }}>
            <p style={{ 
              fontSize: "1.05em",
              fontStyle: "italic",
              color: "rgba(255, 255, 255, 0.8)"
            }}>
              Join us in shaping the future of technology and healthcare through innovative coding solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;