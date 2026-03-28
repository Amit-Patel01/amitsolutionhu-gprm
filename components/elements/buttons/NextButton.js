import React from "react";

export default function NextButton({ onClick }) {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <button
      className="glass-btn px-8 py-3 rounded-xl text-white text-sm font-semibold tracking-wider uppercase select-none"
      onClick={() => {
        onClick();
        topFunction();
      }}
    >
      Continue
      <svg
        className="w-4 h-4 inline-block ml-2 -mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
