import React from "react";

export default function ButtonWithSVG({ title, d, onClick }) {
  return (
    <button
      className="glass-btn p-2.5 px-5 flex items-center gap-2 text-white rounded-xl text-sm font-medium transition-all duration-200 group"
      onClick={onClick}
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 group-hover:-rotate-12 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={d}
        />
      </svg>
    </button>
  );
}
