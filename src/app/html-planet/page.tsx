// src/app/html-planet/page.tsx

import Link from 'next/link';
import { BookOpen, Globe, Tag } from 'lucide-react';

export default function HTMLPlanetPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-6 flex items-center">
          <Globe className="w-8 h-8 mr-3" /> Planeta HTML: La Estructura Cósmica
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          HTML (HyperText Markup Language) es el esqueleto de cualquier sitio. Es el lenguaje que le da significado y jerarquía a tu contenido. Sin él, solo tendrías texto plano.
        </p>

        {/* Sección 1: Etiquetas (Tags) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Tag className="w-6 h-6 mr-2 text-red-400" /> 1. Componentes: Las Etiquetas
          </h2>
          <p className="text-gray-300 mb-4">
            Todo en HTML se construye con **etiquetas (tags)**. Son como cajas que contienen tu contenido y le dicen al navegador qué es ese contenido (un título, un párrafo, una imagen, etc.).
          </p>
          
          <h3 className="text-xl font-semibold text-red-300 mt-6 mb-2">Sintaxis Básica:</h3>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-green-300">
            {/* Ejemplo de Bloque de Código */}
            &lt;nombre-etiqueta&gt; Contenido aquí &lt;/nombre-etiqueta&gt;
            <br/>
            &lt;p&gt;Esto es un párrafo.&lt;/p&gt;
          </div>
        </div>

        {/* Sección 2: Estructura Básica */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-red-400" /> 2. El Esqueleto Estelar
          </h2>
          <p className="text-gray-300 mb-4">
            Todo documento HTML tiene una estructura esencial que define el tipo de documento y divide el contenido visible del invisible.
          </p>
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-green-300">
            {/* Ejemplo de Bloque de Código */}
            &lt;!DOCTYPE html&gt; <br/>
            &lt;html lang="es"&gt; <br/>
            &nbsp; &lt;head&gt; <br/>
            &nbsp; &nbsp; &lt;title&gt;Título de la Página&lt;/title&gt; <br/>
            &nbsp; &lt;/head&gt; <br/>
            &nbsp; &lt;body&gt; <br/>
            &nbsp; &nbsp; &lt;h1&gt;Contenido Visible&lt;/h1&gt; <br/>
            &nbsp; &nbsp; &lt;p&gt;Aquí va la información para el usuario.&lt;/p&gt; <br/>
            &nbsp; &lt;/body&gt; <br/>
            &lt;/html&gt;
          </div>
        </div>
        

        {/* Navegación al siguiente planeta */}
        <div className="mt-12 text-center">
          <Link 
            href="/conceptos-fundamentales" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Volver al Astrolabio
          </Link>
          <Link 
            href="/css-planet" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente Planeta: CSS →
          </Link>
        </div>

      </div>
    </main>
  );
}