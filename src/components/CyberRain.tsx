"use client";
import { useEffect, useRef } from "react";

// Definimos que el componente ahora recibe un "color" opcional
interface CyberRainProps {
  color?: string;
}

export default function CyberRain({ color = "#33ff33" }: CyberRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajuste de resolución
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = "010101NAUTACODEPRODEV<>[]{}/\\-+$#";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      // Estela de rastro negro con transparencia
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // ¡MAGIA AQUÍ!: Usamos el color que viene de la página principal
        ctx.fillStyle = color; 
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color]); // IMPORTANTE: El efecto se reinicia cuando el color cambia

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 opacity-30 pointer-events-none" />;
}