import React, { useContext } from "react";
import ProductList from "../ProductList/ProductList";
import { Outlet } from "react-router-dom";
import { SwitchContext } from "../../context/SwitchContext";

function Home() {
  let [switchContextValue, setSwitchContextValue] = useContext(SwitchContext);

  return (
    <div className="home-div">
      {switchContextValue === false ? <ProductList /> : <Outlet />}
    </div>
  );
}

export default Home;
