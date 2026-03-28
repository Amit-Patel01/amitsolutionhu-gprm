import React, { useEffect, useState } from "react";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import Pagination from "../elements/Pagination";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";
import Socials from "./Socials";
import FeedbackButton from "../elements/FeedbackButton";
import themes from "../../data/themes";

export default function GitHubStats({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [theme, setTheme] = useState(gprmStore.data.stats.theme);
  const [border, setBorder] = useState(gprmStore.data.stats.border);
  const [includeAll, setIncludeAll] = useState(gprmStore.data.stats.lifetime);
  const [includePrivate, setIncludePrivate] = useState(
    gprmStore.data.stats.prv
  );
  function onNext() {
    githubstats = `# 📊 GitHub Stats:
![](${document.getElementById("stats").getAttribute("src")})<br/>
![](${document.getElementById("streak").getAttribute("src")})<br/>
![](${document.getElementById("langs").getAttribute("src")})
`;
    setIsVisible(true);
  }
  useEffect(() => {
    gprmStore.data.stats.theme = theme;
    gprmStore.data.stats.border = border;
    gprmStore.data.stats.lifetime = includeAll;
    gprmStore.data.stats.prv = includePrivate;
  });
  return useObserver(() => (
    <>
      {isVisible ? (
        <Socials back={() => setIsVisible(false)} />
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
              Step 2
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Flex your GitHub Stats
            </h1>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 w-full">
            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Theme
                </span>
                <select
                  id="theme"
                  value={gprmStore.data.stats.theme}
                  onChange={() =>
                    setTheme(document.getElementById("theme").value)
                  }
                  className="text-sm"
                >
                  {themes.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <FilterButton
                chk={border}
                title="Border"
                onClick={() => setBorder(!border)}
              />
              <FilterButton
                title="Lifetime"
                chk={includeAll}
                onClick={() => setIncludeAll(!includeAll)}
              />
              <FilterButton
                title="Private"
                chk={includePrivate}
                onClick={() => setIncludePrivate(!includePrivate)}
              />
            </div>

            <p className="text-xs text-slate-500 text-center mb-4">
              Please wait for images to load after changing values
            </p>

            <div className="flex flex-col items-center gap-3">
              <img
                className="select-none pointer-events-none max-w-full"
                draggable="false"
                id="stats"
                src={`https://github-readme-stats.vercel.app/api?username=${
                  gprmStore.data.username
                }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}`}
                alt=""
              />
              <img
                className="select-none pointer-events-none max-w-full"
                draggable="false"
                id="streak"
                src={`https://nirzak-streak-stats.vercel.app/?user=${
                  gprmStore.data.username
                }&theme=${theme}&hide_border=${!border}`}
                alt=""
              />
              <img
                className="select-none pointer-events-none max-w-full"
                draggable="false"
                id="langs"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                  gprmStore.data.username
                }&theme=${theme}&hide_border=${!border}&include_all_commits=${includeAll}&count_private=${includePrivate}&layout=compact`}
                alt=""
              />
            </div>
          </div>

          <div className="mt-6">
            <NextButton onClick={() => onNext()} />
          </div>
          <Pagination val={2} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}

export var githubstats = ``;
