import React from "react";

export default function ToastError({ title }) {
  return (
    <div className="fixed flex top-4 left-1/2 -translate-x-1/2 p-3 px-6 rounded-xl text-sm font-medium w-max max-w-[90vw] justify-center items-center toast-error z-[100]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {title}
    </div>
  );
}
