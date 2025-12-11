// src/app/backend-basics/client-server-paradigm/page.tsx

import Link from 'next/link';
import { Cloud, Laptop, Server, Zap } from 'lucide-react';

export default function ClientServerParadigmPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600 mb-6 flex items-center">
          <Cloud className="w-8 h-8 mr-3" /> Paradigma Cliente-Servidor: La Conversación
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Toda aplicación web se basa en la comunicación constante entre dos actores principales: el Cliente (el navegador del usuario) y el Servidor (una computadora remota).
        </p>

        {/* Sección 1: El Cliente */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Laptop className="w-6 h-6 mr-2 text-green-400" /> 1. El Cliente (El Navegador)
          </h2>
          <p className="text-gray-300 mb-4">
            El Cliente es el dispositivo del usuario (computadora, móvil) y el software que ejecuta la aplicación (Chrome, Firefox). Su rol es:
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**Presentación:** Renderiza el HTML y el CSS (la interfaz).</li>
            <li>**Interactividad:** Ejecuta JavaScript para responder a clics y eventos.</li>
            <li>**Solicitud de Datos:** Envía peticiones (requests) al servidor.</li>
          </ul>
        </div>

        {/* Sección 2: El Servidor */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Server className="w-6 h-6 mr-2 text-green-400" /> 2. El Servidor (El Anfitrión Remoto)
          </h2>
          <p className="text-gray-300 mb-4">
            El Servidor es la máquina remota que contiene la lógica de la aplicación y la conexión a la base de datos. Su rol es:
          </p>
          <ul className="list-disc list-inside text-gray-300 ml-4">
            <li>**Lógica de Negocio:** Procesa datos, valida usuarios y calcula resultados.</li>
            <li>**Almacenamiento:** Lee y escribe datos en la Base de Datos.</li>
            <li>**Respuesta:** Envía una respuesta (response) al cliente (HTML, JSON, etc.).</li>
          </ul>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/backend-basics" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Volver a Backend Basics
          </Link>
          <Link 
            href="/backend-basics/api-routes" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Comunicación (APIs) →
          </Link>
        </div>

      </div>
    </main>
  );
}