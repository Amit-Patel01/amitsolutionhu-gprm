import React from "react";
import { GITHUB_SVG, INSTAGRAM_SVG, LINKEDIN_SVG, X_SVG } from "./SVG";

export default function Footer() {
  return (
    <footer className="w-full mt-16 md:mt-20 mb-8 fade-on-appear flex flex-col items-center">
      <div className="glass-divider w-full" />
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-2">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            <p className="text-white font-semibold text-sm tracking-wide">
              GPRM
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Making GitHub profiles premium since 2024.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Amit-Patel01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <GITHUB_SVG className="scale-110" />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <X_SVG className="scale-110" />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <LINKEDIN_SVG className="scale-110" />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
          >
            <INSTAGRAM_SVG className="scale-110" />
          </a>
        </div>

        <p className="text-xs text-slate-600 font-medium">
          &copy; 2026 GPRM
        </p>
      </div>
    </footer>
  );
}
