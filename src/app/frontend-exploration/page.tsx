import React from 'react';
import Link from 'next/link';
import { Layout, Globe, Cpu, Smartphone } from 'lucide-react';

// 1. Definimos los tipos para TypeScript
interface SystemCardProps {
  title: string;
  description: string;
  icon: any; 
  link: string;
}

// 2. Componente con tipos aplicados
const SystemCard = ({ title, description, icon: Icon, link }: SystemCardProps) => (
  <Link href={link} className="block bg-gray-800/50 p-6 rounded-lg shadow-xl transition-all duration-300 hover:bg-gray-700/60 hover:shadow-purple-500/30 hover:shadow-2xl border border-gray-700/50">
    <div className="flex items-start">
      <Icon className="w-8 h-8 mr-4 text-purple-400 flex-shrink-0" />
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

export default function FrontendExplorationPage() {
  return (
    <main className="min-h-screen pt-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Sistemas de Exploración Frontend</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SystemCard 
            title="Componentes React"
            description="La base de las interfaces modernas."
            icon={Layout}
            link="/frontend-exploration/react-props"
          />
          <SystemCard 
            title="Diseño Adaptativo"
            description="Interfaces que se ven bien en cualquier galaxia."
            icon={Smartphone}
            link="#"
          />
        </div>
      </div>
    </main>
  );
}
