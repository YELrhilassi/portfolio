import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Box from "../box";
import { useFadeIn } from "hooks";

export default function ErrorBoundary() {
  const _error = useRouteError();
  const fadeIn = useFadeIn();

  if (isRouteErrorResponse(_error)) {
    const { status, statusText, data, error } = _error;
    return (
      <Box
        className={`${fadeIn}`}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Oops! {status}</h1>
        <p>{statusText}</p>
        {data && <p>{data.message}</p>}
        {error && <p>{error.message}</p>}
      </Box>
    );
  }
  if (_error instanceof Error) {
    return (
      <div>
        <h1>Oops! Unexpected Error</h1>
        <p>Somthing went wrong.</p>
        <p>{_error.message}</p>
      </div>
    );
  }
  return null;
}
