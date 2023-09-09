import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// Pages
import { ErrorPage, Home, Codesnippet, Welcome, AboutMe } from "pages";
import { AppLayout } from "components/layout/pagesLayout";
import { loadSection } from "loaders/sectionsLoader";
import ErrorBoundary from "components/layout/errorBoundary";
import { Blog, BlogPost } from "pages/Blog";

const appRouter = createBrowserRouter(createRoutes());

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

function createRoutes() {
  return createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />

      <Route path="welcome" element={<Welcome />} />

      <Route path="blog">
        <Route index element={<Blog />} />
        <Route path="search" element={<div />} />
        <Route path=":postId" element={<BlogPost />} />
      </Route>

      <Route path="contact" element={<div />} />

      <Route path="snippets">
        <Route index element={<Codesnippet />} />
        <Route path=":id" element={<div />} />
      </Route>
    </Route>
  );
}
