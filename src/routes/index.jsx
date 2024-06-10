import { useRoutes } from "react-router";
import {
  AddBloodGroup,
  EditBloodGroup,
  GridBloodGroup,
  ViewBloodGroup,
} from "./BloodGroup";
import Dashboard from "./Dashboard";
import { AddDonor, GridDonor, ViewDonor, DonorInfo } from "./Donors";
import { AddPatient, EditPatient, GridPatient, ViewPatient } from "./Patients";
import EditDonor from "./Donors/EditDonor";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import ForgetPassword from "./Auth/ForgetPassword";
import { GridCrossMatch } from "./CrossMatch";
import {
  AddBloodExchangeRequest,
  GridBloodExchangeRequest,
} from "./ExchangeBlood";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
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
      path: "/forget-password",
      element: (
        <AuthLayout>
          <ForgetPassword />
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
        {
          path: "donor-info/:id",
          element: <DonorInfo />,
        },
      ],
    },
    {
      path: "/patients",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GridPatient />,
        },
        {
          path: "add",
          element: <AddPatient />,
        },
        {
          path: "edit/:id",
          element: <EditPatient />,
        },
        {
          path: "view/:id",
          element: <ViewPatient />,
        },
      ],
    },
    {
      path: "/blood-groups",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GridBloodGroup />,
        },
        {
          path: "add",
          element: <AddBloodGroup />,
        },
        {
          path: "edit/:id",
          element: <EditBloodGroup />,
        },
        {
          path: "view/:id",
          element: <ViewBloodGroup />,
        },
      ],
    },
    {
      path: "/cross-match",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GridCrossMatch />,
        },
      ],
    },
    {
      path: "/blood-exchange",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GridBloodExchangeRequest />,
        },
        {
          path: "add",
          element: <AddBloodExchangeRequest />,
        },
      ],
    },
  ]);
};

export default Routes;
