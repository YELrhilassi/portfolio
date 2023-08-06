import Page from "components/layout/page";
import HeaderBox from "./HeaderBox";
import Header from "components/layout/header";
// import PageTagBox from "./PageTagBox";
// import SidePageTag from "components/common/SidePageTag";

import ContentBox from "./ContentBox";
import { Outlet } from "react-router-dom";
//
//
//

export default function AppLayout() {
  return (
    <Page>
      <HeaderBox>
        <Header />
      </HeaderBox>

      <ContentBox>
        <Outlet />
      </ContentBox>
    </Page>
  );
}
