import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Store from "../../context/Store";

function Root() {
  return (
    <>
      <Store>
        <Navbar />
      </Store>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
