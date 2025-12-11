// src/app/css-planet/page.tsx

import Link from 'next/link';
import { Palette, Layers, Zap } from 'lucide-react';

export default function CSSPlanetPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6 flex items-center">
          <Palette className="w-8 h-8 mr-3" /> Planeta CSS: La Apariencia y el Diseño
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          CSS (Cascading Style Sheets) es lo que convierte una estructura básica de HTML en una interfaz atractiva, colorida y fácil de usar. Es el pintor y el diseñador de tu universo web.
        </p>

        {/* Sección 1: Los Selectores */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Layers className="w-6 h-6 mr-2 text-blue-400" /> 1. El Sistema de Selector
          </h2>
          <p className="text-gray-300 mb-4">
            CSS funciona mediante **selectores**: le dices a qué elemento de HTML quieres aplicar estilo. La sintaxis tradicional separa la regla del elemento.
          </p>
          
          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">Sintaxis Tradicional:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-red-400">h1</span> {'{'} <br/>
            &nbsp; <span className="text-yellow-400">color</span>: <span className="text-green-300">blue</span>; <br/>
            &nbsp; <span className="text-yellow-400">font-size</span>: <span className="text-green-300">24px</span>; <br/>
            {'}'}
          </div>
        </div>

        {/* Sección 2: Tailwind CSS (Nuestro enfoque) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-blue-400" /> 2. La Velocidad de Tailwind
          </h2>
          <p className="text-gray-300 mb-4">
            En **NautaCode ProDev** usamos Tailwind CSS. En lugar de escribir reglas CSS separadas, aplicamos "clases de utilidad" directamente en el HTML. Esto acelera el desarrollo enormemente.
          </p>
          <h3 className="text-xl font-semibold text-blue-300 mt-6 mb-2">Ejemplo (Lo que usamos):</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            &lt;h1 <span className="text-yellow-400">className="text-2xl font-bold text-blue-500"</span>&gt;Título&lt;/h1&gt;
          </div>
          
          <p className="text-gray-400 mt-4 text-sm italic">
            Las clases `text-2xl`, `font-bold` y `text-blue-500` son las reglas CSS aplicadas directamente en el elemento.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/html-planet" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Planeta Anterior: HTML
          </Link>
          <Link 
            href="/javascript-planet" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente Planeta: JavaScript →
          </Link>
        </div>

      </div>
    </main>
  );
}