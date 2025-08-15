import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const workflowRef = useRef(null);
  const titleRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const stepRefs = useRef([]);
  const iconRefs = useRef([]);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);

  // Create references
  useEffect(() => {
    particlesRef.current = [];
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(React.createRef());
    }

    stepRefs.current = [];
    iconRefs.current = [];
    for (let i = 0; i < 5; i++) {
      stepRefs.current.push(React.createRef());
      iconRefs.current.push(React.createRef());
    }
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!workflowRef.current || !titleRef.current || !stepsContainerRef.current || !glowRef.current) {
      return;
    }

    const validParticles = particlesRef.current
      .map(p => p.current)
      .filter(Boolean);

    const validSteps = stepRefs.current
      .map(s => s.current)
      .filter(Boolean);

    const validIcons = iconRefs.current
      .map(icon => icon.current)
      .filter(Boolean);

    // Initial setup
    gsap.set([titleRef.current], {
      opacity: 0,
      y: 50
    });

    gsap.set(stepsContainerRef.current, {
      opacity: 0
    });

    gsap.set(validSteps, {
      opacity: 0,
      x: -50
    });

    gsap.set(validIcons, {
      opacity: 0,
      scale: 0.5
    });

    gsap.set(validParticles, {
      opacity: 0,
      scale: 0
    });

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.8
    });

    // Main timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workflowRef.current,
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

    // Animate steps container
    tl.to(stepsContainerRef.current, {
      opacity: 1,
      duration: 0.5
    }, "-=0.3");

    // Animate steps and icons with stagger
    if (validSteps.length > 0) {
      tl.to(validSteps, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out"
      }, "-=0.5");

      tl.to(validIcons, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)"
      }, "-=0.5");
    }

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

    // Subtle pulse animation for icons
    validIcons.forEach((icon) => {
      gsap.to(icon, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 2
      });
    });

    // Glow for title
    gsap.to(titleRef.current, {
      textShadow: "0 0 20px rgba(0, 229, 255, 0.5)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, []);

  // Workflow steps
  const steps = [
    {
      title: "Registration & Team Formation",
      description: "Sign up solo or with a team of up to 4. Form diverse groups with clinicians, coders, and innovators to tackle healthcare challenges.",
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M16 18l2-2H18a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2l2 2"/><path d="M8 21h8"/></svg>
    },
    {
      title: "On-Spot Problem Statements",
      description: "Discover real-world AI in healthcare challenges on the hackathon day. Access datasets and mentor guidance to spark your innovation.",
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    },
    {
      title: "Hack, Code & Build",
      description: "Develop cutting-edge AI solutions using provided tools and APIs. Collaborate and code under time pressure to solve healthcare problems.",
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    },
    {
      title: "Presentations & Judging",
      description: "Pitch your AI-driven healthcare solution to a panel of experts. Highlight innovation, feasibility, and impact to stand out.",
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M17 21h-10a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><line x1="9" y1="9" x2="10" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
    },
    {
      title: "Awards & Cash Prizes",
      description: "Top projects win cash prizes, industry recognition, and opportunities to scale your AI healthcare solution with partners.",
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    }
  ];

  return (
    <section
      ref={workflowRef}
      className="workflow-container"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        perspective: "1000px",
        padding: "60px 20px",
        zIndex: 0
      }}
    >
      {/* Neural network canvas */}
      <NeuralNetworkCanvas style={{ zIndex: 1 }} />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          ref={particlesRef.current[i]}
          className="workflow-particle"
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "linear-gradient(45deg, rgba(0, 229, 255, 0.8), rgba(0, 229, 255, 0.6))",
            boxShadow: "0 4px 15px rgba(0, 229, 255, 0.3)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
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
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%)",
          zIndex: 3,
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
        background: "radial-gradient(circle at center, transparent 0%, rgba(15, 12, 41, 0.9) 70%)",
        zIndex: 4
      }} />

      <div 
        className="workflow-content"
        style={{
          textAlign: "center",
          zIndex: 5,
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
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5.5vw, 3.8rem)",
            color: "white",
            textShadow: "0 4px 15px rgba(0, 229, 255, 0.5), 0 2px 5px rgba(0, 0, 0, 0.4)",
            letterSpacing: "2px",
            lineHeight: 1.2,
            marginBottom: "3rem",
            background: "rgba(15, 12, 41, 0.7)",
            padding: "10px 20px",
            borderRadius: "10px"
          }}
        >
          Hackathon Workflow
        </h2>

        <div
          ref={stepsContainerRef}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              ref={stepRefs.current[index]}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "600px",
                marginBottom: "2rem",
                padding: "20px",
                background: "rgba(15, 12, 41, 0.8)",
                borderRadius: "15px",
                boxShadow: "0 6px 25px rgba(0, 229, 255, 0.3)",
                zIndex: 5
              }}
            >
              <div
                ref={iconRefs.current[index]}
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "linear-gradient(45deg, #00e5ff, #0091ea)",
                  borderRadius: "50%",
                  padding: "10px",
                  boxShadow: "0 4px 15px rgba(0, 229, 255, 0.4)"
                }}
              >
                {step.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "white",
                  textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                  marginBottom: "0.5rem",
                  paddingLeft: "40px",
                  letterSpacing: "1px"
                }}
              >
                {index + 1}. {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', 'Segoe UI', sans-serif",
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                  paddingLeft: "40px",
                  lineHeight: 1.6
                }}
              >
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "2px",
                    height: "30px",
                    background: "linear-gradient(to bottom, rgba(0, 229, 255, 0.8), transparent)",
                    zIndex: 4
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;