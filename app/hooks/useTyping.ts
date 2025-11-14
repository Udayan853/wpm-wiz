"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { ActiveState } from "@/types";
import { allWords } from "@/assets";

export function useTyping(start: () => void) {
    const [activeState, setActiveState] = useState<ActiveState>({ charIdx: 0, wordIdx: 0 });
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const [words] = useState<string[]>(() => {
        const lb = Math.floor(Math.random() * 700);
        return allWords.slice(lb, lb + 300);
    });

    useEffect(() => inputRef.current?.focus(), []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        start();
        const diff = e.target.value.length - input.length;
        const latestCharacter = e.target.value !== '' ? e.target.value.at(-1) : '';
        setActiveState((prev) => {
            let newCharIdx = prev.charIdx;
            let newWordIdx = prev.wordIdx;

            if (diff < 0) {
                if (prev.charIdx - 1 >= 0) newCharIdx--;
                else if (prev.wordIdx - 1 >= 0) {
                    newWordIdx--;
                    newCharIdx = words[prev.wordIdx - 1].length;
                }
            }
            else if (diff > 0) {
                if (prev.charIdx < words[prev.wordIdx].length) newCharIdx++;
                else if (latestCharacter === ' ' && prev.wordIdx + 1 < words.length) {
                    newWordIdx++;
                    newCharIdx = 0;
                };
            }

            return { charIdx: newCharIdx, wordIdx: newWordIdx };
        });

        setInput(() => e.target.value);
    }

    return { activeState, input, handleInputChange, inputRef, words }
}