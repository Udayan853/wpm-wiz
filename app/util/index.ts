import { WordSegment } from "@/types";
import { SPACE } from "./constants";

export function getWordCount(input: string) {
    const extractedWords = input.split(' ');

    let total = 0;
    extractedWords.forEach((word) => {
        if (word.length >= 1) total++;
    })

    return total
}

export function combineLetters(letters: string[]): WordSegment[] {
    const target: WordSegment[] = [];
    let word: string[] = [];
    let startIndex = 0;

    letters.forEach((letter, indx) => {
        if (word.length === 0) startIndex = indx;
        word.push(letter);
        if (letter === SPACE) {
            target.push({ word, startIndex });
            word = [];
        }
    });

    return target;
}

export function isWordActive(wordSegment: WordSegment, input: string): boolean {
    const startIndex = wordSegment.startIndex;
    const endIndex = startIndex + wordSegment.word.length - 1;

    return (input.length >= startIndex) && (input.length <= endIndex + 1);
}

export function allWordsToLetters(words: string[]) {
    const lb = Math.floor(Math.random() * 700);
    const targetWords = words.slice(lb, lb + 300);
    return targetWords.flatMap((word) => {
        const characters = word.split('');
        characters.push(SPACE);
        return characters;
    });
}