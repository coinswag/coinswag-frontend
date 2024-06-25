import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Wagmi } from "./wagmi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
