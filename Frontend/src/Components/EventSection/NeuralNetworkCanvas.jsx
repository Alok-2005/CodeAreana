import React, { useRef, useEffect } from "react";

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 60;
    const maxDistance = 150;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 3,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f2f3f6ff";

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect near mouse
        const distMouse = Math.hypot(node.x - mouse.current.x, node.y - mouse.current.y);
        if (distMouse < 120) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#ffffffff";
        } else {
          ctx.shadowBlur = 0;
        }

        // Draw connecting lines
        nodes.forEach((other) => {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,255,204,${1 - dist / maxDistance})`;
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
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas absolute "></canvas>;
};

export default NeuralNetworkCanvas;
