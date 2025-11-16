"use client";

import { useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useTyping } from "./hooks/useTyping";
import { useTimeoutRedirect } from "./hooks/useTimoutRedirect";
import { WordList } from "./components/WordList";
import { ClientOnly } from "./components/ClientOnly";

export default function Home() {
  const [focused, setFocused] = useState(true);
  const { input, inputRef, handleInputChange, curIdxRef, letters } = useTyping();
  const { time, wpmTimestampRef } = useTimer(input, focused);
  useTimeoutRedirect(time, wpmTimestampRef);

  return (
    <div
      className="flex flex-col justify-center items-center text-3xl h-full w-screen overflow-hidden"
      onMouseDown={(e) => {
        e.preventDefault();
        inputRef.current?.focus();
      }}
    >
      <input
        type="text"
        className="absolute opacity-0 focus:outline-none"
        value={input}
        onChange={handleInputChange}
        ref={inputRef}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <ClientOnly>
        <div className="">
          {time}s
        </div>
        <WordList
          curIdxRef={curIdxRef}
          input={input}
          focused={focused}
          letters={letters}
        />
      </ClientOnly>
    </div>
  );
}