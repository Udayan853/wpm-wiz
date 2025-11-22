"use client";

import { useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useTyping } from "./hooks/useTyping";
import { useTimeoutRedirect } from "./hooks/useTimoutRedirect";
import { WordList } from "./components/WordList";
import { ClientOnly } from "./components/ClientOnly";
import { Animation } from "./components/Animation";

export default function Home() {
  const [focused, setFocused] = useState(true);
  const { input, inputRef, handleInputChange, letters, caretPos } = useTyping();
  const { time, wpmTimestampRef } = useTimer(input, focused);
  useTimeoutRedirect(time, wpmTimestampRef, input, letters);

  return (
    <div
      className="flex flex-col justify-center items-center text-3xl h-full w-screen overflow-hidden relative"
      onMouseDown={(e) => {
        e.preventDefault();
        inputRef.current?.focus();
      }}
    >
      <input
        type="text"
        className="absolute opacity-0 focus:outline-none w-px"
        value={input}
        onChange={(e) => {
          if (e.nativeEvent instanceof KeyboardEvent) {
            if (e.nativeEvent.isComposing) return;
          }
          handleInputChange(e.target.value);
        }}
        ref={inputRef}
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="none"
        autoComplete="off"
        aria-autocomplete="none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onCompositionEnd={(e) => handleInputChange(e.currentTarget.value)}
      />
      <ClientOnly>
        <div className="">
          {time}s
        </div>
        <WordList
          input={input}
          focused={focused}
          letters={letters}
          caretPos={caretPos}
        />
      </ClientOnly>
      <Animation />
    </div>
  );
}