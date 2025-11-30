"use client";

import { useState, useRef, useEffect } from "react";
import { useSound } from "./useSound";

export function useTyping() {
    const inputRef = useRef<HTMLInputElement>(null);
    const sound = useSound('key-press.wav');

    const [input, setInput] = useState('');
    const [caretPos, setCaretPos] = useState(0);

    useEffect(() => inputRef.current?.focus(), []);
    useEffect(() => {
        if (input !== '') sound()
    }, [input, sound]);

    const handleInputChange = (value: string) => {
        const diff = value.length - input.length;
        if (diff > 0) {
            setCaretPos(prev => prev + diff);
            setInput(() => value);
        }
        else if (diff < 0) {
            setCaretPos(prev => Math.max(prev + diff, 0));
            setInput(() => value);
        }
        else {
            setInput(prev => prev);
        }
    }
    return { input, handleInputChange, inputRef, caretPos };
}