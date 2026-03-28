import React, { useEffect, useState } from "react";
import { useGPRMStore } from "../../mobx/GPRMcontext";

export default function TextInputWithIcon({
  id,
  children,
  placeholder,
  viewBox = "-0.5 0 20 16",
}) {
  const gprmStore = useGPRMStore();
  const [input, setInput] = useState(gprmStore.data.socials[id]);
  useEffect(() => {
    gprmStore.data.socials[id] = input;
  }, [input]);
  return (
    <div className="flex w-full md:w-[calc(50%-12px)] my-1.5">
      <input
        type="text"
        id={id}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="w-full h-14 p-4 bg-transparent outline-none border-b border-white/8 focus:border-purple-400/50 text-sm text-white placeholder-slate-600 transition-colors duration-200"
      />
      <label htmlFor={id} className="p-4 flex items-center">
        <span className="sr-only">{id}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={viewBox}
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6 text-purple-400/50"
        >
          {children}
        </svg>
      </label>
    </div>
  );
}
