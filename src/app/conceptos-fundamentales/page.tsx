"use client";
// ------------------------------------------------------------------
// Archivo: src/app/conceptos-fundamentales/page.tsx
// ROL: Contiene solo la estructura de la página y usa los componentes.
// ------------------------------------------------------------------
import { Code, Rocket } from 'lucide-react'; 
import PlanetCard from '@/components/PlanetCard'; // <-- ¡Aquí importamos la tarjeta!

export default function ConceptosPage() {
  return (
    <main className="min-h-screen bg-slate-900 p-8">
        <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Navegación Estelar de Conceptos </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Sintaxis Básica */}
          <PlanetCard 
            title="Sintaxis Básica"
            description="Los cimientos de cualquier lenguaje de programación."
            colorClass="border-blue-500"
            icon={Code}
            link="/javascript-planet"
          />
          
          {/* Tarjeta 2: Funciones */}
           <PlanetCard 
            title="Funciones y Scope"
            description="Las unidades de acción y sus límites de visibilidad."
            colorClass="border-yellow-500"
            icon={Rocket}
            link="/javascript-functions"
          />

        </div>
      </div>
    </main>
  );
}