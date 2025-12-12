import React from 'react';

// Definimos qué tipo de datos recibe la tarjeta (Para que TypeScript no se queje)
interface PlanetCardProps {
  title: string;
  description: string;
  colorClass: string;
  icon: any; 
  link: string;
}

// Componente Tarjeta de Planeta
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
        <h1 className="text-4xl font-bold text-white mb-8">Conceptos Fundamentales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes agregar tus PlanetCards después, por ahora esto lo hará compilar */}
          <p className="text-white">Preparando el despliegue del sistema...</p>
        </div>
      </div>
    </main>
  );
}
