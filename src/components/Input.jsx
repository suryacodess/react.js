import { useEffect, useRef, useState } from "react";

export default function Input() {
  const [nameText, setName] = useState("");
  const btn = useRef();
  const [value, setValue] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    if (btn) {
      btn.current.addEventListener("click", () => {
        setName(value);
        setValue("");
      });
    }
  });
  return (
    <div className="max-w-[1200px] mx-auto pt-10 px-2">
      <div className="input flex gap-2">
        <input
          type="text"
          className="border-[1px] border-black px-2 py-1"
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          id="submitBtn"
          className="px-3 py-1 bg-purple-400 text-whtie cursor-pointer"
          ref={btn}
        >
          Submit
        </button>
      </div>
      {nameText && <h2 className="text-2xl font-medium">{nameText}</h2>}
    </div>
  );
}
