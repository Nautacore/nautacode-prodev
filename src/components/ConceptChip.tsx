"use client";

interface ConceptChipProps {
  name: string;
  color: string;
  level: string;
  description: string;
  url?: string; // Nueva propiedad opcional
}

export default function ConceptChip({ name, color, level, description, url }: ConceptChipProps) {
  return (
    <div 
      onClick={() => url && window.open(url, "_blank")} // Abre el link en pestaña nueva
      className={`relative group p-4 border rounded-xl backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden
      ${url ? 'hover:border-opacity-100' : ''}`}
      style={{ borderColor: `${color}44`, backgroundColor: `${color}11` }}
    >
      {/* Efecto de brillo al pasar el mouse */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
          <h3 className="font-mono text-xs font-bold tracking-tighter" style={{ color }}>{level}</h3>
        </div>
        <h2 className="text-xl font-black text-white mb-2">{name}</h2>
        <p className="text-[10px] text-gray-400 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[150px]">
          {description}
        </p>
      </div>
    </div>
  );
}