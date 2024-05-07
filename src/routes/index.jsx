import { useRoutes } from "react-router";
import Bloods from "./Bloods";
import Dashboard from "./Dashboard";
import { AddDonor, GridDonor, ViewDonor } from "./Donors";
import Patients from "./Patients";
import EditDonor from "./Donors/EditDonor";
import Login from "./Auth/Login";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import Register from "./Auth/Register";

const Routes = () => {
  return useRoutes([
    {
      path: "/login",
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      ),
    },
    {
      path: "/dashboard",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/donors",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GridDonor />,
        },
        {
          path: "add",
          element: <AddDonor />,
        },
        {
          path: "edit/:id",
          element: <EditDonor />,
        },
        {
          path: "view/:id",
          element: <ViewDonor />,
        },
      ],
    },
    {
      path: "/patients",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Patients />,
        },
      ],
    },
    {
      path: "/bloods",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Bloods />,
        },
      ],
    },
  ]);
};

export default Routes;
