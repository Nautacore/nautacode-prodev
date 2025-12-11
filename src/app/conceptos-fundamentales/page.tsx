// src/app/conceptos-fundamentales/page.tsx

import Link from 'next/link';
import { Sparkles, Code, Layout, Zap } from 'lucide-react'; // Iconos temáticos

// Componente Tarjeta de Planeta
const PlanetCard = ({ title, description, colorClass, icon: Icon, link }) => (
  <div className={`p-6 rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] transform border-t-4 ${colorClass}`}>
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 mr-3 text-white" />
      <h3 className="text-3xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    <Link 
      href={link} 
      className={`inline-block py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-gray-900 hover:bg-gray-200`}
    >
      Explorar órbita
    </Link>
  </div>
);

export default function ConceptosFundamentales() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4 text-center">
          🌌 El Astrolabio: Pilares del Desarrollo
        </h1>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Comienza tu navegación entendiendo los tres planetas esenciales que construyen todo el universo digital.
        </p>

        {/* Grid de 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Planeta 1: HTML */}
          <PlanetCard
            title="HTML (Estructura)"
            description="El esqueleto, la base y los cimientos de tu sitio. Define el contenido, la jerarquía y el significado de los elementos."
            colorClass="bg-red-700/30 border-red-500" // Fondo semitransparente con borde rojo
            icon={Code}
            link="/html-planet" // Ruta que crearemos después
          />

          {/* Planeta 2: CSS */}
          <PlanetCard
            title="CSS (Apariencia)"
            description="El diseño, los colores y la presentación. Convierte el esqueleto de HTML en una interfaz visualmente atractiva y responsive."
            colorClass="bg-blue-700/30 border-blue-500" // Fondo semitransparente con borde azul
            icon={Layout}
            link="/css-planet"
          />

          {/* Planeta 3: JavaScript */}
          <PlanetCard
            title="JavaScript (Comportamiento)"
            description="La inteligencia y la acción. Añade interactividad, manipula datos y permite que tu sitio reaccione a los usuarios."
            colorClass="bg-yellow-700/30 border-yellow-500" // Fondo semitransparente con borde amarillo
            icon={Zap}
            link="/javascript-planet"
          />
        </div>

        {/* Botón de retorno */}
        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors">
            <Sparkles className="w-5 h-5 mr-2" /> Volver al puerto de lanzamiento
          </Link>
        </div>
      </div>
    </main>
  );
}