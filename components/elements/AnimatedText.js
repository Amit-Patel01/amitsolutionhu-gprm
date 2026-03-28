import React from "react";
import TextLoop from "react-text-loop/lib/components/TextLoop";

export default function AnimatedText() {
  return (
    <div className="text-slate-500 hidden md:block text-xl lg:text-2xl font-medium overflow-y-hidden">
      Create{" "}
      <TextLoop>
        <span className="text-rose-300/80 underline underline-offset-4 decoration-rose-300/30">
          Beautiful
        </span>
        <span className="text-cyan-300/80 underline underline-offset-4 decoration-cyan-300/30">
          Modern
        </span>
        <span className="text-amber-300/80 underline underline-offset-4 decoration-amber-300/30">
          Interactive
        </span>
        <span className="text-purple-300/80 underline underline-offset-4 decoration-purple-300/30">
          Perfect
        </span>
      </TextLoop>{" "}
      Profile
    </div>
  );
}
