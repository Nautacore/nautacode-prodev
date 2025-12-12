export default function ReactPropsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purple-400">React Props</h1>
        
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Paso de Datos</h2>
          
          <div className="bg-black p-4 rounded text-sm overflow-x-auto font-mono text-cyan-300">
            <span className="text-blue-400">const</span> PlanetCard = (&#123; <span className="text-yellow-400">title,</span> description &#125;) <span className="text-blue-400">{"=>"}</span> &#123; <br/>
            &nbsp;&nbsp;return &lt;div&gt;&#123;title&#125;&lt;/div&gt;;<br/>
            &#125;;
          </div>
        </div>

        <p className="text-slate-400 text-sm">Las props permiten que los componentes sean reutilizables.</p>
      </div>
    </main>
  );
}
