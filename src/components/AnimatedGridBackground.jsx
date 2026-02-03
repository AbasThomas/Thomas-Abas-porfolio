import React from "react";

const ScrollGridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-[#030412]">
      {/* Static Gradient Blobs - CSS only, no JS calculation */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[100px]" />

      {/* CSS-based Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />

      {/* Simple Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030412]/50 to-[#030412]" />

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default ScrollGridBackground;