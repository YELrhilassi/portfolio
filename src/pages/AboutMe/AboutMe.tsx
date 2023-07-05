import Box from "components/layout/box";
import { styled } from "components/layout/box/Box";
import ProfilePic from "./ProfilePic";
import st from "./aboutMe.module.scss";
import { useEffect, useState } from "react";

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

          <Span>
            for <TypedText /> development.
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

function TypedText() {
  const [text, setText] = useState<any>("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const stringsToType = ["front-end", "UX/UI"];
  // const stringToType = "front-end";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const timer = setInterval(() => {
      const stringToType = stringsToType[currentStringIndex];

      setText((prev: any) => {
        if (!isDeleting && prev.length <= stringToType.length) {
          if (prev.length === stringToType.length) {
            isDeleting = true;
          }
          return prev + stringToType.charAt(prev.length);
        }
        if (isDeleting && prev.length >= 0) {
          if (!prev.length) {
            isDeleting = true;
          }
          return prev.slice(0, prev.length - 1);
        }
      });
    }, 1000);

    // const typeEffect = () => {
    //   const stringToType = stringsToType[currentStringIndex];

    //   if (!isDeleting && index < stringToType.length) {
    //     setText((prev) => prev + stringToType.charAt(prev.length));
    //     index++;
    //   } else if (isDeleting && index >= 0) {
    //     setText((prevText) => prevText.slice(0, index));
    //     index--;
    //   }

    //   if (index === stringToType.length) {
    //     isDeleting = true;
    //   }

    //   if (index === -1) {
    //     isDeleting = false;
    //     setCurrentStringIndex(
    //       (prevIndex) => (prevIndex + 1) % stringsToType.length
    //     );
    //     index = 0;
    //   }
    // };

    // const timer = setInterval(typeEffect, 200);

    // return () => {
    //   clearTimeout(timer);
    // };

    return () => {
      clearInterval(timer);
    };
  }, [currentStringIndex, text]);
  return (
    <Span className={st.typedText}>
      {text}
      <span className={st.bar}>&#124;</span>
    </Span>
  );
}

// const Patterns = styled("div");

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
