"use client";

import { useMemo, useState } from "react";

export default function NotasPage() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const validarNota = (valor: string) => {
    const numero = Number(valor);
    return !isNaN(numero) && numero >= 0 && numero <= 5;
  };

  const definitiva = useMemo(() => {
    if (
      !validarNota(nota1) ||
      !validarNota(nota2) ||
      !validarNota(nota3)
    ) {
      return null;
    }

    const n1 = Number(nota1) * 0.3;
    const n2 = Number(nota2) * 0.3;
    const n3 = Number(nota3) * 0.4;

    return (n1 + n2 + n3).toFixed(2);
  }, [nota1, nota2, nota3]);

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center pt-16 pb-16 pl-5 pr-5">
      <div className="bg-gray-800 w-full max-w-md rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Calculadora de Notas
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">
              Nota 1 (30%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={nota1}
              onChange={(e) => setNota1(e.target.value)}
              placeholder="Ej: 4.5"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Nota 2 (30%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={nota2}
              onChange={(e) => setNota2(e.target.value)}
              placeholder="Ej: 3.8"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Nota 3 (40%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={nota3}
              onChange={(e) => setNota3(e.target.value)}
              placeholder="Ej: 4.2"
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 bg-black rounded-xl p-5 text-center">
          <p className="text-gray-400 text-sm mb-2">Definitiva</p>

          <p
            className={`text-4xl font-bold ${
              definitiva && Number(definitiva) >= 3
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {definitiva ?? "--"}
          </p>
        </div>

        <p className="text-gray-400 text-sm text-center mt-4">
          Ingresa notas entre 0.0 y 5.0
        </p>
      </div>
    </main>
  );
}