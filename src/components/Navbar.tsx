import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 shadow-xl">
      {/* h-16 fija la altura a 64px para que no sea una "super barra" */}
      <div className="container mx-auto h-16 px-4 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-90 transition-opacity">
          NautaCode ProDev
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/frontend-exploration" className="text-gray-300 hover:text-white transition-colors">Frontend</Link>
          <Link href="/backend" className="text-gray-300 hover:text-white transition-colors">Backend</Link>
          <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}