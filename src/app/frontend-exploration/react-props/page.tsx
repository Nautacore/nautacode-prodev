export default function PropsPage() {
  const codeSnippet = `const PlanetCard = ({ title, description }) => {
  return <div>{title}</div>;
};`;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purple-400">React Props</h1>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Paso de Datos</h2>
          <pre className="bg-black p-4 rounded text-cyan-300 font-mono text-sm whitespace-pre-wrap">
            {codeSnippet}
          </pre>
        </div>
      </div>
    </main>
  );
}
