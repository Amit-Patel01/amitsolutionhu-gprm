import React from "react";
import { useGPRMStore } from "../mobx/GPRMcontext";

export default function CheckBox({ id, title }) {
  const gprmStore = useGPRMStore();
  function chk() {
    gprmStore.data.checkbox[id] = document.getElementById(id).checked;
  }
  return (
    <label className="flex items-center gap-2.5 my-2 cursor-pointer select-none">
      <input
        type="checkbox"
        id={id}
        defaultChecked={gprmStore.data.checkbox[id]}
        onChange={chk}
      />
      <span className="text-sm text-slate-400">{title}</span>
    </label>
  );
}
