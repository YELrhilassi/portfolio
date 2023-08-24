import Header from "components/layout/header";
import { ContentBox, HeaderBox, Page } from "components/layout/page";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(props: any) {
  const { error: _error } = props;
  const error = useRouteError() || _error;

  console.log(isRouteErrorResponse(error), error);

  return (
    <Page>
      <HeaderBox>
        <Header />
      </HeaderBox>

      <ContentBox>
        <div>{error.status}</div>
      </ContentBox>
    </Page>
  );
}
