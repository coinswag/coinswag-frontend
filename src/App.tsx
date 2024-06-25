import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import DashboardLayout from "./pages/DashboardLayout";
import AuthLayout from "./pages/auth/auth-layout/AuthLayout";
import Login from "./pages/auth/auth-section/Login";
import Register from "./pages/Register";
import { Wagmi } from "./providers/wagmi";

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
		],
	},
]);

function App() {
	return (
		<Fragment>
      <Wagmi>
        <RouterProvider router={router} />
      </Wagmi>
    </Fragment>
	);
}

export default App;
