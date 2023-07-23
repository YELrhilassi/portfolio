import { useEffect, useRef, useState } from "react";
import st from "./aboutMe.module.scss";

export default function Typewriter() {
  const phrases = ["front-end", "UX/UI"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(150);
  const [initialDelay] = useState(1000);
  const elemntRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemnt = elemntRef.current;
    if (!elemnt) {
      return;
    }
    const type = () => {
      const phrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentCharacterIndex((prev) => prev - 1);
        elemnt.textContent = phrase.substring(0, currentCharacterIndex);
        setDelay(80); // Faster deletion
      } else {
        setCurrentCharacterIndex((prev) => prev + 1);
        elemnt.textContent = phrase.substring(0, currentCharacterIndex);
        setDelay(180); // Normal typing speed
      }

      if (!isDeleting && currentCharacterIndex === phrase.length) {
        setIsDeleting(true);
        setDelay(initialDelay); // Delay before starting deletion
      } else if (isDeleting && currentCharacterIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setDelay(150); // Delay before starting typing again
      }
    };

    const typingInterval = setTimeout(type, delay);

    return () => clearTimeout(typingInterval);
  }, [
    currentCharacterIndex,
    currentPhraseIndex,
    delay,
    initialDelay,
    isDeleting,
  ]);

  return <span ref={elemntRef} className={`${st.cursor} `} />;
}
