import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Pages
import Home from "pages/Home";
import Welcome from "pages/welcome";
import AppLayout from "components/layout/pagesLayout/rootLayout";

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

export const appRouter = createBrowserRouter(createRoutes());

function createRoutes() {
  return createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route element={<AppLayout />}>
        <Route path="home/:section" element={<Home />} />
      </Route>
    </Route>
  );
}
