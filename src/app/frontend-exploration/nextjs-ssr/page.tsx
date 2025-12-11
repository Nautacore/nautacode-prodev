// src/app/frontend-exploration/nextjs-ssr/page.tsx - ¡CÓDIGO CORREGIDO!

import Link from 'next/link';
import { Server, Zap, Globe } from 'lucide-react';

export default function NextjsSsrPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-6 flex items-center">
          <Server className="w-8 h-8 mr-3" /> SSR: Server-Side Rendering
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          El SSR (Renderizado del Lado del Servidor) es una técnica crucial que usa Next.js para mejorar el rendimiento y el SEO. En lugar de enviar una página vacía al navegador, el servidor genera el HTML completo y estilizado antes de que llegue al cliente.
        </p>

        {/* Sección 1: CSR vs SSR */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-teal-400" /> 1. Velocidad y SEO
          </h2>
          <p className="text-gray-300 mb-4">
            * **CSR (Client-Side Rendering):** El navegador recibe un archivo HTML vacío y JavaScript debe encargarse de construir la interfaz completa. Es lento para la primera carga y malo para los motores de búsqueda (SEO).
            * **SSR (Server-Side Rendering):** El servidor envía el HTML ya listo. La página se ve instantáneamente, y los rastreadores de Google ven el contenido inmediatamente.
          </p>
          

          <h3 className="text-xl font-semibold text-teal-300 mt-6 mb-2">Ventajas del SSR:</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**Mejor SEO:** El contenido es visible para los rastreadores web.</li>
            <li>**Mejor Performance:** El tiempo de "primera pintura" (First Contentful Paint) es más rápido.</li>
          </ul>
        </div>

        {/* Sección 2: Hidratación */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-teal-400" /> 2. La Hidratación (Hydration)
          </h2>
          <p className="text-gray-300 mb-4">
            Una vez que el navegador recibe el HTML pre-renderizado del servidor, React debe convertirlo en una aplicación interactiva. Este proceso se llama **hidratación**. Durante la hidratación, React adjunta los eventos y la lógica de JavaScript al HTML existente.
          </p>
          
          
          <h3 className="text-xl font-semibold text-teal-300 mt-6 mb-2">Punto Clave:</h3>
          <p className="text-gray-400 mt-2 text-sm italic">
            El HTML es visible casi de inmediato, pero la página solo se vuelve interactiva después de que la hidratación se completa.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/frontend-exploration/react-props" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: React Props
          </Link>
          <Link 
            href="/backend-basics" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Backend Basics →
          </Link>
        </div>

      </div>
    </main>
  );
}