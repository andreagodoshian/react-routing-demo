// this is for wrapping everything w/ a Nav Bar
////////////////////////////////////////////////

import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
        {/* ^^^^ all children go here */}
      </main>
    </>
  );
}

export default Root;
