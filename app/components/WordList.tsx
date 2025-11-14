import { Word } from "./Word";
import { WordListProps } from "@/types";
import React from "react";

export function WordListComponent({ activeState, input, focused, words }: WordListProps) {
    return (
        <div className="flex flex-wrap overflow-y-auto w-2/3 h-2/3 justify-evenly scrollbar-hide">
            {words.map((word, idx) => (
                <Word
                    key={idx}
                    activeState={activeState}
                    curWord={word}
                    curWordIdx={idx}
                    input={input}
                    focused={focused}
                    words={words}
                />
            ))}
        </div>
    );
}

export const WordList = React.memo(WordListComponent);