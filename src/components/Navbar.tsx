// src/components/Navbar.tsx
// El componente de la barra de navegación.

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 shadow-xl border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-90 transition-opacity">
          NautaCode ProDev
        </Link>
        
        <div className="flex space-x-6">
          <Link href="/conceptos-fundamentales" className="text-gray-300 hover:text-blue-400 font-medium transition duration-300 ease-in-out">
            El Astrolabio
          </Link>
          
          <Link href="/frontend-exploration" className="text-gray-300 hover:text-purple-400 font-medium transition duration-300 ease-in-out">
            Frontend
          </Link>

          <Link href="/backend-basics" className="text-gray-300 hover:text-green-400 font-medium transition duration-300 ease-in-out">
            Backend
          </Link>

          <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}