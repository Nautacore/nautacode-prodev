// src/app/css-planet/page.tsx - ¡CÓDIGO CORREGIDO!

import Link from 'next/link';
import { Layout, Palette, Zap } from 'lucide-react';

export default function CSSPlanetPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-6 flex items-center">
          <Palette className="w-8 h-8 mr-3" /> CSS Planet: La Navegación Visual
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          CSS (Cascading Style Sheets) es el lenguaje que define la apariencia y el estilo de tu sitio web. Sin CSS, la web sería solo texto sin formato y enlaces azules.
        </p>

        {/* Sección 1: Estructura vs Estilo */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Layout className="w-6 h-6 mr-2 text-blue-400" /> 1. Separación de Responsabilidades
          </h2>
          <p className="text-gray-300 mb-4">
            La regla de oro del desarrollo es la separación: HTML para la estructura (qué es el contenido) y CSS para el estilo (cómo se ve el contenido). Mantenerlos separados hace el código más limpio, fácil de mantener y más accesible.
          </p>
          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">Conceptos Clave:</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**Selectores:** Cómo el CSS sabe a qué elementos HTML aplicar el estilo (`.clase`, `#id`, `p`, `h1`).</li>
            <li>**Cascada:** El orden de precedencia que determina qué estilo se aplica si hay conflictos.</li>
            <li>**Box Model:** Cada elemento HTML es una caja con contenido, padding, borde y margen.</li>
          </ul>
        </div>

        {/* Sección 2: Tailwind CSS (Framework de Utilidades) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-blue-400" /> 2. La Velocidad de Tailwind CSS
          </h2>
          <p className="text-gray-300 mb-4">
            Tailwind CSS es un framework de CSS basado en clases de utilidad. En lugar de escribir CSS tradicional, se aplican clases predefinidas directamente en el HTML (JSX en nuestro caso). Esto permite construir interfaces rápidamente sin salir del archivo del componente.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">Ejemplo de Código:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            &lt;button <span className="text-green-300">className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"</span>&gt; <br/>
            &nbsp; Botón Estilizado <br/>
            &lt;/button&gt;
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            El código se lee fácilmente: fondo azul, hover azul oscuro, texto blanco, negrita, padding y bordes redondeados.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/html-planet" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: HTML Planet
          </Link>
          <Link 
            href="/javascript-planet" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: JavaScript Planet →
          </Link>
        </div>

      </div>
    </main>
  );
}