"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FireEffectProps {
  className?: string;
  intensity?: number;
}

export default function FireEffect({ className = "", intensity = 1 }: FireEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 0.5, y: 0.5 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseIntensity = isHovering ? intensity * 1.5 : intensity;

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}>
      {/* Main fire glow - follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[400px] rounded-full blur-3xl"
        animate={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          opacity: isHovering ? 0.6 * baseIntensity : 0.3 * baseIntensity,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,107,53,0.8) 0%, rgba(255,140,90,0.4) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Secondary warm glow */}
      <motion.div
        className="absolute w-[400px] h-[300px] rounded-full blur-2xl"
        animate={{
          left: `${mousePosition.x * 100 + 10}%`,
          top: `${mousePosition.y * 100 + 5}%`,
          opacity: isHovering ? 0.5 * baseIntensity : 0.2 * baseIntensity,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.05 }}
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,180,100,0.6) 0%, rgba(255,120,60,0.3) 50%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Ember particles */}
      {isHovering && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#ff6b35]"
              initial={{ 
                left: `${mousePosition.x * 100}%`, 
                top: `${mousePosition.y * 100}%`,
                opacity: 0,
                scale: 0
              }}
              animate={{
                left: `${mousePosition.x * 100 + (Math.random() - 0.5) * 20}%`,
                top: `${mousePosition.y * 100 - Math.random() * 30}%`,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      {/* Ambient flickering glow at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-[800px] h-[200px] -translate-x-1/2"
        animate={{
          opacity: [0.3, 0.5, 0.35, 0.45, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(ellipse at bottom center, rgba(255,107,53,0.4) 0%, rgba(255,80,40,0.2) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
