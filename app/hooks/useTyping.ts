"use client";

import { useState, useRef, useEffect } from "react";
import { allWords } from "@/assets";
import { allWordsToLetters } from "../util";
import { useSound } from "./useSound";

export function useTyping() {
    const inputRef = useRef<HTMLInputElement>(null);
    const sound = useSound('key-press.wav');

    const [input, setInput] = useState('');
    const [caretPos, setCaretPos] = useState(0);
    const [letters] = useState<string[]>(allWordsToLetters(allWords));

    useEffect(() => inputRef.current?.focus(), []);
    useEffect(() => {
        if (input !== '') sound()
    }, [input, sound]);

    const handleInputChange = (value: string) => {
        if (value.length > input.length) {
            setCaretPos(prev => prev + 1);
            setInput(() => value);
        }
        else if (value.length < input.length) {
            setCaretPos(prev => Math.max(prev - 1, 0));
            setInput(() => value);
        }
        else {
            setInput(prev => prev);
        }
    }
    return { input, handleInputChange, inputRef, letters, caretPos };
}