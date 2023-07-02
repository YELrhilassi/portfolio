import { ReactElement } from "react";
import Box from "components/layout/box";
import AboutMe from "pages/AboutMe";
import useCurrentSection from "hooks/useCurrentSection";
import "pages/Home/styles.css";

type Section = {
  url: string;
  name: string;
  element: ReactElement;
};

const homeSections: Section[] = [
  {
    url: "about",
    name: "About Me",
    element: <AboutMe />,
  },
];

export default function Home() {
  const currentSection = useCurrentSection(homeSections);

  return (
    <Box
      name="homeContentBox"
      display="grid"
      margin="0 auto"
      position="relative"
    >
      {currentSection?.element}
    </Box>
  );
}

export function SidePageTag() {
  const currentSection = useCurrentSection(homeSections);

  return (
    <Box
      name="sideTag"
      width="fit-content"
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      <Box width="max-content" marginLeft="5vw">
        <svg
          width="4"
          viewBox="0 0 4 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2.09497"
            y1="0.00127496"
            x2="1.59497"
            y2="391.001"
            stroke="#ACACAB"
            strokeWidth="2"
          />
        </svg>
      </Box>
      <Box
        writingMode="vertical-rl"
        width="max-content"
        marginLeft="5vw"
        transform="translateX(-62%) rotate(180deg)"
        fontSize="21px"
      >
        {currentSection?.name}
      </Box>
    </Box>
  );
}
