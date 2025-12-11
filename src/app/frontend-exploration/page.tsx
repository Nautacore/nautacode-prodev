// src/app/frontend-exploration/page.tsx

import Link from 'next/link';
import { Aperture, Code, Component, Zap, Globe, Route } from 'lucide-react';

// Componente Tarjeta de Sistema de Exploración
const SystemCard = ({ title, description, icon: Icon, link }) => (
  <Link href={link} className="block bg-gray-800/50 p-6 rounded-lg shadow-xl transition-all duration-300 hover:bg-gray-700/60 hover:shadow-purple-500/30 hover:shadow-2xl border border-gray-700/50">
    <div className="flex items-start">
      <Icon className="w-8 h-8 mr-4 text-purple-400 flex-shrink-0" />
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

export default function FrontendExplorationPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-6xl">
        
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4 text-center flex items-center justify-center">
          <Aperture className="w-10 h-10 mr-4" /> 
          Exploración Frontend: Sistemas Avanzados
        </h1>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Ahora que tienes los fundamentos, explora los sistemas de propulsión de Next.js y React. Esto es clave para construir aplicaciones escalables y rápidas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Módulo 1: Componentes (Ya estamos usándolos) */}
          <SystemCard
            title="1. Componentes de React"
            description="La unidad fundamental. Construye interfaces reutilizando pequeños bloques de código de forma modular."
            icon={Component}
            link="/frontend-exploration/react-components"
          />

          {/* Módulo 2: Routing (El sistema de rutas) */}
          <SystemCard
            title="2. Routing en Next.js (App Router)"
            description="Cómo Next.js organiza las URLs y las páginas de forma eficiente usando la estructura de carpetas."
            icon={Route}
            link="/frontend-exploration/nextjs-routing"
          />

          {/* Módulo 3: Propiedades (Props) */}
          <SystemCard
            title="3. Flujo de Datos (Props)"
            description="Cómo pasar información de un componente padre a un componente hijo de forma estructurada."
            icon={Code}
            link="/frontend-exploration/react-props"
          />

          {/* Módulo 4: Renderizado (Clave de Next.js) */}
          <SystemCard
            title="4. Renderizado en el Lado del Servidor (SSR)"
            description="La magia de Next.js: renderizar páginas en el servidor para mayor velocidad y SEO."
            icon={Globe}
            link="/frontend-exploration/nextjs-ssr"
          />
        </div>

        {/* Botón de retorno */}
        <div className="mt-16 text-center">
          <Link href="/conceptos-fundamentales" className="inline-flex items-center text-gray-400 hover:text-purple-400 transition-colors">
            <Aperture className="w-5 h-5 mr-2" /> Volver a los Fundamentos (Astrolabio)
          </Link>
        </div>

      </div>
    </main>
  );
}