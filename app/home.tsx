"use client";

import { useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useTyping } from "./hooks/useTyping";
import { useTimeoutRedirect } from "./hooks/useTimoutRedirect";
import { WordList } from "./components/WordList";
import { Animation } from "./components/Animation";

export function HomePage({ letters }: { letters: string[] }) {
    const [focused, setFocused] = useState(true);
    const { input, inputRef, handleInputChange, caretPos } = useTyping();
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
            <div className="absolute top-20 font-bold md:font-semibold text-4xl md:text-5xl">WPM Wizard</div>
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
            <div className="font-medium mb-4 text-shadow-lg text-4xl">
                {time}s
            </div>
            <WordList
                input={input}
                focused={focused}
                letters={letters}
                caretPos={caretPos}
            />
            <div className="absolute bottom-8">
                <Animation />
            </div>
        </div>
    );
}