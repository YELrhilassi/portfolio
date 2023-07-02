import Box from "components/layout/box";
import Header from "components/layout/header";
import Page from "components/layout/page/Page";
import { SidePageTag } from "pages/Home/Home";

import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Page background="#FFFAF1">
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
        overflow="hidden"
      >
        <Outlet />
      </Box>
    </Page>
  );
}
