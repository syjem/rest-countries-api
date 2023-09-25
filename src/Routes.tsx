import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
