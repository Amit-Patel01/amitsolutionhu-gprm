import React from "react";

export default function Pagination({ val }) {
  const steps = [1, 2, 3, 4, 5];
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 glass-card px-5 py-2.5 rounded-full flex items-center gap-2 z-50">
      {steps.map((step) => (
        <div
          key={step}
          className={`h-2 rounded-full transition-all duration-300 ${
            step === val
              ? "bg-purple-400 w-6"
              : step < val
              ? "bg-purple-500/30 w-2"
              : "bg-white/10 w-2"
          }`}
        />
      ))}
      <span className="text-[10px] text-slate-500 ml-2 font-medium tabular-nums">
        {val}/5
      </span>
    </div>
  );
}
