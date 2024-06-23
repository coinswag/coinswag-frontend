import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  }
])

function App() {

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  ) 
}

export default App
