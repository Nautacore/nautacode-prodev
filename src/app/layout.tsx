// src/app/layout.tsx
// El esqueleto de todas nuestras páginas.

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- Importamos la Navbar

export const metadata: Metadata = {
  title: "NautaCode ProDev - Navega hacia el Código Profesional", 
  description: "Tu guía para explorar y dominar el desarrollo web moderno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body> 
        <Navbar /> {/* <-- La Navbar aparece en todas las páginas */}
        <div className="pt-16"> 
            {/* Agregamos este padding para que el contenido no quede debajo de la Navbar fija */}
            {children}
        </div>
      </body>
    </html>
  );
}

// Esto es un push de prueba final para Vercel (Intento 3)