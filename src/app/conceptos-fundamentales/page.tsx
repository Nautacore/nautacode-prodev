import React from 'react';

// 1. Le explicamos a TypeScript qué tipo de datos recibe la tarjeta
interface PlanetCardProps {
  title: string;
  description: string;
  colorClass: string;
  icon: any; 
  link: string;
}

// 2. Aplicamos esos tipos al componente
const PlanetCard = ({ title, description, colorClass, icon: Icon, link }: PlanetCardProps) => (
  <div className={`p-6 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] transform border-t-4 ${colorClass} bg-slate-800`}>
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 mr-3 text-white" />
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-slate-300 mb-6 leading-relaxed">
      {description}
    </p>
    <a 
      href={link}
      className="inline-flex items-center text-white font-semibold hover:underline"
    >
      Explorar Planeta
    </a>
  </div>
);

export default function ConceptosPage() {
  return (
    <main className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Conceptos Fundamentales</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Por ahora dejamos un mensaje para que compile rápido */}
           <p className="text-cyan-400 font-mono">Construyendo el mapa estelar...</p>
        </div>
      </div>
    </main>
  );
}
