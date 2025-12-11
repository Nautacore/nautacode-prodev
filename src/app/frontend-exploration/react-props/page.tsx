// src/app/frontend-exploration/react-props/page.tsx

import Link from 'next/link';
import { Code, Send, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

export default function ReactPropsPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500 mb-6 flex items-center">
          <Send className="w-8 h-8 mr-3" /> Flujo de Datos (Props): La Comunicación Unidireccional
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          En React, la información fluye de arriba hacia abajo, desde los componentes padres a los hijos, utilizando un concepto llamado **Propiedades (Props)**. Esta es la clave para que un componente hijo se adapte a su contexto.
        </p>

        {/* Sección 1: ¿Qué son las Props? */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <ArrowDownCircle className="w-6 h-6 mr-2 text-purple-400" /> 1. Flujo de Datos Descendente
          </h2>
          <p className="text-gray-300 mb-4">
            Las Props son esencialmente argumentos que se pasan a una función (tu componente). Permiten que un componente genérico (como un `Botón`) pueda recibir datos específicos (como el `texto` o el `color`).
          </p>
          
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Sintaxis de Envío (Componente Padre):</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300 mb-4">
            {/* Ejemplo de Bloque de Código */}
            &lt;Boton <span className="text-yellow-400">texto="Comenzar Exploración"</span> <span className="text-yellow-400">color="azul"</span> /&gt;
          </div>
          
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Sintaxis de Recepción (Componente Hijo):</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-blue-400">export default function</span> Boton(<span className="text-yellow-400">{' { texto, color } '}</span>) {'{'} <br/>
            &nbsp; <span className="text-blue-400">return</span> (&lt;button <span className="text-yellow-400">className={'{color}'}</span>&gt; {'{texto}'} &lt;/button&gt;);<br/>
            {'}'}
          </div>
        </div>

        {/* Sección 2: Props en nuestro Proyecto */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-purple-400" /> 2. Props en NautaCode ProDev
          </h2>
          <p className="text-gray-300 mb-4">
            Ya usamos props en el componente `PlanetCard` (en la página El Astrolabio). Le pasamos props como `title`, `description`, `colorClass` e `icon` para que el componente sepa qué contenido mostrar.
          </p>
          
          <p className="text-gray-400 mt-4 text-sm italic">
            Las props hacen que el componente `PlanetCard` pueda representar a HTML, CSS y JavaScript sin necesidad de escribir tres componentes diferentes.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/frontend-exploration/nextjs-routing" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: Next.js Routing
          </Link>
          <Link 
            href="/frontend-exploration/nextjs-ssr" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Renderizado en el Servidor →
          </Link>
        </div>

      </div>
    </main>
  );
}