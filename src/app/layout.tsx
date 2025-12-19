// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar'; // <--- 1. IMPORTAMOS LA NAVBAR

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a]"> {/* Forzamos el fondo oscuro global */}
        <Navbar /> {/* <--- 2. LA PONEMOS AQUÍ PARA QUE SALGA EN TODO EL SITIO */}
        <main className="pt-20"> {/* Añade pt-20 (padding-top) para empujar el contenido hacia abajo */}
          {children}
        </main>
      </body>
    </html>
  )
}