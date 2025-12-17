// src/app/conceptos-fundamentales/page.tsx

"use client";

import { Code, Functions } from 'lucide-react';
import PlanetCard from '@/components/PlanetCard';

// 1. DEFINICIÓN DE DATOS (Arriba del componente para limpieza)
const cardsData = [
    {
        title: "Sintaxis Básica",
        description: "Los cimientos de cualquier lenguaje de programación.",
        colorClass: "border-blue-500",
        icon: Code,
        link: "/javascript-planet"
    },
    {
        title: "Funciones y Scope",
        description: "Cómo crear bloques de código reutilizables.",
        colorClass: "border-teal-500",
        icon: Functions,
        link: "/functions-planet"
    },
    // Añade aquí más tarjetas si es necesario
];


// 2. DEFINICIÓN DEL COMPONENTE PRINCIPAL
export default function ConceptosPage() {
    
    // El return DEBE estar directamente dentro de esta función
    return (
        // <main> de estructura semántica
        <main className="min-h-screen bg-slate-900 p-8">
            
            {/* <section> de estructura semántica para el contenido */}
            <section className="max-w-6xl mx-auto"> 
                
                <h1 className="text-4xl font-bold text-white mb-12 text-center">Navegación Estelar de Conceptos </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Mapeo dinámico de tarjetas (si lo tienes implementado) */}
                    {cardsData.map((card, index) => (
                        <PlanetCard
                            key={index} // Se usa el índice como clave temporal.
                            title={card.title}
                            description={card.description}
                            colorClass={card.colorClass}
                            icon={card.icon}
                            link={card.link}
                        />
                    ))}
                    
                </div>
            </section>
        </main>
    );
}

// 3. ¡Nada de código después del corchete de cierre del export default!