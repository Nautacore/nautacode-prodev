// src/app/frontend-exploration/react-components/page.tsx

import Link from 'next/link';
import { Component, Brackets, Layers, Home } from 'lucide-react';

export default function ReactComponentsPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 flex items-center">
          <Component className="w-8 h-8 mr-3" /> Componentes de React: La Unidad Modular
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Un componente es una pieza de código reutilizable que define cómo debe verse una parte de la interfaz. Piensa en ellos como ladrillos LEGO: construyes toda tu aplicación apilando y combinando estos ladrillos.
        </p>

        {/* Sección 1: Definición y Sintaxis */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Brackets className="w-6 h-6 mr-2 text-purple-400" /> 1. Sintaxis Básica de un Componente
          </h2>
          <p className="text-gray-300 mb-4">
            Los componentes de React son funciones de JavaScript que devuelven código JSX (una mezcla de JavaScript y HTML). Siempre deben empezar con una letra mayúscula (ej: `Navbar`, `Boton`, `PlanetCard`).
          </p>
          
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Ejemplo de Componente Simple:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-blue-400">export default function</span> Saludo(<span className="text-yellow-400">props</span>) {'{'} <br/>
            &nbsp; <span className="text-blue-400">return</span> (<br/>
            &nbsp; &nbsp; &lt;h2 <span className="text-green-300">className="text-white"</span>&gt; <br/>
            &nbsp; &nbsp; &nbsp; ¡Hola, <span className="text-yellow-400">{' {props.nombre}'}</span>! <br/>
            &nbsp; &nbsp; &lt;/h2&gt;<br/>
            &nbsp; );<br/>
            {'}'}
          </div>
        </div>

        {/* Sección 2: Composición y Reutilización */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Layers className="w-6 h-6 mr-2 text-purple-400" /> 2. Composición (Apilando Ladrillos)
          </h2>
          <p className="text-gray-300 mb-4">
            La belleza de React es que puedes usar componentes dentro de otros. Por ejemplo, nuestra página de inicio (`src/app/page.tsx`) usa el componente `Navbar`.
          </p>
          
          
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Uso en la Práctica:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-blue-400">import</span> Saludo <span className="text-yellow-400">from</span> <span className="text-green-300">'./Saludo'</span>; <br/>
            // ... dentro de otro componente ... <br/>
            &lt;Saludo <span className="text-yellow-400">nombre="Nauta"</span> /&gt; <br/>
            &lt;Saludo <span className="text-yellow-400">nombre="Gemini"</span> /&gt; 
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            El mismo componente, utilizado varias veces, genera diferentes resultados al pasarle la propiedad `nombre`.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/frontend-exploration" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Volver a Exploración
          </Link>
          <Link 
            href="/frontend-exploration/nextjs-routing" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Next.js Routing →
          </Link>
        </div>

      </div>
    </main>
  );
}