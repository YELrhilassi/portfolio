import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// Pages
import { HomeLayout } from "components/layout/pagesLayout";
import { Home, Welcome } from "pages";
import ErrorPage from "pages/ErrorPage";
import { loadSection } from "loaders/sectionsLoader";
import ErrorBoundary from "components/layout/errorBoundary";

const appRouter = createBrowserRouter(createRoutes());

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

function createRoutes() {
  return createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Navigate to="about" replace />} />
        <Route
          path=":section"
          element={<Home />}
          errorElement={<ErrorBoundary />}
          loader={loadSection}
        />
      </Route>
    </Route>
  );
}
