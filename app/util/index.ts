import { words } from "../assets";

export function getColor(input: string, curWordIdx: number, curCharIdx: number) {
    let targetIdx = 0;
    for (let idx = 0; idx < curWordIdx; idx++) {
        targetIdx += words[idx].length;
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
