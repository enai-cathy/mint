"use client";

import { useEffect, useRef } from "react";

export default function SparkleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparkles: any[] = [];
  const MAX_SPARKLES = 100; // Limit total sparkles

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastSpawn = 0;

    const mouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", mouseMove);

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Slow down sparkle spawning (1 every ~25ms)
      if (timestamp - lastSpawn > 25) {
        for (let i = 0; i < 2; i++) {
          sparkles.push({
            x: mouseX,
            y: mouseY,
            radius: Math.random() * 1.5 + 1,
            opacity: 1,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
          });
        }
        lastSpawn = timestamp;
      }

      // Trim to max allowed
      while (sparkles.length > MAX_SPARKLES) {
        sparkles.shift();
      }

      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(179, 218, 103, ${s.opacity})`; // Minty sparkle
        ctx.fill();

        // Update movement
        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.015;
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
    />
  );
}
