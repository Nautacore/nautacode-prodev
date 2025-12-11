// src/app/frontend-exploration/nextjs-routing/page.tsx

import Link from 'next/link';
import { Route, Folder, FileText, Link as LinkIcon } from 'lucide-react';

export default function NextjsRoutingPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500 mb-6 flex items-center">
          <Route className="w-8 h-8 mr-3" /> Routing en Next.js: Navegación por Carpetas
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          En Next.js (usando el App Router), no tienes que configurar manualmente las rutas. El sistema de **Routing Basado en el Sistema de Archivos** convierte tu estructura de carpetas en URLs navegables de forma automática.
        </p>

        {/* Sección 1: La Regla de la Carpeta */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Folder className="w-6 h-6 mr-2 text-purple-400" /> 1. Las Carpetas son URLs
          </h2>
          <p className="text-gray-300 mb-4">
            Cualquier carpeta dentro de `src/app` define un segmento de la URL. Si has anidado carpetas, la URL también se anida.
          </p>
          
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-2">Ejemplo de la Estructura que Hemos Creado:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-red-400">/app</span>/frontend-exploration/<span className="text-red-400">react-components</span>/page.tsx <br/>
            &darr; Se convierte en: <br/>
            <LinkIcon className="inline w-4 h-4 mr-1 text-green-400" /> /frontend-exploration/react-components
          </div>
        </div>

        {/* Sección 2: El Archivo "page.tsx" */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <FileText className="w-6 h-6 mr-2 text-purple-400" /> 2. El Archivo `page.tsx`
          </h2>
          <p className="text-gray-300 mb-4">
            Para que una carpeta se convierta en una página web real (con contenido), debe contener un archivo especial llamado `page.tsx` (o `page.js`). Este archivo es el punto de entrada de la interfaz de usuario para esa ruta.
          </p>
          <p className="text-gray-400 mt-4 text-sm italic">
            Ya usamos esta regla: **`src/app/page.tsx`** es la página de inicio, que corresponde a la URL **`/`** (la raíz).
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
            href="/frontend-exploration/react-props" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Flujo de Datos (Props) →
          </Link>
        </div>

      </div>
    </main>
  );
}