import React, { useEffect, useState } from "react";
import CheckBox from "../elements/CheckBox";
import FilterButton from "../elements/buttons/FilterButton";
import NextButton from "../elements/buttons/NextButton";
import { githubstats } from "./GitHubCards";
import { socials } from "./Socials";
import Pagination from "../elements/Pagination";
import Preview from "./Preview";
import { useGPRMStore } from "../mobx/GPRMcontext";
import { useObserver } from "mobx-react";
import FeedbackButton from "../elements/FeedbackButton";
import themes from "../../data/themes";

export default function Extras({ back }) {
  const [isVisible, setIsVisible] = useState(false);
  const gprmStore = useGPRMStore();
  const [theme, setTheme] = useState(gprmStore.data.trophy.theme);
  const [border, setBorder] = useState(gprmStore.data.trophy.border);
  const [background, setBackground] = useState(
    gprmStore.data.trophy.background
  );
  const [quoteTheme, setQuoteTheme] = useState(gprmStore.data.quote.quoteTheme);
  const [layout, setLayout] = useState(gprmStore.data.quote.layout);
  const [color, setColor] = useState(gprmStore.data.visitcount.color);
  const [icon, setIcon] = useState(gprmStore.data.visitcount.icon);
  const [topRepoTheme, setTopRepoTheme] = useState(
    gprmStore.data.toprepo.toprepotheme
  );
  useEffect(() => {
    gprmStore.data.trophy.theme = theme;
  }, [theme]);
  useEffect(() => {
    gprmStore.data.trophy.border = border;
  }, [border]);
  useEffect(() => {
    gprmStore.data.trophy.background = background;
  }, [background]);
  useEffect(() => {
    gprmStore.data.visitcount.color = color;
  }, [color]);
  useEffect(() => {
    gprmStore.data.visitcount.icon = icon;
  }, [icon]);
  useEffect(() => {
    gprmStore.data.quote.quoteTheme = quoteTheme;
  }, [quoteTheme]);
  useEffect(() => {
    gprmStore.data.quote.layout = layout;
  }, [layout]);
  useEffect(() => {
    gprmStore.data.toprepo.toprepotheme = topRepoTheme;
  }, [topRepoTheme]);

  function changeLayout() {
    if (layout === "horizontal") {
      setLayout("vetical");
    } else {
      setLayout("horizontal");
    }
  }
  function onNext() {
    extras = "";
    if (document.getElementById("trophychk").checked === true) {
      extras =
        extras +
        `
## 🏆 GitHub Trophies
![](${document.getElementById("trophy").getAttribute("src")})
`;
    }
    if (document.getElementById("quotechk").checked === true) {
      if (gprmStore.data.quote.custom) {
        extras =
          extras +
          `
### ✍️ Developer Quote
*${gprmStore.data.quote.custom.replace(/(?:\r\n|\r|\n)/g, "<br>")}*
`;
      } else {
        extras =
          extras +
          `
### ✍️ Random Dev Quote
![](${document.getElementById("quote").getAttribute("src")})
`;
      }
    }
    if (document.getElementById("toprepochk").checked === true) {
      extras =
        extras +
        `
### 🔝 Top Contributed Repo
![](${document.getElementById("toprepo").getAttribute("src")})
`;
    }
    if (document.getElementById("visitorschk").checked === true) {
      extras =
        extras +
        `
---
[![](https://visitcount.itsvg.in/api?id=${gprmStore.data.username}&icon=${icon}&color=${color})](https://visitcount.itsvg.in)
`;
    }

    createFinalData();
    setIsVisible(true);
  }
  function createFinalData() {
    var finaldata = "";

    // 1. Above Header (Very Top)
    if (gprmStore.data.gifUrl && gprmStore.data.gifPlacement === "above-header") {
      finaldata += `<p align="center">\n  <img src="${gprmStore.data.gifUrl}" alt="Header GIF" />\n</p>\n\n`;
    }

    // 2. Title Section
    if (gprmStore.data.name) {
      finaldata += `<h1 align="center">Hi 👋, I'm ${gprmStore.data.name}</h1>\n`;
    } else {
      finaldata += `<h1 align="center">Hi 👋, I'm ${gprmStore.data.username}</h1>\n`;
    }

    if (gprmStore.data.subtitle) {
      finaldata += `<h3 align="center">${gprmStore.data.subtitle}</h3>\n\n`;
    }

    if (gprmStore.data.typingText) {
      const encodedLines = encodeURIComponent(gprmStore.data.typingText.split(";").join(";"));
      finaldata += `<p align="center">\n  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=A78BFA&center=true&vCenter=true&width=435&lines=${encodedLines}" alt="Typing Animation" />\n</p>\n\n`;
    }

    if (gprmStore.data.websiteUrl || gprmStore.data.portfolioUrl) {
      finaldata += `<p align="center">\n`;
      if (gprmStore.data.websiteUrl) {
        finaldata += `  <a href="${gprmStore.data.websiteUrl}" target="_blank">${gprmStore.data.websiteLabel || "Website"}</a>\n`;
      }
      if (gprmStore.data.websiteUrl && gprmStore.data.portfolioUrl) {
        finaldata += `  <span> | </span>\n`;
      }
      if (gprmStore.data.portfolioUrl) {
        finaldata += `  <a href="${gprmStore.data.portfolioUrl}" target="_blank">Portfolio</a>\n`;
      }
      finaldata += `</p>\n\n`;
    }

    // 2. GIF Placement: Below Title (Top)
    if (gprmStore.data.gifUrl && gprmStore.data.gifPlacement === "top") {
      finaldata += `<p align="center">\n  <img src="${gprmStore.data.gifUrl}" alt="Header GIF" />\n</p>\n\n`;
    }

    finaldata += `---\n\n`;

    if (gprmStore.data.aboutme != ``) {
      finaldata += `### 💫 About Me:\n${gprmStore.data.aboutme.replace(/(?:\r\n|\r|\n)/g, "<br>")}\n\n`;
    }

    // 6. GIF Placement: After About Me
    if (gprmStore.data.gifUrl && gprmStore.data.gifPlacement === "below-aboutme") {
      finaldata += `<p align="center">\n  <img src="${gprmStore.data.gifUrl}" alt="About Me GIF" />\n</p>\n\n`;
    }

    if (gprmStore.data.myJourney) {
      finaldata += `### 🚀 My Journey:\n${gprmStore.data.myJourney.replace(/(?:\r\n|\r|\n)/g, "<br>")}\n\n`;
    }
    if (gprmStore.data.visionMission) {
      finaldata += `### 🎯 Vision & Mission:\n${gprmStore.data.visionMission.replace(/(?:\r\n|\r|\n)/g, "<br>")}\n\n`;
    }
    if (gprmStore.data.expertise) {
      finaldata += `### 🛠️ Expertise:\n${gprmStore.data.expertise.replace(/(?:\r\n|\r|\n)/g, "<br>")}\n\n`;
    }

    if (socials != ``) {
      finaldata += `## 🌐 Socials:\n${socials}\n\n`;
    }

    if (gprmStore.data.tech != ``) {
      finaldata += `## 💻 Tech Stack:\n${gprmStore.data.tech.join(" ").replaceAll("for-the-badge", gprmStore.data.badge_theme)}\n\n`;
    }

    finaldata += extras;

    if (gprmStore.data.gifUrl && gprmStore.data.gifPlacement === "bottom") {
      finaldata += `<p align="center">\n  <img src="${gprmStore.data.gifUrl}" alt="Footer GIF" />\n</p>\n\n`;
    }

    finaldata = `${finaldata}<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->`;
    gprmStore.data.finalData = finaldata;
  }
  return useObserver(() => (
    <>
      {isVisible ? (
        <Preview back={() => setIsVisible(false)} />
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
              Step 4 of 5
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Additional Extras
            </h1>
          </div>

          {/* Trophies Section */}
          <div className="glass-card rounded-2xl p-6 md:p-8 w-full mb-6">
            <h2 className="text-sm font-semibold text-purple-300/90 mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-amber-500 rounded-full"></span>
              GitHub Trophies
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Theme
                </span>
                <select
                  id="theme"
                  value={theme}
                  onChange={() => setTheme(document.getElementById("theme").value)}
                  className="text-sm"
                >
                  {themes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <FilterButton
                chk={border}
                title="Border"
                onClick={() => setBorder(!border)}
              />
              <FilterButton
                title="Background"
                chk={background}
                onClick={() => setBackground(!background)}
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="select-none pointer-events-none max-w-full"
                draggable="false"
                id="trophy"
                src={`https://github-profile-trophy.vercel.app/?username=${
                  gprmStore.data.username
                }&theme=${theme}&no-frame=${!border}&no-bg=${!background}&margin-w=4`}
                alt=""
              />
              <CheckBox id="trophychk" title="Add GitHub Trophies" />
            </div>
          </div>

          {/* Visitor Counter Section */}
          <div className="glass-card rounded-2xl p-6 md:p-8 w-full mb-6">
            <h2 className="text-sm font-semibold text-purple-300/90 mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              Visitor Counter
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Color
                </span>
                <select
                  id="color"
                  value={color}
                  onChange={() => setColor(document.getElementById("color").value)}
                  className="text-sm"
                >
                  {colors.map((c, index) => (
                    <option key={index} value={index}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Icon
                </span>
                <select
                  id="icon"
                  value={icon}
                  onChange={() => setIcon(document.getElementById("icon").value)}
                  className="text-sm"
                >
                  {icons.map((ic, index) => (
                    <option key={index} value={index}>
                      {ic}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="https://visitcount.itsvg.in">
                <img
                  id="visitors"
                  src={`https://visitcount.itsvg.in/api?id=VishwaGauravIn&pretty=true&icon=${icon}&color=${color}`}
                  alt=""
                  className="mb-2"
                />
              </a>
            </div>
            <CheckBox id="visitorschk" title="Add Visitors Count" />
          </div>

          {/* Quote Section */}
          <div className="glass-card rounded-2xl p-6 md:p-8 w-full mb-6">
            <h2 className="text-sm font-semibold text-purple-300/90 mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
              Random Dev Quote
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Theme
                </span>
                <select
                  id="quotetheme"
                  value={quoteTheme}
                  onChange={() =>
                    setQuoteTheme(document.getElementById("quotetheme").value)
                  }
                  className="text-sm"
                >
                  {quoteThemes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <FilterButton
                title={`Layout- ${layout}`}
                onClick={() => changeLayout()}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <img
                  className="select-none pointer-events-none max-w-full"
                  draggable="false"
                  id="quote"
                  src={`https://quotes-github-readme.vercel.app/api?type=${layout}&theme=${quoteTheme}`}
                  alt=""
                />
              </div>

              <div className="w-full">
                <label className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-tight">
                  Or Type Your Own Quote
                </label>
                <textarea
                  className="w-full p-4 rounded-xl glass-input text-sm min-h-[100px] outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  placeholder="The best way to predict the future is to invent it..."
                  value={gprmStore.data.quote.custom}
                  onChange={(e) => (gprmStore.data.quote.custom = e.target.value)}
                />
                <p className="text-[10px] text-slate-500 mt-2">
                  * If you type your own quote, it will be used instead of the
                  random image above.
                </p>
              </div>
            </div>
            <CheckBox id="quotechk" title="Add Dev Quote Section" />
          </div>

          {/* Top Contributed Repo Section */}
          <div className="glass-card rounded-2xl p-6 md:p-8 w-full mb-6">
            <h2 className="text-sm font-semibold text-purple-300/90 mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-rose-500 rounded-full"></span>
              Top Contributed Repo
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Theme
                </span>
                <select
                  id="toprepotheme"
                  value={topRepoTheme}
                  onChange={() =>
                    setTopRepoTheme(document.getElementById("toprepotheme").value)
                  }
                  className="text-sm"
                >
                  {themes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="select-none pointer-events-none max-w-full"
                draggable="false"
                id="toprepo"
                src={`https://github-contributor-stats.vercel.app/api?username=${gprmStore.data.username}&limit=5&theme=${topRepoTheme}&combine_all_yearly_contributions=true`}
                alt=""
              />
            </div>
            <CheckBox id="toprepochk" title="Add Top Contributed Repo List" />
          </div>

          <div className="mt-2">
            <NextButton onClick={() => onNext()} />
          </div>
          <Pagination val={4} />
          <FeedbackButton />
        </div>
      )}
    </>
  ));
}

const quoteThemes = [
  "light",
  "dark",
  "radical",
  "merko",
  "gruvbox",
  "tokyonight",
];

const colors = [
  "cyan",
  "blue",
  "amber",
  "green",
  "red",
  "rose",
  "indigo",
  "orange",
  "emerald",
  "teal",
  "pink",
  "fuchsia",
  "neutral",
  "random",
];

const icons = [
  "default",
  "bar",
  "code",
  "cursor",
  "emoji",
  "eye",
  "fire",
  "heart",
  "bolt",
  "star",
  "random",
];

export var extras = ``;
