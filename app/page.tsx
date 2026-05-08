"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
      return;
    }

    setInput((prev) => prev + value);
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+",
    "=",
  ];

  return (
    <main className="pt-5 min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-[320px]">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Calculadora
        </h1>

        <div className="bg-black text-green-400 text-right text-3xl p-4 rounded-lg mb-4 h-[70px] flex items-center justify-end overflow-hidden">
          {input || "0"}
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => handleClick("C")}
            className="col-span-4 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
          >
            C
          </button>

          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={`py-4 rounded-lg text-xl font-semibold transition ${
                ["+", "-", "*", "/", "="].includes(btn)
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}