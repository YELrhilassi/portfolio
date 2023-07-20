import Box from "components/layout/box";
import { AboutMe, CodeSnippet } from "pages";
import { useCurrentSection, useFadeIn } from "hooks";
import { ReactElement } from "react";
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
  {
    url: "codesnippet",
    name: "Contact",
    element: <CodeSnippet />,
  },
];

export default function Home() {
  const currentSection = useCurrentSection(homeSections);
  const [fadeInClass] = useFadeIn();

  if (!currentSection) {
    return <div>Not Found</div>;
  }

  return <div className={fadeInClass}>{currentSection.element}</div>;
}

export function SidePageTag() {
  const currentSection = useCurrentSection(homeSections);
  const [fadeInClass] = useFadeIn();

  if (!currentSection) {
    return null;
  }

  return (
    <Box
      className={fadeInClass}
      name="sideTag"
      width="fit-content"
      display="flex"
      flexDirection="column"
      gap="1rem"
    >
      <Box name="sideTag" width="max-content" marginLeft="5vw">
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
        name="sideTag"
        width="max-content"
        marginLeft="5vw"
        writingMode="vertical-rl"
        transform="translateX(-48%) rotate(180deg)"
        fontFamily="Cormorant Garamond"
        fontSize="1.7rem"
        fontWeight="600"
        color="#5A5753"
        opacity="71%"
      >
        {currentSection.name}
      </Box>
    </Box>
  );
}
