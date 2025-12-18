"use client";

export default function ContactoPage() {
  return (
    // Forzamos el fondo oscuro y un padding superior para que el Navbar no tape el título
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 px-4 flex flex-col items-center relative overflow-hidden">
      <div className="star-field"></div> {/* Esto activa tus estrellas del globals.css */}
      
      <section className="relative z-10 bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 text-center">
          Órbita de Contacto
        </h1>
        <p className="text-gray-400 text-center mb-8">Envía tu señal al centro de control estelar.</p>

        <form action="#" method="POST" className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-300 mb-1">Nombre de Explorador</label>
            <input type="text" placeholder="Ej: Neil Armstrong" className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-300 mb-1">Correo Electrónico</label>
            <input type="email" placeholder="nombre@galaxia.com" className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-300 mb-1">Mensaje a la Base</label>
            <textarea rows={4} placeholder="Escribe tu reporte aquí..." className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Enviar Transmisión
          </button>
        </form>
      </section>
    </main>
  );
}