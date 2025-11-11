import { words } from "../assets"
import { Word } from "./Word"
import { WordListProps } from "@/types"

export function WordList({ activeState, input }: WordListProps) {
    return words.map((word, idx) => (
        <Word
            key={idx}
            activeState={activeState}
            curWord={word}
            curWordIdx={idx}
            input={input}
        />
    ))
}