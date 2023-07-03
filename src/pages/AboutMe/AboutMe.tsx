import Box from "components/layout/box";
import { styled } from "components/layout/box/Box";
import ProfilePic from "./ProfilePic";

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
        <Box fontSize="2.5vh" fontWeight="600">
          A web developper with a passion &nbsp;
          <Span>for front-end development.</Span>
        </Box>
        <Box
          display="flex"
          fontSize="2vh"
          flexDirection="column"
          gap="1rem"
          fontWeight="600"
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
            width="50vw"
            left="65vw"
            top="-17vw"
            desktop={{ width: "30vw", left: "42vw", top: "-15vw" }}
          >
            <ProfilePic />
          </Box>
        </Box>
      </Box>
    </Box>
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
