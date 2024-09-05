import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginOrRegister from "./components/LoginOrRegister/LoginOrRegister";
import Root from "./components/Root/Root";
import UserProfile from "./components/UserProfile/UserProfile";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login-register",
          element: <LoginOrRegister />,
        },
        {
          path: "user-profile",
          element: <UserProfile />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    // {
    //   path: "login",
    // },
  ]);

  return (
    <div className="app-div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
