import { Word } from "./Word";
import { WordListProps } from "@/types";
import { useMemo } from "react";
import { combineLetters, isWordActive } from "../util";

export function WordList({ curIdxRef, input, focused, letters }: WordListProps) {
    const words = useMemo(() => combineLetters(letters), [letters]);

    return (
        <div className={`grid grid-flow-col overflow-y-auto w-2/3 scrollbar-hide ${focused ? '' : 'blur-sm'}`}>
            {words.map((wordSegment) => (
                <Word
                    key={wordSegment.startIndex}
                    startIndex={wordSegment.startIndex}
                    word={wordSegment.word}
                    input={isWordActive(wordSegment, input) ? input : ''}
                    curIdxRef={curIdxRef}
                />
            ))}
        </div>
    );
}