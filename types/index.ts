import { RefObject } from "react";

export interface WordListProps {
    input: string;
    focused: boolean;
    letters: string[];
    caretPos: number;
}

export interface WordSegment {
    startIndex: number;
    word: string[];
}

export interface WordProps {
    input: string;
    startIndex: number;
    word: string[];
    caretPos: number;
    activeWordRef: RefObject<HTMLDivElement | null> | null;
}

export interface LetterProps {
    character: string;
    active: boolean;
    color: string;
}

export interface WpmTimestamp {
    time: number;
    wpm: number;
}