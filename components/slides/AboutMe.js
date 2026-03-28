import React, { useState } from "react";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";
import Socials from "./Socials";
import FeedbackButton from "../elements/FeedbackButton";

export default function AboutMe({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();

  const [data, setData] = useState({
    name: gprmStore.data.name || "",
    subtitle: gprmStore.data.subtitle || "",
    typingText: gprmStore.data.typingText || "",
    gifUrl: gprmStore.data.gifUrl || "",
    gifPlacement: gprmStore.data.gifPlacement || "top",
    websiteLabel: gprmStore.data.websiteLabel || "",
    websiteUrl: gprmStore.data.websiteUrl || "",
    portfolioUrl: gprmStore.data.portfolioUrl || "",
    aboutme: gprmStore.data.aboutme || "",
    myJourney: gprmStore.data.myJourney || "",
    visionMission: gprmStore.data.visionMission || "",
    expertise: gprmStore.data.expertise || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const onNext = () => {
    Object.keys(data).forEach((key) => {
      gprmStore.data[key] = data[key];
    });
    setIsVisible(true);
  };

  return useObserver(() => (
    <>
      {isVisible ? (
        <Socials back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear w-full max-w-5xl mx-auto pb-20">
          <button
            className="left-0 top-0 absolute m-4 md:m-6 flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 outline-none group z-10"
            onClick={back}
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="text-center mt-16 md:mt-20 mb-10">
            <div className="inline-flex items-center gap-2 glass-badge px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              <span className="text-xs text-purple-300 font-medium tracking-wider uppercase">
                Step 1 of 5
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Customize Your Details
            </h1>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              Fill in your profile information. Only the username is required.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full gap-8 items-start">
            <div className="hidden lg:flex w-4/12 sticky top-8 justify-center items-start pt-8">
              <div className="relative animate-float">
                <img
                  src="/happy.svg"
                  alt="Illustration"
                  className="w-full max-w-[280px] aspect-square select-none pointer-events-none drop-shadow-2xl"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            <div className="flex flex-col w-full lg:w-8/12 gap-5">
              {/* Basic Info Section */}
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-white">Basic Info</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Display Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="e.g. Amit Patel"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Subtitle
                    </label>
                    <input
                      id="subtitle"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="e.g. Founder at TechHub | Developer"
                      value={data.subtitle}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Typing Animation Text{" "}
                      <span className="text-slate-600 font-normal">
                        (semicolon separated)
                      </span>
                    </label>
                    <input
                      id="typingText"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="MERN Developer;Problem Solver;Tech Enthusiast"
                      value={data.typingText}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Visuals Section */}
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-white">Visuals & Animations</h2>
                </div>
                <div className="space-y-5">
                  <p className="text-xs text-slate-500">
                    Find GIFs at{" "}
                    <a
                      href="https://giphy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400/80 hover:text-purple-300 transition-colors underline underline-offset-2"
                    >
                      GIPHY.COM
                    </a>
                  </p>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      GIF URL
                    </label>
                    <input
                      id="gifUrl"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="https://media.giphy.com/media/..."
                      value={data.gifUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      GIF Placement
                    </label>
                    <select
                      id="gifPlacement"
                      className="w-full p-3.5 rounded-xl glass-input text-sm focus:ring-purple-500/50 transition-all outline-none"
                      value={data.gifPlacement}
                      onChange={handleChange}
                    >
                      <option value="above-header">Very Top (Above All)</option>
                      <option value="top">Top (Below Title)</option>
                      <option value="below-aboutme">Mid (After About Me)</option>
                      <option value="bottom">Bottom (Above Footer)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Links Section */}
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-white">Links Overview</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Website Label
                    </label>
                    <input
                      id="websiteLabel"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="e.g. AmitSolutionHub"
                      value={data.websiteLabel}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Website URL
                    </label>
                    <input
                      id="websiteUrl"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="https://..."
                      value={data.websiteUrl}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Portfolio URL
                    </label>
                    <input
                      id="portfolioUrl"
                      type="text"
                      className="w-full p-3.5 rounded-xl glass-input text-sm"
                      placeholder="https://..."
                      value={data.portfolioUrl}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Sections */}
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-white">Profile Sections</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      About Me
                    </label>
                    <textarea
                      id="aboutme"
                      className="w-full p-3.5 rounded-xl glass-input text-sm h-28 resize-none"
                      placeholder="I love building practical systems..."
                      value={data.aboutme}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      My Journey{" "}
                      <span className="text-slate-600 font-normal">
                        (Markdown supported)
                      </span>
                    </label>
                    <textarea
                      id="myJourney"
                      className="w-full p-3.5 rounded-xl glass-input text-sm h-28 resize-none"
                      placeholder="Share your career path or growth story..."
                      value={data.myJourney}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Vision & Mission{" "}
                      <span className="text-slate-600 font-normal">
                        (Markdown supported)
                      </span>
                    </label>
                    <textarea
                      id="visionMission"
                      className="w-full p-3.5 rounded-xl glass-input text-sm h-28 resize-none"
                      placeholder="What drives you? What are your goals?"
                      value={data.visionMission}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-medium mb-2">
                      Expertise{" "}
                      <span className="text-slate-600 font-normal">
                        (Markdown supported)
                      </span>
                    </label>
                    <textarea
                      id="expertise"
                      className="w-full p-3.5 rounded-xl glass-input text-sm h-28 resize-none"
                      placeholder="List your core strengths and skills..."
                      value={data.expertise}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <div className="flex justify-center pt-2 pb-4">
                <NextButton onClick={onNext} />
              </div>
            </div>
          </div>
          <Pagination val={1} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}
