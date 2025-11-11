"use client"

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { ActiveState } from "@/types";
import { words } from "../assets";

export function useTyping() {
    const [activeState, setActiveState] = useState<ActiveState>({ charIdx: 0, wordIdx: 0 });
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const diff = e.target.value.length - input.length;
        setActiveState((prev) => {
            let newCharIdx = prev.charIdx;
            let newWordIdx = prev.wordIdx;

            if (diff < 0) {
                if (prev.charIdx - 1 >= 0) newCharIdx--;
                else if (prev.wordIdx - 1 >= 0) {
                    newWordIdx--;
                    newCharIdx = words[prev.wordIdx - 1].length - 1;
                }
            }
            else if (diff > 0) {
                if (prev.charIdx + 1 < words[prev.wordIdx].length) newCharIdx++;
                else if (prev.wordIdx + 1 < words.length) {
                    newWordIdx++;
                    newCharIdx = 0;
                };
            }

            return { charIdx: newCharIdx, wordIdx: newWordIdx };
        });

        setInput(() => e.target.value);
    }

    return { activeState, input, handleInputChange, inputRef }
}