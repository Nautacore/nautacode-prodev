"use client";
// ------------------------------------------------------------------
// Archivo: src/components/PlanetCard.tsx
// ROL: Contiene toda la LÓGICA y DISEÑO de una sola tarjeta.
// ------------------------------------------------------------------

import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

// Tipos de datos para TypeScript (necesita exportarse)
export interface PlanetCardProps {
    title: string;
    description: string;
    colorClass: string;
    icon: LucideIcon; 
    link: string;
}

// Componente Tarjeta de Planeta con su estado interno (useState)
const PlanetCard = ({ title, description, colorClass, icon: Icon, link }: PlanetCardProps) => {
    
    const [isExplored, setIsExplored] = useState(false); 
    
    const handleExplore = () => {
        setIsExplored(true); 
    };

    const currentBorder = isExplored ? 'border-green-500' : colorClass;

    return (
        <div 
            className={`p-6 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] transform border-t-4 ${currentBorder} bg-slate-800 cursor-pointer`}
            onClick={handleExplore}
        >
            <div className="flex items-center mb-4">
              <Icon className="w-8 h-8 mr-3 text-white" />
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {description}
            </p>
            
            <span className={`text-sm font-mono ${isExplored ? 'text-green-400' : 'text-yellow-400'}`}>
                {isExplored ? '¡Planeta Explorado!' : 'Haz clic para explorar la órbita'}
            </span>
        </div>
    );
};

export default PlanetCard; // Hacemos la tarjeta disponible