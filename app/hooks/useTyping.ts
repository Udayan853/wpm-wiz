"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { allWords } from "@/assets";
import { allWordsToLetters } from "../util";

export function useTyping(start: () => void) {
    const curIdxRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const [input, setInput] = useState('');
    const [letters] = useState<string[]>(allWordsToLetters(allWords));

    useEffect(() => inputRef.current?.focus(), []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        start();
        if (e.target.value.length > input.length) {
            curIdxRef.current++;
            setInput(() => e.target.value);
        }
        else if (e.target.value.length < input.length) setInput((prev) => prev);
    };

    return { curIdxRef, input, handleInputChange, inputRef, letters };
}