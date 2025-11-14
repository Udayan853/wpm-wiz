import { Dispatch, SetStateAction } from "react";

export interface ActiveState {
    wordIdx: number;
    charIdx: number;
}

export interface WordListProps {
    activeState: ActiveState;
    input: string;
    focused: boolean;
    words: string[];
}

export interface WordProps {
    activeState: ActiveState;
    curWordIdx: number;
    curWord: string;
    input: string;
    focused: boolean;
    words: string[];
}

export interface LetterProps {
    character: string;
    active: boolean;
    completed: boolean;
    color: string;
}

export type DispatchActiveState = Dispatch<SetStateAction<ActiveState>>
