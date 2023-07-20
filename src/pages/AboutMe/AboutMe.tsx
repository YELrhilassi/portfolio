import Box from "components/layout/box";
import { styled } from "components/layout/box/Box";
import ProfilePic from "./ProfilePic";
import st from "./aboutMe.module.scss";
import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      fontFamily="Cormorant Garamond"
      justifyContent="space-between"
    >
      <TextBox
        name="textBox"
        width="80%"
        desktop={{ width: "35%", gap: "1.5vw", fontSize: "150%" }}
      >
        <Box width="80vw" fontSize="250%" fontWeight="700" color="#E4A957">
          <Box lineHeight="100%">
            Hi there! <Span>I'm Youssef.</Span>
          </Box>
        </Box>
        <Box
          fontSize="2.5vh"
          fontWeight="600"
          display="flex"
          flexDirection="column"
        >
          <Span>A web developper with a passion &nbsp;</Span>

          <Span display="flex" alignItems="center" gap="0.2rem">
            for <Typewriter /> <Span>development.</Span>
          </Span>
        </Box>
        <Box
          display="flex"
          fontSize="2.3vh"
          flexDirection="column"
          gap="1rem"
          fontWeight="500"
        >
          <p>
            With my academic background in linguistics, I’m constantly exploring
            opportunities to transform ways of communication through technology.
          </p>
          <p>
            My primary focus now is to create dynamic and interactive web
            applications that revolves around language-related functionalities.
          </p>
          <p>
            I am exited to collaborating with different talents globally, Let’s
            chat and connect!
          </p>
        </Box>
      </TextBox>

      <Box>
        <Box
          position="absolute"
          width="120vw"
          top="-28vh"
          left="-20vw"
          desktop={{ width: "67vw", left: "17vw", top: "-30vw" }}
        >
          <img src="/patterns.svg" alt="" />
          <Box
            position="absolute"
            width="35vw"
            left="75vw"
            top="-10vw"
            desktop={{ width: "30vw", left: "42vw", top: "-15vw" }}
          >
            <ProfilePic />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const Typewriter = () => {
  const phrases = ["front-end", "UX/UI"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(150);
  const [initialDelay] = useState(1000);
  const elemntRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemnt = elemntRef.current;
    if (!elemnt) return;
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
};

const TextBox = styled("div", {
  display: "flex",
  gap: "3vw",
  flexDirection: "column",
  fontWeight: "500",
  top: "6vh",
  left: "15vw",
  zIndex: "2",
});

const Span = styled("span", { display: "inline-block" });
