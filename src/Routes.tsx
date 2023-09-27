import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EachCountry from "./components/EachCountry";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/:countryName",
      element: <EachCountry />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
