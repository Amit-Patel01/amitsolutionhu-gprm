import React, { useState, useEffect } from "react";
import ButtonWithSVG from "../elements/buttons/ButtonWithSVG";
import { db } from "../../config/firebase";
import ToastSuccess from "../elements/toaster/ToastSuccess";
import { useGPRMStore } from "../mobx/GPRMcontext";
import FeedbackButton from "../elements/FeedbackButton";

export default function Preview({ back }) {
  const [copiedAlertVisible, setCopiedAlertVisible] = useState(false);
  const [downloadAlertVisible, setDownloadAlertVisible] = useState(false);
  const gprmStore = useGPRMStore();
  var md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    quotes: "\u201c\u201d\u2018\u2019",
    highlight: function (/*str, lang*/) {
      return "";
    },
  });

  useEffect(() => {
    db.collection(gprmStore.data.username).add({
      date: Date(),
      data: gprmStore.data.finalData,
    });
    setTimeout(() => {
      document.getElementById("content").innerHTML = md.render(
        gprmStore.data.finalData
      );

      const links = document?.getElementById("content")?.querySelectorAll("a");
      if (links.length > 0) {
        links.forEach((link) => {
          link.setAttribute("target", "_blank");
        });
      }
    }, 300);
  }, []);

  function onCopy() {
    navigator.clipboard.writeText(gprmStore.data.finalData);
    copied();
  }
  function onDownload() {
    const element = document.createElement("a");
    const file = new Blob([gprmStore.data.finalData], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ReadMe.md";
    document.body.appendChild(element);
    element.click();
    downloaded();
  }
  function reloadTab() {
    location.reload();
  }
  function copied() {
    if (copiedAlertVisible !== true) {
      setCopiedAlertVisible(true);
      setTimeout(() => {
        setCopiedAlertVisible(false);
      }, 3000);
    }
  }
  function downloaded() {
    if (downloadAlertVisible !== true) {
      setDownloadAlertVisible(true);
      setTimeout(() => {
        setDownloadAlertVisible(false);
      }, 3000);
    }
  }
  return (
    <div className="w-full flex flex-col items-center fade-on-appear max-w-5xl mx-auto">
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

      <div className="text-center mt-16 md:mt-20 mb-6">
        <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-2">
          Step 5 of 5
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Your Profile is Ready
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <ButtonWithSVG
          title="Copy Code"
          onClick={() => onCopy()}
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
        <ButtonWithSVG
          title="Download File"
          onClick={() => onDownload()}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
        <ButtonWithSVG
          title="Create New"
          onClick={() => reloadTab()}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </div>

      <a
        href="https://youtu.be/LuBXYYEyv88?si=_abK2Q9dvun6IiOV&t=377"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-purple-400/70 hover:text-purple-300 underline underline-offset-4 mb-6 transition-colors"
      >
        Need help? Watch the video guide.
      </a>

      <div className="glass-card rounded-2xl w-full overflow-hidden">
        <div className="flex">
          <p className="bg-purple-500/20 text-purple-300 text-xs font-medium p-2 px-5 tracking-wider uppercase">
            Preview
          </p>
        </div>
        <div
          id="content"
          className="w-full p-5 md:p-8 text-slate-200"
        ></div>
      </div>

      <p className="text-sm text-slate-400 pt-10 text-center">
        Copy the code and paste it into your GitHub ReadMe file.
      </p>

      {copiedAlertVisible && <ToastSuccess title="Copied Successfully !" />}
      {downloadAlertVisible && <ToastSuccess title="Download Started !" />}
      <FeedbackButton />
    </div>
  );
}
