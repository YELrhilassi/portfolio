import Box from "components/layout/box";
import { styled } from "components/layout/box/Box";

export default function AboutMe() {
  return (
    <Box
      border="solid 1px"
      display="flex"
      flexDirection="column"
      height="100vh"
      fontFamily="Cormorant Garamond"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="3vw"
        top="6vw"
        left="15vw"
        width="80%"
        fontWeight="500"
        desktop={{ width: "35%" }}
      >
        <Box width="80%" fontSize="2.5rem" fontWeight="700" color="#E4A957">
          <Box lineHeight="2.3rem">
            Hi there! <Span>I'm Youssef.</Span>
          </Box>
        </Box>
        <Box fontSize="1.4rem" fontWeight="600">
          A web developper with passion <Span>for front-end development.</Span>
        </Box>
        <Box display="flex" flexDirection="column" gap="1rem" fontWeight="600">
          <p>
            With my academic background in linguistics,I’m constantly exploring
            opportunities to transform ways of communication through technology.
          </p>
          <p>
            My primary focus now is to create dynamic and interactive web
            application that revolves around language-related functionalities.
          </p>
          <p>
            I am exited to collaborating with different talents globally, Let’s
            chat and connect!
          </p>
        </Box>
      </Box>
    </Box>
  );
}

const Span = styled("span", { display: "inline-block" });
