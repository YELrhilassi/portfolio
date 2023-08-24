import Header from "components/layout/header";
import { ContentBox, HeaderBox, Page } from "components/layout/page";

import { Outlet } from "react-router-dom";
//
//
//

export default function HomeLayout() {
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
