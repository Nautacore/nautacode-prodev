// src/app/frontend-exploration/nextjs-ssr/page.tsx

import Link from 'next/link';
import { Server, Globe, Zap, Clock } from 'lucide-react';

export default function NextjsSSRPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-500 mb-6 flex items-center">
          <Server className="w-8 h-8 mr-3" /> Renderizado en el Servidor (SSR): Velocidad y SEO
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          El Renderizado en el Lado del Servidor (SSR, Server-Side Rendering) es una de las tecnologías clave que diferencia a Next.js de una aplicación React simple. Esta técnica optimiza drásticamente el rendimiento y la visibilidad de un sitio web.
        </p>

        {/* Sección 1: Definición y Flujo */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Globe className="w-6 h-6 mr-2 text-green-400" /> 1. Flujo de Renderizado
          </h2>
          <p className="text-gray-300 mb-4">
            En el SSR, cuando un usuario solicita una página, Next.js construye el código HTML completo en el **servidor** antes de enviarlo. El navegador del cliente recibe una página completamente cargada, lista para ser mostrada, y luego React toma el control (proceso llamado Hidratación).
          </p>
          
          
          <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">Ventajas Clave:</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**SEO Superior:** Los rastreadores de Google ven el contenido final de inmediato.</li>
            <li>**Rendimiento Rápido:** El tiempo hasta la primera visualización (First Contentful Paint) es mucho menor.</li>
          </ul>
        </div>

        {/* Sección 2: La Importancia de la Hidratación */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-green-400" /> 2. Hidratación: De Estático a Interactivo
          </h2>
          <p className="text-gray-300 mb-4">
            Después de que el HTML estático es enviado por el servidor, JavaScript se carga en el navegador y "activa" la aplicación, conectando los eventos (como clics de botones). Este paso, la **Hidratación**, es lo que le da interactividad al sitio.
          </p>
          
          <p className="text-gray-400 mt-4 text-sm italic">
            El desarrollador utiliza SSR cuando el contenido de la página cambia poco (como en un blog) o cuando el SEO es una prioridad máxima.
          </p>
        </div>

        {/* Navegación Final */}
        <div className="mt-12 text-center">
          <Link 
            href="/frontend-exploration/react-props" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: Flujo de Datos (Props)
          </Link>
          <Link 
            href="/backend-basics" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Continuar a Backend Basics (El Servidor) →
          </Link>
        </div>

      </div>
    </main>
  );
}