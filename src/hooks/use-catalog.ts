import { useState } from "react";
import { words } from "../data/words";
type useCatalogType = [boolean, () => void];

const useCatalog = (): any => {
  const [word, setWord] = useState("");

  const getCatalog = (length: number = 5) => {
    return words.filter((word) => word.length === length);
  };

  const getRandom = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const getCorrectIndexes = (typedWord: string) => {
    let correctIndexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] == typedWord[i]) return;
      correctIndexes.push(true);
    }
    return correctIndexes;
  };

  const isInWord = (letter: string) => {
    if (word.includes(letter)) return true;
    return false;
  };

  return [word, setWord, getCatalog, getRandom, getCorrectIndexes, isInWord];
};

export default useCatalog;
