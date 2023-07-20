import Page from "components/layout/page";
import HeaderBox from "./HeaderBox";
import Header from "components/layout/header";
import PageTagBox from "./PageTagBox";
import { SidePageTag } from "pages/Home/Home";
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

      <PageTagBox>
        <SidePageTag />
      </PageTagBox>

      <ContentBox>
        <Outlet />
      </ContentBox>
    </Page>
  );
}
