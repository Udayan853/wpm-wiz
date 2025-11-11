"use client"

import { useEffect, useState } from "react"
import { ActiveState, DispatchActiveState } from "@/types/types"

const isLetter = (ch: string) => {
    return /^[a-z]$/i.test(ch);
}

export function useKeyDown(words: string[]): [ActiveState, DispatchActiveState] {
    const [activeState, setActiveState] = useState<ActiveState>({ charIdx: 0, wordIdx: 0 });

    useEffect(() => {
        const handleKeyDown = (ev: KeyboardEvent) => {
            setActiveState((prev) => {
                if (ev.key === "Backspace") {
                    if (prev.charIdx - 1 >= 0) return { ...prev, charIdx: prev.charIdx - 1 };
                    else if (prev.wordIdx - 1 >= 0) return { wordIdx: prev.wordIdx - 1, charIdx: words[prev.wordIdx - 1].length - 1 };
                }
                else if (isLetter(ev.key) || ev.key === ' ') {
                    if (prev.charIdx + 1 < words[prev.wordIdx].length) return { ...prev, charIdx: prev.charIdx + 1 };
                    else if (prev.wordIdx + 1 < words.length) return { wordIdx: prev.wordIdx + 1, charIdx: 0 };
                }
                return prev;
            })
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [words]);

    return [activeState, setActiveState];
}