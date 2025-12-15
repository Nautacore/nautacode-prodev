// src/app/conceptos-fundamentales/page.tsx (dentro de la función ConceptosPage)

return (
  // 1. <main>: Contenedor principal de la página (¡Esto ya estaba bien!)
  <main className="min-h-screen bg-slate-900 p-8">
    
    {/* 2. <section>: Envuelve el título y el contenido. 
           Esto da significado semántico al bloque. (CORREGIDO) */}
    <section className="max-w-6xl mx-auto"> 
      
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Navegación Estelar de Conceptos </h1>
      
      {/* 3. <div>: Contenedor puramente estilístico para crear el grid. (CORRECTO) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Tarjeta 1: Sintaxis Básica */}
        <PlanetCard 
          title="Sintaxis Básica"
          description="Los cimientos de cualquier lenguaje de programación."
          colorClass="border-blue-500"
          icon={Code}
          link="/javascript-planet"
          // ... otras props
        />
        
        {/* Tarjeta 2: Funciones y Scope */}
        {/* ... */}
        
      </div>
    </section> {/* CIERRE DE LA SECCIÓN */}
  </main>
);