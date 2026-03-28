import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need to fill all sections?",
    answer:
      "Not at all. Only the GitHub username is mandatory, all other sections are optional. Fill them based on your requirements.",
  },
  {
    question: "Do I need to know Markdown or HTML?",
    answer:
      "This is a complete No-Code solution. You just fill in sections and we create a perfect GitHub Profile ReadMe for you, for free.",
  },
  {
    question: "How to change GitHub ReadMe?",
    answer:
      'If you have your personal repository (same name as your GitHub username), copy-paste the generated code into your ReadMe file. If not, create a new repo at github.com/new with your username as the name, initialize with a README, paste the code, and commit.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h3 className="text-sm md:text-base font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
