import { Outlet, useRoutes } from "react-router";
import Bloods from "./Bloods";
import Dashboard from "./Dashboard";
import { AddDonor, GridDonor } from "./Donors";
import Patients from "./Patients";

const Routes = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/donors",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <GridDonor />,
        },
        {
          path: "add",
          element: <AddDonor />,
        },
      ],
    },
    {
      path: "/patients",
      element: <Patients />,
    },
    {
      path: "/bloods",
      element: <Bloods />,
    },
  ]);
};

export default Routes;
