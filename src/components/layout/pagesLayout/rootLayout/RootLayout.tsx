import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h2>Root</h2>
      <main>
        <Outlet />
      </main>
    </>
  );
}
