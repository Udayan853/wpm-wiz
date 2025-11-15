import { LetterProps } from "@/types"
import React from "react";

function LetterComponent({ character, active, color }: LetterProps) {
    const opacity = color === '' ? 'opacity-50' : '';
    const cursor = active ? 'border-s-yellow-800' : 'border-transparent';
    return (
        <span className={`${cursor} ${opacity} ${color} border-l-2`} >
            {character}
        </ span>
    )
}

export const Letter = React.memo(LetterComponent);