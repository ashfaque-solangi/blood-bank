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
    field: "donor",
    headerName: "Donor Name",
    flex: 1,
  },
  {
    field: "blood_group",
    headerName: "Blood Group",
    flex: 1,
  },
  {
    field: "blood_qty",
    headerName: "Blood Qty",
    flex: 1,
  },
  {
    field: "blood_exchange",
    headerName: "Blood Exchange Group",
    flex: 1,
  },
  {
    field: "blood_exchange_qty",
    headerName: "Blood Exchange Qty",
    flex: 1,
  },
  {
    field: "contact_number",
    headerName: "Contact Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
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
        <IconButton LinkComponent={Link} to={`/blood-exchange/edit/${row.id}`}>
          <RiEditFill />
        </IconButton>
        <IconButton LinkComponent={Link} to={`/blood-exchange/view/${row.id}`}>
          <MdVisibility />
        </IconButton>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    donor: "Ashfaque Ahmed",
    blood_group: "O+ve",
    blood_qty: "500 ml",
    blood_exchange: "A+ve",
    blood_exchange_qty: "500 ml",
    contact_number: "03003437182",
    email: "aliguddu855@gmail.com",
    description: "hello",
  },
];

const BloodExchange = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button
          variant="contained"
          LinkComponent={Link}
          to="/blood-exchange/add"
        >
          Add Blood Exchange Request
        </Button>
      </Box>
      <GridTable columns={columns} rows={rows} />
    </>
  );
};

export default BloodExchange;
