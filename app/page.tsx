"use client";

import { DevHome } from "@/components/Dev/DevHome";
import { SqaHome } from "@/components/Testing/SqaHome";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"SQA" | "DEV">("SQA");

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🔥 TOGGLE */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 mt-12">
        <div
          className="relative flex items-center rounded-full p-1.5
          bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
        >
          <BorderBeam duration={3} size={60} className="from-teal-300 via-blue-500 to-transparent" />
          {/* Active Background */}
          <div
            className={`absolute top-1.5 bottom-1.5 w-[48%] rounded-full
            bg-gradient-to-r from-primary to-accent
            transition-all duration-500
            ${mode === "SQA" ? "left-1.5" : "left-[50%]"}`}
          />

          {/* SQA */}
          <button
            onClick={() => setMode("SQA")}
            className={`relative z-10 px-6 py-2 text-sm font-semibold
            ${mode === "SQA" ? "text-white" : "text-gray-400"}`}
          >
            SQA
          </button>

          {/* DEV */}
          <button
            onClick={() => setMode("DEV")}
            className={`relative z-10 px-6 py-2 text-sm font-semibold
            ${mode === "DEV" ? "text-white" : "text-gray-400"}`}
          >
            DEV
          </button>
        </div>
      </div>

      {/* 🔥 SWITCH FULL PAGE */}
      {mode === "DEV" ? <DevHome /> : <SqaHome />}
    </main>
  );
}
