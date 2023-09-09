import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// Pages
import { ErrorPage, Home, Codesnippet, Welcome } from "pages";
import { AppLayout } from "components/layout/pagesLayout";
import { loadSection } from "loaders/sectionsLoader";
import ErrorBoundary from "components/layout/errorBoundary";

const appRouter = createBrowserRouter(createRoutes());

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}

function createRoutes() {
  return createRoutesFromElements(
    <Route
      path="/"
      element={<AppLayout />}
      errorElement={<ErrorPage />}
    ></Route>
  );
}

// function createRoutes() {
//   return createRoutesFromElements(
//     <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>

//       <Route index element={<Welcome />} />

//       <Route path="home">
//         <Route index element={<Navigate to="about" replace />} />
//         <Route
//           path=":section"
//           element={<Home />}
//           errorElement={<ErrorBoundary />}
//           loader={loadSection}
//         />
//       </Route>

//       <Route path="codesnippet" element={<Codesnippet />} />
//     </Route>
//   );
// }
