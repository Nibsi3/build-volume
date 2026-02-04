"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [splitOpen, setSplitOpen] = useState(false);

  useEffect(() => {
    // Start split animation after 2.5 seconds
    const splitTimer = setTimeout(() => {
      setSplitOpen(true);
    }, 2500);

    // Remove loading screen after split completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3300);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Left Panel */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#141e30] transition-transform duration-700 ease-in-out ${
          splitOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Right Panel */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#141e30] transition-transform duration-700 ease-in-out ${
          splitOpen ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Content Layer (fire + text) - fades out before split */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          splitOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Ambient light glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom center, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0) 90%)",
            animation: "firelight 2s ease infinite",
          }}
        />

        {/* SVG Filter for gooey effect */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        {/* Fire Container */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 mb-[-30px] w-[200px] h-[200px] overflow-hidden rounded-full">
          {/* Fire elements with goo filter */}
          <div className="absolute w-full h-full" style={{ filter: "url(#goo)" }}>
            {/* Bottom base */}
            <div
              className="absolute left-[50px] bottom-0 w-[100px] h-[30px] rounded-[30px]"
              style={{ background: "#ff9800" }}
            />

            {/* Fire circles */}
            {[...Array(15)].map((_, i) => (
              <figure
                key={i}
                className="absolute bottom-0 w-[70px] h-[70px] rounded-full m-0"
                style={{
                  background: "#ff9800",
                  left: `calc(50% - 70px)`,
                  marginLeft: `${(i * 17) % 70}px`,
                  marginBottom: `${-15 - (i * 11) % 25}px`,
                  animation: `fireCircle 1.2s ${i * 0.14}s cubic-bezier(0.5, 0.07, 0.64, 1) infinite`,
                }}
              />
            ))}
          </div>

          {/* Reverse circles (create flame shape) */}
          <div className="absolute w-full h-full">
            {[...Array(4)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="absolute left-0 bottom-0 w-[70px] h-[70px] rounded-full"
                style={{
                  background: "#141e30",
                  marginLeft: `${(i * 13) % 23}px`,
                  marginBottom: `${-15 - (i * 17) % 25}px`,
                  animation: `fireReverseLeft 1.2s ${i * 0.5}s cubic-bezier(0.5, 0.07, 0.64, 1) infinite`,
                }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="absolute left-[120px] bottom-0 w-[70px] h-[70px] rounded-full"
                style={{
                  background: "#141e30",
                  marginLeft: `${(i * 13) % 23}px`,
                  marginBottom: `${-15 - (i * 17) % 25}px`,
                  animation: `fireReverseRight 1.2s ${i * 0.5}s cubic-bezier(0.5, 0.07, 0.64, 1) infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Brand Text */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-[0.3em] mb-6 font-serif">
            NORDflam
          </h1>
          <p className="text-[#ffc107] text-sm md:text-lg tracking-[0.15em] uppercase font-light italic">
            Premium Heating Solutions
          </p>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes firelight {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        @keyframes fireCircle {
          0% {
            transform: translateY(0) scale(1);
            background: #ff9800;
          }
          100% {
            transform: translateY(-175px) scale(0);
            background: #ffc107;
          }
        }
        @keyframes fireReverseLeft {
          0% {
            transform: translateY(0) translateX(0) scale(0.3);
          }
          100% {
            transform: translateY(-175px) translateX(50px) scale(1);
          }
        }
        @keyframes fireReverseRight {
          0% {
            transform: translateY(0) translateX(0) scale(0.3);
          }
          100% {
            transform: translateY(-175px) translateX(-50px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
