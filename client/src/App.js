import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginOrRegister from "./components/LoginOrRegister/LoginOrRegister";
import Root from "./components/Root/Root";

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
      ],
    },
  ]);

  return (
    <div className="app-div">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
