import { LetterProps } from "@/types"

export function Letter({ character, active, completed }: LetterProps) {
    const opacity = completed ? '' : 'opacity-50';
    const cursor = active ? 'border-s-yellow-800' : 'border-transparent';
    return (
        <span
            className={`${cursor} ${opacity} border-l-2`}
        >
            {character}
        </ span>
    )
}