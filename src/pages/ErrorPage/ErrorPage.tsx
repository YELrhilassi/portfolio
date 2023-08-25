import ErrorBoundary from "components/layout/errorBoundary";
import Header from "components/layout/header";
import { ContentBox, HeaderBox, Page } from "components/layout/page";

export default function ErrorPage() {
  return (
    <Page>
      <HeaderBox>
        <Header />
      </HeaderBox>

      <ContentBox>
        <ErrorBoundary />
      </ContentBox>
    </Page>
  );
}
