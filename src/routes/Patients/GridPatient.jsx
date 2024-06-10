import React, { useEffect, useState } from "react";
import GridTable from "../../components/GridTable/GridTable";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { RiEditFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../components/Common/Breadcrumbs";
import { getRequest } from "../../utils/server-request";
import { toast } from "react-toastify";

const BREADCRUMBS_OPTIONS = [{ title: "Patient", href: "/patients" }];

const columns = [
  {
    field: "patient_id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "patient_name",
    headerName: "Donor Name",
    flex: 1,
  },
  {
    field: "patient_age",
    headerName: "Patient Age",
    flex: 1,
  },
  {
    field: "patient_contact",
    headerName: "Contact",
    flex: 1,
  },
  {
    field: "patient_email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "patient_blood_type",
    headerName: "Blood Type",
    flex: 1,
  },
  {
    field: "patient_blood_qty",
    headerName: "Blood Qty",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: ({ row }) => (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        height={"100%"}
      >
        <IconButton
          LinkComponent={Link}
          to={`/patients/edit/${row.patient_id}`}
        >
          <RiEditFill />
        </IconButton>
        <IconButton
          LinkComponent={Link}
          to={`/patients/view/${row.patient_id}`}
        >
          <MdVisibility />
        </IconButton>
      </Box>
    ),
  },
];

const GridPatient = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      await getRequest("patients", (res) => {
        toast.success(res.message);
        setPatients(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/patients/add">
          Add New Patient
        </Button>
      </Box>
      <GridTable id="patient_id" columns={columns} rows={patients} />
    </>
  );
};

export default GridPatient;
