"use client";
import { useState } from "react";
import ConceptChip from "@/components/ConceptChip";
import CyberRain from "@/components/CyberRain";

export default function Home() {
  const [rainColor, setRainColor] = useState("#33ff33");
  
  // Estado para guardar los nombres de los chips visitados (valores únicos)
  const [visitedChips, setVisitedChips] = useState<Set<string>>(new Set());
  const totalChips = 8; // Número total de chips en nuestra placa

  const handleChipClick = (name: string) => {
    // Añadimos el nombre del chip al Set de visitados
    setVisitedChips((prev) => new Set(prev).add(name));
  };

  const progress = Math.round((visitedChips.size / totalChips) * 100);

  const ChipWrapper = ({ children, color, name }: { children: React.ReactNode, color: string, name: string }) => (
    <div 
      onMouseEnter={() => setRainColor(color)} 
      onMouseLeave={() => setRainColor("#33ff33")}
      onClick={() => handleChipClick(name)}
      className="transition-transform duration-300 hover:scale-105"
    >
      {children}
    </div>
  );

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen w-full bg-black py-12 px-10">
      
      {/* HUD de Progreso - Estilo Cyberpunk */}
      <div className="fixed top-5 right-5 z-50 bg-black/60 border border-blue-500/50 p-4 backdrop-blur-md rounded-lg font-mono">
        <div className="text-[10px] text-blue-400 mb-1 tracking-widest uppercase">Sync Progress</div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-black text-white leading-none">{progress}%</span>
          <span className="text-xs text-blue-500 mb-1">{visitedChips.size}/{totalChips} NODES</span>
        </div>
        <div className="w-full bg-blue-900/30 h-1 mt-2 overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 shadow-[0_0_10px_#00d4ff]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="fixed inset-0 z-0">
        <CyberRain color={rainColor} />
      </div>
      
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl font-black italic text-white mb-1 tracking-tighter uppercase">
          NautaCode <span className="text-blue-500">ProDev</span>
        </h1>
        <p className="text-sm text-blue-400 font-mono uppercase tracking-[0.3em]">
          Sistemas listos para la exploración 2026
        </p>
      </div>

      {/* FILA 1 */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 mt-6">
        <ChipWrapper color="#33ff33" name="Node">
          <ConceptChip name="Node.js" color="#33ff33" level="RUNTIME_CORE" description="Motor servidor." url="https://nodejs.org/" />
        </ChipWrapper>
        <ChipWrapper color="#00d4ff" name="Next">
          <ConceptChip name="Next.js" color="#00d4ff" level="FRAMEWORK_INTEL" description="Cerebro App." url="https://nextjs.org/" />
        </ChipWrapper>
        <ChipWrapper color="#bc13fe" name="GitHub">
          <ConceptChip name="GitHub" color="#bc13fe" level="VERSION_CONTROL" description="Caja fuerte." url="https://github.com/" />
        </ChipWrapper>
        <ChipWrapper color="#ffffff" name="Vercel">
          <ConceptChip name="Vercel" color="#ffffff" level="CLOUD_DEPLOY" description="Antena satelital." url="https://vercel.com/" />
        </ChipWrapper>
      </div>

      {/* FILA 2 */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 mt-20">
        <ChipWrapper color="#38bdf8" name="Tailwind">
          <ConceptChip name="Tailwind" color="#38bdf8" level="STYLING_ENGINE" description="Diseño rápido." url="https://tailwindcss.com/" />
        </ChipWrapper>
        <ChipWrapper color="#3178c6" name="TS">
          <ConceptChip name="TypeScript" color="#3178c6" level="DATA_INTEGRITY" description="Blindaje de datos." url="https://www.typescriptlang.org/" />
        </ChipWrapper>
      </div>

      {/* FILA 3 */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 mt-20 mb-20">
        <ChipWrapper color="#336791" name="Postgres">
          <ConceptChip name="PostgreSQL" color="#336791" level="CORE_DATABASE" description="Memoria inmutable." url="https://www.postgresql.org/" />
        </ChipWrapper>
        <ChipWrapper color="#ffcc00" name="Actions">
          <ConceptChip name="Server Actions" color="#ffcc00" level="DATA_TRANSPORT" description="Túneles de datos." url="https://nextjs.org/" />
        </ChipWrapper>
      </div>

      <div className="h-40 w-full relative z-10"></div>
    </main>
  );
}