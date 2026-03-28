import React, { useEffect, useState } from "react";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import Extras from "./Extras";
import { useObserver } from "mobx-react";
import { data } from "../../data/tech";
import { searchFilter } from "../../utils/searchFilter";
import { SearchIcon } from "@heroicons/react/outline";
import TechBadgesWrapper from "../techstack/TechBadgesWrapper";
import FeedbackButton from "../elements/FeedbackButton";

export default function TechStack({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [BadgeStyle, setBadgeStyle] = useState(gprmStore.data.badge_theme);
  const [techData, setTechData] = useState(data);
  const [searchStr, setSearchStr] = useState("");
  useEffect(() => {
    gprmStore.data.badge_theme = BadgeStyle;
  }, [BadgeStyle]);

  useEffect(() => {
    setTechData(searchFilter(searchStr));
  }, [searchStr]);

  const nothingFound = () => {
    return (
      <p className="text-rose-300/60 my-10 text-sm">
        No results found for your search.
      </p>
    );
  };
  return useObserver(() => (
    <>
      {isVisible ? (
        <Extras back={() => setIsVisible(false)} />
      ) : (
        <div className="flex flex-col items-center fade-on-appear w-full max-w-5xl mx-auto">
          <button
            className="left-0 absolute m-4 md:m-8 flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 outline-none group"
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
            <span className="text-sm">Back</span>
          </button>

          <div className="text-center mt-16 md:mt-20 mb-8">
            <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-2">
              Step 3 of 5
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Add Tech that you use
            </h1>
          </div>

          <div className="relative w-full max-w-md mb-8">
            <input
              type="text"
              value={searchStr}
              className="glass-card w-full p-4 pl-12 rounded-2xl text-sm text-white outline-none placeholder-slate-500"
              placeholder="Search tech..."
              onChange={(e) => setSearchStr(e.target.value)}
            />
            <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>

          <div className="flex flex-col md:flex-row w-full">
            <div
              className={`w-full ${
                searchStr ? "hidden" : "flex"
              } md:w-5/12 justify-center items-center`}
            >
              <div className="relative animate-float">
                <img
                  src="/girlonpc.svg"
                  alt=""
                  className="md:w-10/12 aspect-square select-none pointer-events-none drop-shadow-2xl"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
            <div
              className={`flex flex-col w-full ${
                searchStr ? "md:w-full" : "md:w-7/12"
              }`}
            >
              <div className="flex flex-col h-full items-center">
                {techData.lang.length === 0 &&
                  techData.database.length === 0 &&
                  techData.design.length === 0 &&
                  techData.frameworks.length === 0 &&
                  techData.hosting.length === 0 &&
                  techData.ml.length === 0 &&
                  techData.others.length === 0 &&
                  techData.servers.length === 0 &&
                  techData.cicdvcs.length === 0 &&
                  techData.others.length === 0 &&
                  techData.testing.length === 0 &&
                  nothingFound()}

                <TechBadgesWrapper label="LANGUAGES" data={techData.lang} />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <TechBadgesWrapper label="Hosting/SaaS" data={techData.hosting} />
            <TechBadgesWrapper
              label="FRAMEWORKS, PLATFORMS & LIBRARIES"
              data={techData.frameworks}
            />
            <TechBadgesWrapper label="SERVERS" data={techData.servers} />
            <TechBadgesWrapper
              label="DATABASES / ORM"
              data={techData.database}
            />
            <TechBadgesWrapper label="DESIGN" data={techData.design} />
            <TechBadgesWrapper label="ML/DL" data={techData.ml} />
            <TechBadgesWrapper label="CI/CD VCS" data={techData.cicdvcs} />
            <TechBadgesWrapper label="TESTING" data={techData.testing} />
            <TechBadgesWrapper label="OTHER" data={techData.others} />
          </div>

          <div className="glass-card rounded-xl p-4 px-6 flex flex-row flex-wrap justify-center items-center gap-3 my-6">
            <span className="text-xs text-slate-500 uppercase tracking-wider">
              Style
            </span>
            <select
              id="badgestyle"
              value={
                gprmStore.data.badge_theme
                  ? gprmStore.data.badge_theme
                  : "for-the-badge"
              }
              onChange={() =>
                setBadgeStyle(document.getElementById("badgestyle").value)
              }
              className="text-sm"
            >
              <option value="for-the-badge">For the badge</option>
              <option value="flat">Flat</option>
              <option value="flat-square">Flat Square</option>
              <option value="plastic">Plastic</option>
            </select>
            <img
              src={`https://img.shields.io/badge/Preview-1ED760?style=${BadgeStyle}&logo=spotify&logoColor=white`}
              alt=""
              className="w-max max-w-xs"
            />
          </div>

          <NextButton onClick={() => setIsVisible(true)} />
          <Pagination val={3} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}
