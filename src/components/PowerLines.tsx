"use client";

export default function PowerLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
      {/* Cable desde Next.js (Centro) hacia abajo */}
      <path d="M 50% 280 L 50% 350 L 35% 420" stroke="#00d4ff" strokeWidth="2" fill="none" />
      <path d="M 50% 280 L 50% 350 L 65% 420" stroke="#00d4ff" strokeWidth="2" fill="none" />
      
      {/* Brillo en las puntas de los cables */}
      <circle cx="50%" cy="280" r="3" fill="#00d4ff" />
    </svg>
  );
}