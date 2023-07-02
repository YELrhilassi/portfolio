import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
// Pages
import Home from "pages/Home";
import Welcome from "pages/welcome";
import AppLayout from "components/layout/pagesLayout/rootLayout";
import AboutMe from "pages/AboutMe";

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

export const appRouter = createBrowserRouter(createRoutes());

function createRoutes() {
  return createRoutesFromElements(
    <Route path="/">
      <Route index element={<Welcome />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Navigate to="about" />}>
          <Route path=":section" element={<Home />} />
        </Route>
      </Route>
    </Route>
  );
}

interface AppPage {
  url: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    url: "/page/Inbox",
    title: "Inbox",
  },
  {
    url: "/home/about",
    title: "About Me",
  },
];
