"use client";

import { useKeyDown } from "./hooks/use-key-down";
import { Word } from "./components/word";

const words = ['hello', 'world'];

export default function Home() {
  const [activeState] = useKeyDown(words);

  return (
    <div className="flex justify-center items-center text-3xl h-full">
      {
        words.map((word, idx) => (
          <Word
            key={idx}
            activeState={activeState}
            curWord={word}
            curWordIdx={idx}
          />
        ))
      }
    </div>
  );
}
