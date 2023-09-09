import Header from "components/layout/header";
import { ContentBox, HeaderBox, Page } from "components/layout/page";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
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
