import { WordProps } from "@/types";
import { Letter } from "./Letter";
import React from "react";
import { SPACE } from "../util/constants";

function WordComponent({ word, input, startIndex, activeWordRef, caretPos }: WordProps) {
    const shiftedIndex = caretPos - startIndex;

    return (
        <div ref={activeWordRef} className="h-fit">
            {word.map((letter, id) => {
                const isActive = id === shiftedIndex;
                let color = '';
                if (id < input.length) {
                    if (word[id] === SPACE && input[id] === ' ') color = 'text-green-500';
                    else if (input[id] === word[id]) color = 'text-green-500';
                    else color = 'underline decoration-red-600 opacity-80';
                }
                return <Letter
                    key={id}
                    character={letter}
                    active={isActive}
                    color={color}
                />
            })}
        </div>
    );
}

export const Word = React.memo(WordComponent);