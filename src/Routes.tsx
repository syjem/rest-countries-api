import App from "./App";
import EachCountry from "./components/EachCountry";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
