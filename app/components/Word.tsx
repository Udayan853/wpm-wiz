import { WordProps } from "@/types";
import { Letter } from "./Letter";

export function Word({ curWord, curWordIdx, activeState }: WordProps) {
    const letters = curWord.split('');
    return (
        <div className="h-fit">
            {letters.map((ch, charId) => (
                <Letter
                    key={charId}
                    character={ch}
                    active={curWordIdx === activeState.wordIdx && charId === activeState.charIdx}
                    completed={curWordIdx < activeState.wordIdx || (curWordIdx === activeState.wordIdx && charId < activeState.charIdx)}
                />
            ))}
        </div>
    );
}