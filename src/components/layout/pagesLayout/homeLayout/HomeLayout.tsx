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
      <LayoutHeader {...{ isRoot }} />
      <ContentBox>
        <Outlet />
      </ContentBox>
    </Page>
  );
}

function LayoutHeader({ isRoot }: any) {
  return !isRoot ? (
    <HeaderBox>
      <Header />
    </HeaderBox>
  ) : null;
}
