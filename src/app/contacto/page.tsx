"use client";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-900 p-8 flex items-center justify-center">
      <section className="bg-slate-800 p-8 rounded-xl shadow-2xl max-w-lg w-full border border-slate-700">
        
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Órbita de Contacto</h1>
        <p className="text-gray-400 mb-8 text-center">Envía tu señal al centro de control estelar.</p>
        
        <form action="#" method="POST" className="space-y-6">
          {/* CAMPO: NOMBRE */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
              Nombre de Explorador
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              placeholder="Ej: Neil Armstrong"
              className="w-full rounded-md border border-gray-600 bg-slate-700 text-white p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* CAMPO: EMAIL */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="nombre@galaxia.com"
              className="w-full rounded-md border border-gray-600 bg-slate-700 text-white p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* CAMPO: MENSAJE */}
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
              Mensaje a la Base
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              placeholder="Escribe tu reporte aquí..."
              className="w-full rounded-md border border-gray-600 bg-slate-700 text-white p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.01] transition-all shadow-lg shadow-blue-900/20"
          >
            Enviar Transmisión
          </button>
        </form>

      </section>
    </main>
  );
}