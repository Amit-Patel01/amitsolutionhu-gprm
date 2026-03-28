import React from "react";

export default function ToastSuccess({ title }) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 p-3 px-6 rounded-xl text-sm font-medium flex w-max max-w-[90vw] justify-center items-center toast-success z-[100]">
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {title}
    </div>
  );
}
