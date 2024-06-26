import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OnchainProviders from "./onchainkig-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
