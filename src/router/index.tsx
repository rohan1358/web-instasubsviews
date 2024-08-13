import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);

const CustomRouter = () => {
  return <RouterProvider router={router} />;
};

export default CustomRouter;
