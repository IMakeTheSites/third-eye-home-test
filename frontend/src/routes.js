import { useRoutes } from "react-router-dom";

import CarsList from "./pages/Cars";
import Car from "./pages/Car";
import MainLayout from "./components/layout/MainLayout";

export default function Router() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <CarsList />,
        },
        {
          path: "/cars/:carId",
          element: <Car />,
        },
      ],
    },
  ]);
}
