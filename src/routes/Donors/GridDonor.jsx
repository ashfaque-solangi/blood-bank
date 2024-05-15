import React, { useEffect, useState } from "react";
import GridTable from "../../components/GridTable/GridTable";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { RiEditFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

import { getRequest } from "../../utils/server-request";

const columns = [
  {
    field: "donor_id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "donor_name",
    headerName: "Donor Name",
    flex: 1,
  },
  {
    field: "donor_contact",
    headerName: "Contact",
    flex: 1,
  },
  {
    field: "donor_email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "donor_blood_type",
    headerName: "Blood Type",
    flex: 1,
  },
  {
    field: "donor_blood_qty",
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
        <IconButton LinkComponent={Link} to={`/donors/edit/${row.donor_id}`}>
          <RiEditFill />
        </IconButton>
        <IconButton LinkComponent={Link} to={`/donors/view/${row.donor_id}`}>
          <MdVisibility />
        </IconButton>
      </Box>
    ),
  },
];

// const rows = [
//   {
//     id: 1,
//     donorName: "Ashfaque",
//     contact: "03003437182",
//     email: "aliguddu855@gmail.com",
//     bloodType: "O+ve",
//     bloodQty: "500 ml",
//   },
//   {
//     id: 2,
//     donorName: "Ashfaque",
//     contact: "03003437182",
//     email: "aliguddu855@gmail.com",
//     bloodType: "O+ve",
//     bloodQty: "500 ml",
//   },
//   {
//     id: 3,
//     donorName: "Ashfaque",
//     contact: "03003437182",
//     email: "aliguddu855@gmail.com",
//     bloodType: "O+ve",
//     bloodQty: "500 ml",
//   },
//   {
//     id: 4,
//     donorName: "Ashfaque",
//     contact: "03003437182",
//     email: "aliguddu855@gmail.com",
//     bloodType: "O+ve",
//     bloodQty: "500 ml",
//   },
// ];

const GridDonor = () => {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    await getRequest("donors", (res) => {
      setDonors(res);
    });
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/donors/add">
          Add New Donor
        </Button>
      </Box>
      <GridTable id="donor_id" columns={columns} rows={donors} />
    </>
  );
};

export default GridDonor;
