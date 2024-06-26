import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import DashboardLayout from "./pages/dashboard/dashboard-layout/DashboardLayout";
import AuthLayout from "./pages/auth/auth-layout/AuthLayout";
import Login from "./pages/auth/auth-section/Login";
import Register from "./pages/auth/auth-section/Register";
import OnchainProviders from "./providers/onchainkig-provider";
// import { Toaster } from "react-hot-toast";
import NewStore from "./pages/auth/auth-section/NewStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/new-store",
        element: <NewStore />,
      },
    ],
  },
]);

function App() {
  return (
    <Fragment>
      <OnchainProviders>
        <RouterProvider router={router} />
      </OnchainProviders>
    </Fragment>
  );
}

export default App;
