import { ArrowUpIcon } from "@heroicons/react/outline";
import React from "react";

export default function ScrollToTop() {
  function topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-full flex justify-center md:justify-end py-8">
      <button
        className="glass-btn p-3.5 rounded-xl text-white transition-all duration-200 active:scale-95"
        onClick={() => topFunction()}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
