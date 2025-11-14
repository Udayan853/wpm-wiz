export function getColor(input: string, curWordIdx: number, curCharIdx: number, words: string[]) {
    let targetIdx = 0;
    for (let i = 0; i < curWordIdx; i++) {
        targetIdx += words[i].length;
    }
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