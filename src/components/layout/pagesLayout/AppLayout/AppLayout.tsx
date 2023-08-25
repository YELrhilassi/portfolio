import Header from "components/layout/header";
import { ContentBox, HeaderBox, Page } from "components/layout/page";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";
//
//
//

export default function AppLayout() {
  const { pathname } = useLocation();
  const [isRoot, setIsRoot] = useState(() => pathname === "/");

  useEffect(() => {
    setIsRoot(() => pathname === "/");
  }, [pathname]);

  return (
    <Page>
      <HeaderBox {...{ isRoot }}>
        <Header />
      </HeaderBox>
      <ContentBox>
        <Outlet />
      </ContentBox>
    </Page>
  );
}
