import React, { useState } from "react";
import AnimatedText from "../elements/AnimatedText";
import Features from "../home-components/Features";
import GitHubAvailability from "../home-components/GitHubAvailability";
import ToastError from "../elements/toaster/ToastError";
import AboutMe from "./AboutMe";
import FAQ from "../home-components/FAQ";
import Credits from "../home-components/Credits";
import ScrollToTop from "../elements/ScrollToTop";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [input, setInput] = useState(gprmStore.data.username);
  function onNext() {
    if (input != "" && input.replace(/ /g, "") != "") {
      gprmStore.data.username = input;
      setIsVisible(true);
      topFunction();
    } else {
      invalidUsername();
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function invalidUsername() {
    if (alertVisible !== true) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 4400);
    }
  }
  return useObserver(() => (
    <>
      {isVisible ? (
        <AboutMe back={() => setIsVisible(false)} />
      ) : (
        <div className="scroll-smooth">
          <div className="w-full flex flex-col md:flex-row py-16 md:py-24 lg:py-32 min-h-[85vh] items-center relative">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col w-full md:w-1/2 relative z-10">
              <div className="flex flex-col">
                <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
                  Best Profile
                </p>
                <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 leading-tight tracking-tight">
                  Generator
                </p>
              </div>

              <form
                className="w-full max-w-lg glass-card p-2 pl-5 rounded-2xl flex items-center mt-12 md:mt-16 transition-all duration-300 hover:shadow-glow group"
                onSubmit={(e) => {
                  e.preventDefault();
                  onNext();
                }}
              >
                <input
                  type="text"
                  value={input}
                  required={true}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus={true}
                  className="bg-transparent w-full text-base md:text-lg text-white outline-none placeholder-slate-500"
                  placeholder="Enter GitHub username"
                />
                <button
                  type="submit"
                  className="glass-btn p-3 md:p-3.5 rounded-xl text-white flex-shrink-0 ml-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
              <div className="mt-8">
                <AnimatedText />
              </div>
            </div>
            <div className="flex w-full mt-16 md:mt-0 md:w-1/2 justify-center relative z-10">
              <div className="relative animate-float">
                <img
                  src="/hpill.svg"
                  alt=""
                  className="w-full sm:w-10/12 lg:w-9/12 max-w-md aspect-square select-none pointer-events-none drop-shadow-2xl"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
          {alertVisible && (
            <ToastError title="Enter a Valid GitHub Username !" />
          )}
          <Features />
          <GitHubAvailability />
          <FAQ />
          <Credits />
          <ScrollToTop />
        </div>
      )}
    </>
  ));
}
