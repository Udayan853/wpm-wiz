"use client";

import { useTyping } from "./hooks/useTyping";
import { WordList } from "./components/WordList";
import { useState } from "react";

export default function Home() {
  const { input, inputRef, handleInputChange, activeState } = useTyping();
  const [focused, setFocused] = useState(true);

  return (
    <div
      className="flex justify-center items-center text-3xl h-full"
      onClick={() => {
        setFocused(true)
        console.log('called onFocus');
        inputRef.current?.focus();
      }}
      onBlur={() => {
        setFocused(false)
        console.log('called onBlur');
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        className="absolute opacity-0 focus:outline-none"
        value={input}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <WordList
        activeState={activeState}
        input={input}
        focused={focused}
      />
    </div>
  );
}