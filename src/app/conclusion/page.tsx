// src/app/conclusion/page.tsx

import Link from 'next/link';
import { Star, Zap, Code, Home, Award } from 'lucide-react';

export default function ConclusionPage() {
  return (
    <main className="min-h-screen p-8 pt-24 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl text-center">
        
        <Award className="w-16 h-16 mx-auto text-yellow-500 mb-6 animate-pulse" />
        
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 mb-4">
          ¡Misión Cumplida!
        </h1>
        
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Has completado con éxito la construcción de tu primer gran proyecto educativo: **NautaCode ProDev**.
        </p>

        <div className="bg-gray-800/50 p-8 rounded-lg shadow-2xl border border-gray-700 mb-10">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
            <Star className="w-6 h-6 mr-3 text-yellow-500" /> Tres Pilares del Conocimiento Implementados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <Zap className="w-8 h-8 mx-auto text-red-400 mb-2" />
              <p className="font-semibold text-xl">Astrolabio</p>
              <p className="text-sm">HTML, CSS, JavaScript</p>
            </div>
            <div>
              <Code className="w-8 h-8 mx-auto text-purple-400 mb-2" />
              <p className="font-semibold text-xl">Exploración Frontend</p>
              <p className="text-sm">React, Next.js, Props, SSR</p>
            </div>
            <div>
              <Home className="w-8 h-8 mx-auto text-green-400 mb-2" />
              <p className="font-semibold text-xl">Backend Basics</p>
              <p className="text-sm">Cliente-Servidor, APIs, BBDD</p>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-6">
          Este sitio es la prueba tangible de tu capacidad para dominar las tecnologías fundamentales y modernas del desarrollo Full-Stack. Ahora tienes una base sólida.
        </p>
        
        <h3 className="text-2xl font-bold text-purple-400 mb-8">
          Tu próximo objetivo: Llevarlo a la Nube.
        </h3>

        {/* Botón Final de Llamado a la Acción */}
        <Link 
          href="/" 
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-purple-800 text-white font-semibold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Home className="w-5 h-5 mr-2" /> Volver a la Base de Operaciones
        </Link>
        
      </div>
    </main>
  );
}