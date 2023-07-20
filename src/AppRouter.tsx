import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// Pages
import { AppLayout } from "components/layout/pagesLayout";
import { Home, Welcome } from "pages";

const appRouter = createBrowserRouter(createRoutes());

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

function createRoutes() {
  return createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="home" element={<AppLayout />}>
        <Route index element={<Navigate to="about" />} />
        <Route path=":section" element={<Home />} />
      </Route>
    </Route>
  );
}
