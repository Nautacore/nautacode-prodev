// ... imports previos
import ConceptChip from "@/components/ConceptChip";

// Dentro de tu return, después del botón de 2026:
<div className="mt-20 flex flex-wrap justify-center gap-10">
  <ConceptChip 
    name="Node.js" 
    color="#339933" // Verde oficial de Node
    level="RUNTIME_CORE"
    description="Entorno de ejecución (Runtime) que libera a JavaScript del navegador, permitiendo que funcione en tu computadora. Es esencial para el servidor de desarrollo y la gestión de herramientas vía NPM."
  />
</div>