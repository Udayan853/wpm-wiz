"use client";

import { useTyping } from "./hooks/useTyping";
import { WordList } from "./components/WordList";

export default function Home() {
  const { input, inputRef, handleInputChange, activeState } = useTyping();

  return (
    <div className="flex justify-center items-center text-3xl h-full">
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
      />
    </div>
  );
}