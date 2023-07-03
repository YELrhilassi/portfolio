import { ReactElement } from "react";
import Box from "components/layout/box";
import useCurrentSection from "hooks/useCurrentSection";
import AboutMe from "pages/AboutMe";
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
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!currentSection) {
  //     navigate("about");
  //   }
  // }, [currentSection]);

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
        fontSize="1.3rem"
        fontWeight="600"
        color="#5A5753"
        opacity="71%"
      >
        {currentSection?.name}
      </Box>
    </Box>
  );
}
