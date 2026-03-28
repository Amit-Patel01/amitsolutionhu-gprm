import React from "react";

export default function Credits() {
  const contributors = [
    {
      name: "Amit Patel",
      role: "Lead Developer",
      github: "https://github.com/Amit-Patel01",
      avatar: "https://github.com/Amit-Patel01.png",
    },
    {
      name: "Vishwa Gaurav In",
      role: "Original Creator",
      github: "https://github.com/VishwaGauravIn",
      avatar: "https://github.com/VishwaGauravIn.png",
    },
  ];

  return (
    <div className="w-full py-16 md:py-24 flex flex-col items-center">
      <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-3">
        Team
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Maintained By
      </h2>
      <div className="flex flex-wrap justify-center gap-5 px-4">
        {contributors.map((person, index) => (
          <a
            key={index}
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 md:p-6 flex items-center gap-4 hover:shadow-glass-hover transition-all duration-300 group rounded-2xl"
          >
            <div className="relative">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-14 h-14 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-colors duration-300"
              />
              <div className="absolute inset-0 w-14 h-14 bg-purple-500/10 rounded-full blur-md -z-10 group-hover:bg-purple-500/20 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-white font-semibold text-base leading-tight">
                {person.name}
              </p>
              <p className="text-xs text-purple-400/70 font-medium tracking-wider uppercase mt-1">
                {person.role}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
