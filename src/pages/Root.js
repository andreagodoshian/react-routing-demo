// this is for wrapping everything w/ a Nav Bar
////////////////////////////////////////////////

import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";

import MainNavigation from "../components/MainNavigation";

function Root() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
        {/* ^^^^ all children go here */}
      </main>
    </>
  );
}

export default Root;
