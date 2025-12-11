// src/app/page.tsx - Versión FINAL CORREGIDA

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      
      {/* 🛑 CAPA 1: EL FONDO 🛑 */}
      {/* Esta capa debe ir sola y al inicio */}
      <div className="star-field"></div> 
      
      {/* 🚀 CAPA 2: EL CONTENIDO 🚀 */}
      {/* Debe tener z-10 (índice z) para asegurar que está encima del fondo (z-0) */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16"> 
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-tight mb-6 animate-pulse">
          ¡Bienvenido a NautaCode ProDev! 
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Tu portal para explorar los misterios del desarrollo web.
          Descubre nuevas tecnologías, domina lenguajes y construye tu propio universo digital.
        </p>
        
        <Link href="/conceptos-fundamentales" className="inline-block bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
          Explorar las Profundidades
        </Link>
      </div>
    </main>
  );
}