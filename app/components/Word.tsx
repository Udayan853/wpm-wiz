import { WordProps } from "@/types";
import { Letter } from "./Letter";
import React from "react";

function WordComponent({ word, input, startIndex, activeWordRef, caretPos }: WordProps) {
    const shiftedIndex = caretPos - startIndex;

    return (
        <div ref={activeWordRef} className="h-fit">
            {word.map((letter, id) => {
                const isActive = id === shiftedIndex;
                let color = '';
                if (id < input.length) {
                    if (input[id] === word[id]) color = 'text-green-600';
                    else color = 'text-red-600';
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