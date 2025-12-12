// src/app/javascript-planet/page.tsx - ¡COPIA ESTE CÓDIGO COMPLETO Y REEMPLAZA!

import Link from 'next/link';
import { Zap, Code, Terminal, Cpu } from 'lucide-react';

export default function JavascriptPlanetPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6 flex items-center">
          <Zap className="w-8 h-8 mr-3" /> JavaScript Planet: La Acción y la Lógica
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          JavaScript (JS) es el lenguaje de programación que convierte un sitio web estático en una aplicación dinámica e interactiva. Es el motor que permite las animaciones, la manipulación de datos y la comunicación con servidores.
        </p>

        {/* Sección 1: El DOM y la Interactividad */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Terminal className="w-6 h-6 mr-2 text-yellow-400" /> 1. Manipulación del DOM
          </h2>
          <p className="text-gray-300 mb-4">
            El DOM (Document Object Model) es la representación estructurada (en forma de árbol) de la página web que permite a JavaScript leer y modificar dinámicamente el contenido y el estilo del HTML. Cada elemento es un nodo que JS puede alterar.
          </p>
          <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">Ejemplo de Uso:</h3>
          {/* Ejemplo de Bloque de Código */}
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            <span className="text-blue-400">const</span> boton = document.<span className="text-yellow-400">getElementById</span>('miBoton');<br/>
            boton.<span className="text-yellow-400">addEventListener</span>('click', () <span className="text-blue-400">=></span> &#123; <br/>
            &nbsp; alert('¡Click!');<br/>
            &#125;);
          </div>
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            Este código busca un botón por su ID y le añade una acción que se ejecuta al hacer clic.
          </p>
        </div>

        {/* Sección 2: La Evolución a Frameworks */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Cpu className="w-6 h-6 mr-2 text-yellow-400" /> 2. React y la Abstracción
          </h2>
          <p className="text-gray-300 mb-4">
            Si bien el JavaScript nativo funciona bien para tareas pequeñas, las aplicaciones modernas requieren frameworks (como React) para manejar la complejidad. React evita la manipulación directa del DOM usando un concepto de "Estado", y solo actualiza lo necesario.
          </p>
          <h3 className="text-xl font-semibold text-yellow-300 mt-6 mb-2">Ciclo de Vida del Componente:</h3>
          <p className="text-gray-400 mt-4 text-sm italic">
            React gestiona internamente cuándo un componente se crea, se actualiza y se elimina. Entender este ciclo es clave para optimizar el rendimiento y la gestión de datos.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/css-planet" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: CSS Planet
          </Link>
          <Link 
            href="/frontend-exploration" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Exploración Frontend →
          </Link>
        </div>

      </div>
    </main>
  );
}
