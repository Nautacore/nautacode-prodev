// src/app/contacto/page.tsx

"use client"; // ¡Debe estar aquí!

export default function ContactoPage() {
  
  // (La función handleSubmit debe haber sido eliminada)

  return (
    <main className="min-h-screen bg-slate-900 p-8 flex items-center justify-center">
      
      <section className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-lg w-full">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Órbita de Contacto</h1>
        <p className="text-gray-400 mb-8 text-center">Envía tu señal al centro de control estelar.</p>
        
        {/* REVISAR: SIN onSubmit. Solo acción y método. */}
        <form action="#" method="POST" className="space-y-4">
          
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
              Nombre de Explorador
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="mt-1 block w-full rounded-md border-gray-600 bg-slate-700 text-white p-2"
            />
          </div>
          
          {/* ... otros campos email y mensaje ... */}
          
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Transmisión
          </button>
        </form>

      </section>
    </main>
  );
}