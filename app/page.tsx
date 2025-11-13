"use client";

import { useTyping } from "./hooks/useTyping";
import { WordList } from "./components/WordList";
import { useEffect, useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useRouter } from "next/navigation";
import { getWordCount } from "./util";

export default function Home() {
  const { time, pause, start } = useTimer(30);
  const { input, inputRef, handleInputChange, activeState } = useTyping(start);
  const [focused, setFocused] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (time === 0) {
      router.replace('/statistics?typed=' + getWordCount(input));
    }
  }, [time, router, input])

  return (
    <div
      className="flex flex-col justify-center items-center text-3xl h-full"
      onMouseDown={(e) => {
        e.preventDefault();
        inputRef.current?.focus();
      }}
    >
      <div className="">
        {time}s
      </div>
      <input
        type="text"
        className="absolute opacity-0 focus:outline-none"
        value={input}
        onChange={handleInputChange}
        ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          pause();
        }}
      />
      <WordList
        activeState={activeState}
        input={input}
        focused={focused}
      />
    </div>
  );
}