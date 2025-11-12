import { WordProps } from "@/types";
import { Letter } from "./Letter";
import { getColor } from "../util";

export function Word({ curWord, curWordIdx, activeState, input, focused }: WordProps) {
    const letters = curWord.split('');
    const spaceActive = curWordIdx === activeState.wordIdx && curWord.length === activeState.charIdx;
    return (
        <div className={`h-fit ${focused ? '' : 'blur-sm'}`}>
            {letters.map((ch, charId) => (
                <Letter
                    key={charId}
                    character={ch}
                    active={curWordIdx === activeState.wordIdx && charId === activeState.charIdx}
                    completed={curWordIdx < activeState.wordIdx || (curWordIdx === activeState.wordIdx && charId < activeState.charIdx)}
                    color={getColor(input, curWordIdx, charId)}
                />
            ))}
            <Letter
                character={"\u00A0"}
                active={spaceActive}
                completed={curWordIdx < activeState.wordIdx}
                color={getColor(input, curWordIdx, curWord.length)}
            />
        </div>
    );
}