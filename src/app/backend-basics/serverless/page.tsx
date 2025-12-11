// src/app/backend-basics/serverless/page.tsx

import Link from 'next/link';
import { Cloud, Zap, Cpu, Code } from 'lucide-react';

export default function ServerlessPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600 mb-6 flex items-center">
          <Cloud className="w-8 h-8 mr-3" /> Serverless Functions: Lógica sin Servidores
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          "Serverless" (Sin Servidor) es una filosofía de desarrollo donde la lógica del Backend se ejecuta en contenedores efímeros que solo se activan cuando son llamados. Esto significa que **el desarrollador ya no tiene que gestionar, mantener o pagar por un servidor 24/7**.
        </p>

        {/* Sección 1: El Pago por Uso */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-green-400" /> 1. El Concepto "Solo Pagas lo que Usas"
          </h2>
          <p className="text-gray-300 mb-4">
            En el modelo tradicional, se paga por un servidor físico o virtual que siempre está encendido. Con las funciones Serverless, el proveedor de la nube (como Vercel, AWS Lambda) solo factura por el tiempo exacto que tarda en ejecutarse el código de tu función.
          </p>
          
          <ul className="list-disc list-inside text-gray-300 ml-4 mt-4">
            <li>**Escalabilidad Automática:** Si tienes 1 o 1 millón de usuarios, el proveedor escala la función por ti.</li>
            <li>**Costos Reducidos:** Ideal para aplicaciones con tráfico variable o bajo.</li>
          </ul>
        </div>

        {/* Sección 2: Serverless en Next.js */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-green-400" /> 2. API Routes como Serverless Functions
          </h2>
          <p className="text-gray-300 mb-4">
            En Next.js, las **API Routes** (archivos dentro de la carpeta `src/app/api`) se despliegan automáticamente como funciones Serverless. Esto permite crear endpoints de Backend (para leer/escribir datos) justo al lado del código de tu Frontend.
          </p>
          <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">Ubicación de las API Routes:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            {/* Ejemplo de Bloque de Código */}
            <span className="text-red-400">/app</span>/<span className="text-yellow-400">api</span>/<span className="text-green-300">usuarios</span>/<span className="text-blue-400">route.ts</span> <br/>
            &darr; Se convierte en la API: <br/>
            /api/usuarios
          </div>
          <p className="text-gray-400 mt-4 text-sm italic">
            Esta integración fluida es una de las grandes fortalezas de Next.js.
          </p>
        </div>

        {/* Navegación Final */}
        <div className="mt-12 text-center">
          <Link 
            href="/backend-basics/databases" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: Bases de Datos
          </Link>
          <Link 
            href="/conclusion" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Misión Cumplida: Ir a la Conclusión →
          </Link>
        </div>

      </div>
    </main>
  );
}