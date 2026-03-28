import React from "react";
import BadgeSelect from "../elements/buttons/BadgeSelect";

export default function TechBadgesWrapper({ label, data }) {
  return (
    <>
      {data.length !== 0 && (
        <div className="my-4 w-full">
          <p className="text-xs text-purple-400/70 font-medium tracking-wider uppercase mb-3 text-center">
            {label}
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            {data.map((data, key) => (
              <BadgeSelect key={key} label={data.label} url={data.url} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
