import React from "react";
import AnchorWithSVG from "../elements/anchor/AnchorWithSVG";
import { GITHUB_LOGO_LARGE_SVG } from "../elements/SVG";

export default function GitHubAvailability() {
  return (
    <div className="glass-card rounded-2xl p-8 md:p-12 my-8 md:my-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-5/12 flex justify-center items-center">
          <div className="text-purple-400/20 w-32 md:w-40">
            <GITHUB_LOGO_LARGE_SVG />
          </div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col">
          <p className="text-sm text-purple-400/80 font-medium tracking-[0.2em] uppercase mb-3">
            Open Source
          </p>
          <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
            We&apos;re Open Source
          </p>
          <p className="text-slate-400 mt-4 md:text-base leading-relaxed">
            This project is built using the open-source GPRM codebase from
            VishwaGauravIn. We have taken the base source files, implemented the
            full logic, and completed this website to provide the Amit Solution
            Hub GPRM experience. Licensed under GPL-3.0.
          </p>
          <div className="mt-6">
            <AnchorWithSVG
              url="https://github.com/VishwaGauravIn/github-profile-readme-maker"
              title="Visit GitHub"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
