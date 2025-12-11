// src/app/backend-basics/api-routes/page.tsx

import Link from 'next/link';
import { Cloud, Link as LinkIcon, Download, Upload } from 'lucide-react';

export default function ApiRoutesPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600 mb-6 flex items-center">
          <LinkIcon className="w-8 h-8 mr-3" /> APIs y Rutas: El Lenguaje del Servidor
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Una API (Application Programming Interface) es un conjunto de reglas que permite que dos aplicaciones se comuniquen entre sí. Es el punto de acceso estructurado que el Frontend utiliza para pedir datos al Backend.
        </p>

        {/* Sección 1: La Definición de una API */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <LinkIcon className="w-6 h-6 mr-2 text-green-400" /> 1. El Endpoint y la URL
          </h2>
          <p className="text-gray-300 mb-4">
            Cada función del Backend (por ejemplo, "obtener la lista de usuarios" o "crear una nueva publicación") tiene una **ruta (endpoint)** específica, que es una URL a la que el Cliente envía su solicitud.
          </p>
          
          <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">Ejemplo de Solicitud de Datos:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            GET <span className="text-yellow-400">/api/v1/usuarios</span> 
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            El Backend responde a esta ruta enviando una lista de usuarios en formato JSON.
          </p>
        </div>

        {/* Sección 2: Métodos HTTP (Verbos) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Download className="w-6 h-6 mr-2 text-green-400" /> 2. Los Métodos HTTP
          </h2>
          <p className="text-gray-300 mb-4">
            Para que la comunicación sea clara, cada solicitud usa un "verbo" o **Método HTTP** que indica la intención de la acción. Los cuatro más comunes son:
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**GET** <span className="text-gray-500">(Solicitar/Leer datos)</span></li>
            <li>**POST** <span className="text-gray-500">(Crear datos nuevos)</span></li>
            <li>**PUT / PATCH** <span className="text-gray-500">(Actualizar datos existentes)</span></li>
            <li>**DELETE** <span className="text-gray-500">(Eliminar datos)</span></li>
          </ul>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/backend-basics/client-server-paradigm" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: Paradigma Cliente-Servidor
          </Link>
          <Link 
            href="/backend-basics/databases" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Bases de Datos →
          </Link>
        </div>

      </div>
    </main>
  );
}