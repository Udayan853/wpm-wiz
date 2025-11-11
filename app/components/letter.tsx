import { LetterProps } from "@/types/types"

export function Letter({ character, active }: LetterProps) {
    return (
        <span
            className={`${active ? 'border-s-yellow-800' : 'border-transparent'} border-l-2`}
        >
            {character}
        </ span>
    )
}