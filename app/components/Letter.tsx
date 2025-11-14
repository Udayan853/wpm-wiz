import { LetterProps } from "@/types"
import React from "react";

function LetterComponent({ character, active, completed, color }: LetterProps) {
    const opacity = completed ? '' : 'opacity-50';
    const cursor = active ? 'border-s-yellow-800' : 'border-transparent';
    return (
        <span
            className={`${cursor} ${opacity} ${completed ? color : ''} border-l-2`}
        >
            {character}
        </ span>
    )
}

export const Letter = React.memo(LetterComponent);