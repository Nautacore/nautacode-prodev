// src/app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>  {/* <--- CAMBIA el div principal por <main> */}
          {children}
        </main> {/* <--- CAMBIA el div principal por </main> */}
      </body>
    </html>
  )
}