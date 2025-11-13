import { words } from "@/assets";

export function getColor(input: string, curWordIdx: number, curCharIdx: number) {
    let targetIdx = 0;
    words.forEach((word) => targetIdx += word.length);
    targetIdx += curWordIdx + curCharIdx;

    if (targetIdx < input.length) {
        if (words[curWordIdx].at(curCharIdx) === input.at(targetIdx)) {
            return 'text-green-600';
        }
        return 'text-red-600';
    }

    return '';
}

export function getWordCount(input: string) {
    const extractedWords = input.split(' ');

    let total = 0;
    extractedWords.forEach((word) => {
        if (word.length >= 1) total++;
    })

    return total
}