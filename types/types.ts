import { Dispatch, SetStateAction } from "react";

export interface ActiveState {
    wordIdx: number;
    charIdx: number;
}

export interface WordProps {
    activeState: ActiveState;
    curWordIdx: number;
    curWord: string;
}

export interface LetterProps {
    character: string;
    active: boolean;
}

export type DispatchActiveState = Dispatch<SetStateAction<ActiveState>>
