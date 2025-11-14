import { WordProps } from "@/types";
import { Letter } from "./Letter";
import { getColor } from "../util";
import React from "react";

function WordComponent({ curWord, curWordIdx, activeState, input, focused, words }: WordProps) {
    const letters = curWord.split('');
    const spaceActive = curWordIdx === activeState.wordIdx && curWord.length === activeState.charIdx;
    return (
        <div className={`h-fit ${focused ? '' : 'blur-sm'}`}>
            {letters.map((ch, charId) => (
                <Letter
                    key={charId}
                    character={ch}
                    active={curWordIdx === activeState.wordIdx && charId === activeState.charIdx}
                    completed={curWordIdx < activeState.wordIdx || (curWordIdx === activeState.wordIdx && charId < activeState.charIdx)}
                    color={getColor(input, curWordIdx, charId, words)}
                />
            ))}
            <Letter
                character={"\u00A0"}
                active={spaceActive}
                completed={curWordIdx < activeState.wordIdx}
                color={getColor(input, curWordIdx, curWord.length, words)}
            />
        </div>
    );
}

export const Word = React.memo(WordComponent);