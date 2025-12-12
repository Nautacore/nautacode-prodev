export default function PlanetPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400">Exploración Planetaria</h1>
        
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ejemplo de Código</h2>
          
          {/* Bloque de Código Corregido */}
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            <span className="text-blue-400">const</span> boton = document.<span className="text-yellow-400">getElementById</span>('miBoton');<br/>
            boton.<span className="text-yellow-400">addEventListener</span>('click', () <span className="text-blue-400">{"=>"}</span> &#123; <br/>
            &nbsp;&nbsp;alert('¡Click!');<br/>
            &#125;);
          </div>
        </div>

        <p className="text-slate-400 italic">Continúa explorando el universo del código...</p>
      </div>
    </main>
  );
}
