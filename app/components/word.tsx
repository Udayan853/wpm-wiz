import { WordProps } from "@/types/types";
import { Letter } from "./letter";

export function Word({ curWord, curWordIdx, activeState }: WordProps) {
    const letters = curWord.split('');
    return (
        <div className="h-fit">
            {letters.map((ch, charId) => (
                <Letter
                    key={charId}
                    character={ch}
                    active={curWordIdx === activeState.wordIdx && charId === activeState.charIdx}
                />
            ))}
        </div>
    );
}