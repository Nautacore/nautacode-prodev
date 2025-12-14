import React, { useState } from 'react'; // 💡 NUEVO: Importar el Hook useState
import { Book, Code, Rocket, Layout, Database, Cpu } from 'lucide-react';

// Tipos de datos para TypeScript
interface PlanetCardProps {
  title: string;
  description: string;
  colorClass: string;
  icon: any; 
  link: string;
}

// Componente Tarjeta de Planeta
const PlanetCard = ({ title, description, colorClass, icon: Icon, link }: PlanetCardProps) => {
    
    // 💡 NUEVO: 1. Inicializar el Estado
    // [nombre_variable, funcion_para_cambiarla] = useState(valor_inicial)
    const [isExplored, setIsExplored] = useState(false); 
    
    // 💡 NUEVO: 2. Función que maneja el evento (clic)
    const handleExplore = () => {
        // Al hacer clic, le decimos a React que cambie la variable isExplored a true
        setIsExplored(true); 
    };

    // 💡 NUEVO: 3. Lógica para renderizar (mostrar)
    // El color de borde será verde si isExplored es true, sino, usa el colorClass original.
    const currentBorder = isExplored ? 'border-green-500' : colorClass;


    return (
        // 💡 NUEVO: Asignar el evento onClick a toda la tarjeta y usar el borde dinámico
        <div 
            className={`p-6 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] transform border-t-4 ${currentBorder} bg-slate-800 cursor-pointer`}
            onClick={handleExplore} // <- Ejecuta nuestra función al hacer clic
        >
            <div className="flex items-center mb-4">
              <Icon className="w-8 h-8 mr-3 text-white" />
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {description}
            </p>
            
            {/* 💡 NUEVO: Mensaje dinámico basado en el estado */}
            <span className={`text-sm font-mono ${isExplored ? 'text-green-400' : 'text-yellow-400'}`}>
                {isExplored ? '¡Planeta Explorado!' : 'Haz clic para explorar la órbita'}
            </span>
        </div>
    );
};

export default function ConceptosPage() {
  return (
    <main className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Navegación Estelar de Conceptos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlanetCard 
            title="Sintaxis Básica"
            description="Los cimientos de cualquier lenguaje de programación."
            colorClass="border-blue-500"
            icon={Code}
            link="/javascript-planet"
          />
        </div>
      </div>
    </main>
  );
}