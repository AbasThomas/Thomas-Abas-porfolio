"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  const phi = useRef(0);
  const width = useRef(0);
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let globe;
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Get initial width
    let currentWidth = canvas.offsetWidth;
    if (currentWidth === 0) currentWidth = 500;

    try {
      globe = createGlobe(canvas, {
        ...config,
        width: currentWidth * 2,
        height: currentWidth * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi.current += 0.005;
          }
          state.phi = phi.current + rs.get();
        },
      });

      // Simple delay to ensure smooth entry
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });
    } catch (e) {
      console.error("Cobe initialization failed", e);
    }

    const onResize = () => {
      if (canvasRef.current) {
        // We don't necessarily need to re-create the globe on every resize
        // But we should update the width if needed. 
        // For simplicity, we can let CSS handle the display scaling.
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, rs]);

  return (
    <div
      className={twMerge(
        "mx-auto aspect-square w-full max-w-[600px] flex items-center justify-center",
        className
      )}
    >
      <canvas
        className="w-full h-full opacity-0 transition-opacity duration-1000"
        ref={canvasRef}
        style={{ maxWidth: '100%', aspectRatio: '1/1' }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
