import React from "react";

export default function FeedbackButton() {
  return (
    <a
      href="mailto:itsvgin@gmail.com"
      className="fixed bottom-8 right-8 flex items-center gap-2.5 glass-card px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white transition-all duration-300 group z-50 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
    >
      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <svg
          className="w-3 h-3 text-purple-400 group-hover:text-purple-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </div>
      <span className="tracking-wide uppercase">Feedback</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
}
