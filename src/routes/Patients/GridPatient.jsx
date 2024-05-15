import React from "react";
import GridTable from "../../components/GridTable/GridTable";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { RiEditFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "donorName",
    headerName: "Donor Name",
    flex: 1,
  },
  {
    field: "contact",
    headerName: "Contact",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "bloodType",
    headerName: "Blood Type",
    flex: 1,
  },
  {
    field: "bloodQty",
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
        {/* <RiEditFill /> */}
        <IconButton LinkComponent={Link} to={`/patients/edit/${row.id}`}>
          <RiEditFill />
        </IconButton>
        <IconButton LinkComponent={Link} to={`/patients/view/${row.id}`}>
          <MdVisibility />
        </IconButton>
        {/* <MdVisibility /> */}
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    donorName: "Ashfaque",
    contact: "03003437182",
    email: "aliguddu855@gmail.com",
    bloodType: "O+ve",
    bloodQty: "500 ml",
  },
  {
    id: 2,
    donorName: "Ashfaque",
    contact: "03003437182",
    email: "aliguddu855@gmail.com",
    bloodType: "O+ve",
    bloodQty: "500 ml",
  },
  {
    id: 3,
    donorName: "Ashfaque",
    contact: "03003437182",
    email: "aliguddu855@gmail.com",
    bloodType: "O+ve",
    bloodQty: "500 ml",
  },
  {
    id: 4,
    donorName: "Ashfaque",
    contact: "03003437182",
    email: "aliguddu855@gmail.com",
    bloodType: "O+ve",
    bloodQty: "500 ml",
  },
];

const GridPatient = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/patients/add">
          Add New Patient
        </Button>
      </Box>
      <GridTable columns={columns} rows={rows} />
    </>
  );
};

export default GridPatient;
