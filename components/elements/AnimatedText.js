import React from "react";
import Marquee from "react-fast-marquee";

export default function AnimatedText() {
  return (
    <div className="text-slate-500 hidden md:block text-xl lg:text-2xl font-medium overflow-y-hidden">
      Create{" "}
      <Marquee pauseOnHover className="inline-block">
        <span className="text-rose-300/80 underline underline-offset-4 decoration-rose-300/30 mx-4">
          Beautiful
        </span>
        <span className="text-cyan-300/80 underline underline-offset-4 decoration-cyan-300/30 mx-4">
          Modern
        </span>
        <span className="text-amber-300/80 underline underline-offset-4 decoration-amber-300/30 mx-4">
          Interactive
        </span>
        <span className="text-purple-300/80 underline underline-offset-4 decoration-purple-300/30 mx-4">
          Perfect
        </span>
      </Marquee>{" "}
      Profile
    </div>
  );
}
