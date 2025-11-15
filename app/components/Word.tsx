import { WordProps } from "@/types";
import { Letter } from "./Letter";
import { useEffect, useState } from "react";
import React from "react";

function WordComponent({ word, input, curIdxRef, startIndex }: WordProps) {
    const initialColors: string[] = Array(word.length).fill('');
    const initialActiveLetters: boolean[] = Array(word.length).fill(false);
    const [colors, setColors] = useState(initialColors);
    const [activeLetters, setActiveLetters] = useState(initialActiveLetters);

    useEffect(() => {
        if (input !== '') {
            const upperBound = Math.min(startIndex + word.length, curIdxRef.current);
            setColors((prev) => {
                const updatedColors = [...prev];
                for (let i = startIndex; i < upperBound; i++) {
                    updatedColors[i - startIndex] = input.at(i) === word[i - startIndex] ? 'text-green-600' : 'text-red-600';
                }
                return updatedColors;
            });
            setActiveLetters(() => {
                const updatedActiveLetters = Array(word.length).fill(false);
                updatedActiveLetters[curIdxRef.current - startIndex] = true;
                return updatedActiveLetters;
            });
        }
    }, [curIdxRef, input, startIndex, word]);

    return (
        <div className={`h-fit`}>
            {word.map((letter, id) => (
                <Letter
                    key={id}
                    character={letter}
                    active={activeLetters[id]}
                    color={colors[id]}
                />
            ))}
        </div>
    );
}

export const Word = React.memo(WordComponent);