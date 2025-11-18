import { Word } from "./Word";
import { WordListProps } from "@/types";
import { useMemo, useEffect, useRef } from "react";
import { combineLetters, isWordActive } from "../util";

export function WordList({ input, focused, letters, caretPos }: WordListProps) {
    const words = useMemo(() => combineLetters(letters), [letters]);

    const innerRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const activeWordRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef(0);

    useEffect(() => {
        const parent = parentRef.current;
        const wordList = innerRef.current
        const curWord = activeWordRef.current;
        if (!curWord) return;

        const parentBounds = parent!.getBoundingClientRect();
        const curBounds = curWord.getBoundingClientRect();

        if (curBounds.right > parentBounds.right) {
            const offset = curBounds.right - parentBounds.right;
            scrollRef.current += offset;
            wordList!.style.transform = `translateX(-${scrollRef.current}px)`;
        }
    }, [input]);

    return (
        <div ref={parentRef} className={`grid grid-flow-col overflow-hidden w-2/3 ${focused ? '' : 'blur-sm'}`}>
            <div ref={innerRef} className="grid grid-flow-col">
                {words.map((wordSegment) => {
                    const inputSegment = input.substring(wordSegment.startIndex, wordSegment.startIndex + wordSegment.word.length);

                    return <Word
                        key={wordSegment.startIndex}
                        startIndex={wordSegment.startIndex}
                        word={wordSegment.word}
                        input={inputSegment}
                        caretPos={isWordActive(wordSegment, input) ? caretPos : -1}
                        activeWordRef={isWordActive(wordSegment, input) ? activeWordRef : null}
                    />
                })}
            </div>
        </div>
    );
}