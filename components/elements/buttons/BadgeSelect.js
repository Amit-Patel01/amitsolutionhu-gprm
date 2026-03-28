import React, { useState } from "react";
import { useGPRMStore } from "../../mobx/GPRMcontext";

export default function BadgeSelect({ label, url }) {
  const gprmStore = useGPRMStore();
  const [isAdded, setIsAdded] = useState(
    gprmStore.data.tech.toString().includes(url)
  );
  function onClickFun() {
    if (isAdded) {
      setIsAdded(false);
      var badgeIndex = gprmStore.data.tech.indexOf(url);
      gprmStore.data.tech.splice(badgeIndex, 1);
    } else {
      setIsAdded(true);
      gprmStore.data.tech.push(url);
    }
  }
  return (
    <>
      {isAdded ? (
        <div
          className="glass-badge-active rounded-lg flex items-center cursor-pointer hover:shadow-glow active:scale-[0.98] transition-all duration-200 select-none m-1.5 text-purple-200"
          onClick={onClickFun}
        >
          <p className="py-1.5 px-3 text-xs font-medium">{label}</p>
          <div className="w-[1px] bg-white/10 h-full"></div>
          <p className="px-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </p>
        </div>
      ) : (
        <div
          className="glass-badge rounded-lg flex items-center cursor-pointer hover:border-purple-400/30 active:scale-[0.98] transition-all duration-200 select-none m-1.5 text-slate-400 hover:text-slate-300"
          onClick={onClickFun}
        >
          <p className="py-1.5 px-3 text-xs font-medium">{label}</p>
          <div className="w-[1px] bg-white/10 h-full"></div>
          <p className="px-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </p>
        </div>
      )}
    </>
  );
}
