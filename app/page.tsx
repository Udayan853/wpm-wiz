import { allWordsToLetters } from "./util"
import { allWords } from "@/assets"
import { HomePage } from "./home";

export default function Page() {
  const letters = allWordsToLetters(allWords)
  return <HomePage letters={letters} />;
}