import Box from "components/layout/box";
import Header from "components/layout/header";
import Page from "components/layout/page/Page";
import SVG from "../../../../../public/Line_10.svg";

import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Page>
      <Box
        name="headerBox"
        gridColumn="1 / 13"
        gridRow="1 / 2"
        display="flex"
        flexDirection="column"
        justifyContent="end"
      >
        <Header />
      </Box>

      <Box
        name="pageTagBox"
        // background="#78c1995c"
        gridColumn="1 / 2"
        gridRow="2 / 10"
        position="absolute"
      >
        <SidePageTag />
      </Box>

      <Box
        name="contentBox"
        // background="#c178785c"
        gridColumn="1 / 13"
        gridRow="2 / 14"
        position="relative"
      >
        <Outlet />
      </Box>
    </Page>
  );
}

function SidePageTag({ height }: any) {
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
        marginLeft="6vw"
        transform="translateX(-62%) rotate(180deg)"
        fontSize="21px"
      >
        About Me
      </Box>
    </Box>
  );
}
