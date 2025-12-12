import React from 'react';

// 1. Esto es lo que TypeScript exige: Definir los tipos
interface PlanetCardProps {
  title: string;
  description: string;
  colorClass: string;
  icon: any; 
  link: string;
}

// 2. Aquí le decimos al componente que use esos tipos
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
    <main className="min-h-screen bg-slate-900 p-8 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Navegación Estelar de Conceptos</h1>
        <div className="bg-slate-800 p-10 rounded-2xl border border-slate-700">
          <p className="text-xl text-cyan-400 font-mono">
            [ SISTEMAS OPERATIVOS: ONLINE ]
          </p>
          <p className="mt-4 text-slate-400">
            El código ha sido validado. Esperando despliegue final...
          </p>
        </div>
      </div>
    </main>
  );
}
