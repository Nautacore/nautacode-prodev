// src/app/javascript-planet/page.tsx

import Link from 'next/link';
import { Cpu, Repeat, Zap } from 'lucide-react';

export default function JavaScriptPlanetPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-6 flex items-center">
          <Zap className="w-8 h-8 mr-3" /> Planeta JavaScript: La Lógica y la Interactividad
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          JavaScript (JS) es el lenguaje de programación que da vida, lógica e interactividad a tu sitio. Permite que el contenido se actualice, gestiona clics de usuario y maneja la información dinámica.
        </p>

        {/* Sección 1: El Cerebro del Sitio */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-2 text-yellow-400" /> 1. Manejando el DOM y Eventos
          </h2>
          <p className="text-gray-300 mb-4">
            JS puede manipular el DOM (Document Object Model), que es la representación de tu HTML. Esto permite cambiar texto, colores o añadir elementos en tiempo real, basándose en las acciones del usuario (eventos como clics).
          </p>
          
          <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">Ejemplo de Evento:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-green-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-blue-400">const</span> boton = <span className="text-purple-400">document.getElementById</span>('miBoton'); <br/>
            boton.<span className="text-purple-400">addEventListener</span>(<span className="text-red-300">'click'</span>, (<span className="text-cyan-300">e</span>) =&gt; {'{'} <br/>
            &nbsp; <span className="text-purple-400">alert</span>('¡Clic detectado!'); <br/>
            {'}'});
          </div>
        </div>

        {/* Sección 2: La Evolución (Next.js/React) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Repeat className="w-6 h-6 mr-2 text-yellow-400" /> 2. JavaScript Moderno: React
          </h2>
          <p className="text-gray-300 mb-4">
            Actualmente, JS se usa a través de frameworks como React, que es la base de Next.js. React permite construir interfaces complejas usando **Componentes** (como la Navbar que creamos), gestionando el estado de la aplicación de manera eficiente.
          </p>
          
          <p className="text-gray-400 mt-4 text-sm italic">
            Trabajar con Next.js significa que estás utilizando la versión más avanzada y estructurada de JavaScript para construir tu sitio.
          </p>
        </div>

        {/* Navegación Final */}
        <div className="mt-12 text-center">
          <Link 
            href="/css-planet" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Planeta Anterior: CSS
          </Link>
          <Link 
            href="/frontend-exploration" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Continuar a Exploración Frontend →
          </Link>
        </div>

      </div>
    </main>
  );
}