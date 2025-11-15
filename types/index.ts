import { RefObject } from "react";

export interface WordListProps {
    input: string;
    focused: boolean;
    letters: string[];
    curIdxRef: RefObject<number>
}

export interface WordSegment {
    startIndex: number;
    word: string[];
}

export interface WordProps {
    input: string;
    startIndex: number;
    word: string[];
    curIdxRef: RefObject<number>
}

export interface LetterProps {
    character: string;
    active: boolean;
    color: string;
}