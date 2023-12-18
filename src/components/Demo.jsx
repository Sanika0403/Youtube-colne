import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";
import { useMemo } from "react";
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const prime = useMemo(() => findNthPrime(text),[text]);
  return (
    <div
      className={
        "m-4 p-2 w-96 border border-black" +
        (isDarkTheme && "m-4 p-2 w-96 border border-black bg-slate-600")
      }
    >
      <div>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>toggle</button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
