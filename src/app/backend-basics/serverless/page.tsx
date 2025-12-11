// src/app/backend-basics/databases/page.tsx - ¡CÓDIGO CORREGIDO!

import Link from 'next/link';
import { Database, Table, Zap, FileJson } from 'lucide-react';

export default function DatabasesPage() {
  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600 mb-6 flex items-center">
          <Database className="w-8 h-8 mr-3" /> Almacenamiento de Datos: Las Bases de la Nave
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Una Base de Datos es un sistema organizado para almacenar, gestionar y recuperar información. Es la memoria a largo plazo de la aplicación, esencial para la persistencia de datos de usuarios, contenido y configuraciones.
        </p>

        {/* Sección 1: Bases de Datos Relacionales (SQL) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <Table className="w-6 h-6 mr-2 text-green-400" /> 1. SQL: El Mundo Relacional
          </h2>
          <p className="text-gray-300 mb-4">
            Las bases de datos SQL (Structured Query Language) almacenan datos en **tablas** con esquemas fijos, donde cada fila es un registro y las tablas están interconectadas (relacionadas). Son ideales para transacciones financieras o datos que requieren alta integridad.
          </p>
          
          
          <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">Ejemplos:</h3>
          <p className="text-gray-400 mt-2 text-sm italic">
            MySQL, PostgreSQL, Oracle.
          </p>
        </div>

        {/* Sección 2: Bases de Datos No Relacionales (NoSQL) */}
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-gray-700 mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 flex items-center">
            <FileJson className="w-6 h-6 mr-2 text-green-400" /> 2. NoSQL: El Mundo Flexible
          </h2>
          <p className="text-gray-300 mb-4">
            Las bases de datos NoSQL no utilizan el modelo de tablas fijas. Almacenan datos en formatos más flexibles, como documentos (JSON), grafos o clave-valor. Son ideales para escalabilidad horizontal y datos que cambian constantemente.
          </p>
          
          
          <h3 className="text-xl font-semibold text-green-300 mt-6 mb-2">Ejemplos:</h3>
          <p className="text-gray-400 mt-2 text-sm italic">
            MongoDB, DynamoDB, Redis, Firebase Firestore.
          </p>
        </div>

        {/* Navegación */}
        <div className="mt-12 text-center">
          <Link 
            href="/backend-basics/api-routes" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 mr-4"
          >
            ← Anterior: APIs y Rutas
          </Link>
          <Link 
            href="/backend-basics/serverless" 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Siguiente: Serverless Functions →
          </Link>
        </div>

      </div>
    </main>
  );
}