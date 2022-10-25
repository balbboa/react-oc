import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Menu from "./components/menu";
import ErrorPage from "./pages/Error/error";
import Historico from "./pages/Historico/Historico";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const PrivateRoute = ({ children, redirectTo }: any) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/inicio",
    element:
      <PrivateRoute redirectTo="/">
        <Menu />
      </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/inicio/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/historico",
    element:
      <PrivateRoute redirectTo="/">
        <Menu />
      </PrivateRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/historico/",
        element: <Historico />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
