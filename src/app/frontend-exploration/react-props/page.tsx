// src/app/frontend-exploration/react-props/page.tsx - ¡CÓDIGO FINALMENTE CORREGIDO!

import Link from 'next/link';
import { Component, ArrowRight, Package } from 'lucide-react';

export default function ReactPropsPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 flex items-center">
          <Package className="w-8 h-8 mr-3" /> Props: Flujo de Datos en React
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Las `props` (abreviatura de "propiedades") son la forma en que los componentes de React se comunican entre sí. Son los argumentos que se le pasan a una función de componente.
        </p>

        {/* Sección 1: Definición y Regla de Flujo */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <ArrowRight className="w-6 h-6 mr-2 text-purple-400" /> 1. Flujo Unidireccional (De Padre a Hijo)
          </h2>
          <p className="text-gray-300 mb-4">
            La regla más importante de las props es que fluyen en una sola dirección: **del componente padre al componente hijo**. Los componentes hijos reciben las props y las utilizan para renderizar, pero no pueden modificarlas. Son **inmutables**.
          </p>
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Sintaxis:</h3>
          <p className="text-gray-400 mt-2 text-sm italic">
            Las props se reciben como un único objeto dentro de la función del componente.
          </p>
        </div>

        {/* Sección 2: Uso en NautaCode (PlanetCard) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Component className="w-6 h-6 mr-2 text-purple-400" /> 2. Props en Acción
          </h2>
          <p className="text-gray-300 mb-4">
            En nuestra página de `conceptos-fundamentales`, el componente `PlanetCard` es un ejemplo perfecto. El componente padre (`ConceptosFundamentalesPage`) le pasa las `props` (`title`, `description`, `colorClass`) para que el `PlanetCard` pueda mostrar diferentes planetas sin duplicar código.
          </p>
          
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Ejemplo de Uso:</h3>
          {/* EL BLOQUE CRÍTICO CORREGIDO */}
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Componente Padre */}
            &lt;PlanetCard <br/>
            &nbsp; <span className="text-yellow-400">title="HTML (Estructura)"</span> <br/>
            &nbsp; <span className="text-yellow-400">description="El esqueleto..."</span> <br/>
            &nbsp; <span className="text-yellow-400">colorClass="bg-red-700/30"</span> <br/>
            /&gt;
            {/* Componente Hijo (Recibe) */}
            <br/>
            <span className="text-blue-400">const</span> PlanetCard = (&#123; <span className="text-yellow-400">title, description, colorClass</span> &#125;) <span className="text-blue-400">=></span> &#123; /* ... */ &#125; 
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            El componente `PlanetCard` se vuelve dinámico y reutilizable gracias a las props.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/frontend-exploration/react-components" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: Componentes
          </Link>
          <Link 
            href="/frontend-exploration/nextjs-ssr" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Next.js SSR →
          </Link>
        </div>

      </div>
    </main>
  );
}