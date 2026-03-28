import React from "react";

export default function FilterButton({ title, onClick, chk }) {
  return (
    <button
      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 ${
        chk
          ? "bg-purple-500/30 text-purple-200 border border-purple-400/40 shadow-glow"
          : "bg-transparent text-slate-400 border border-white/10 hover:border-purple-400/30 hover:text-purple-300"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
