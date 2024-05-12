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
    field: "bloodGroup",
    headerName: "Blood Group",
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "donors",
    headerName: "Donors",
    flex: 1,
  },
  {
    field: "recievers",
    headerName: "Receivers",
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
        <IconButton LinkComponent={Link} to={`/bloodGroups/edit/${row.id}`}>
          <RiEditFill />
        </IconButton>
        <IconButton LinkComponent={Link} to={`/bloodGroups/view/${row.id}`}>
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
    bloodGroup: "A+ve",
    description: "1 in 3 people have A Positive",
    donors: "A+ve, O+ve, A-ve, O-ve",
    recievers: "A+ve, AB+ve",
  },
  {
    id: 2,
    bloodGroup: "B+ve",
    description: "1 in 13 people have B Positive",
    donors: "B+ve, O+ve, B-ve, O-ve",
    recievers: "B+ve, AB+ve",
  },
  {
    id: 3,
    bloodGroup: "AB+ve",
    description: "1 in 50 people have AB Positive",
    donors: "AB+ve",
    recievers: "A+ve, AB+ve, B+ve, O+ve, A-ve, B-ve, AB-ve, O-ve",
  },
  {
    id: 4,
    bloodGroup: "O+ve",
    description: "1 in 3 people have O Positive",
    donors: "A+ve, B+ve, AB+ve, O+ve",
    recievers: "O+ve, O-ve",
  },
  {
    id: 5,
    bloodGroup: "A-ve",
    description: "1 in 13 people have A Negative",
    donors: "A+ve, A-ve, AB+ve, O+ve",
    recievers: "A-ve, O-ve",
  },
  {
    id: 6,
    bloodGroup: "B-ve",
    description: "1 in 50 people have B Negative",
    donors: "B+ve, B-ve, AB+ve, AB-ve",
    recievers: "B-ve, O-ve",
  },
  {
    id: 7,
    bloodGroup: "AB-ve",
    description: "1 in 100 people have AB Negative",
    donors: "AB+ve, AB-ve",
    recievers: "A-ve, B-ve, AB-ve, O-ve,",
  },
  {
    id: 8,
    bloodGroup: "O-ve",
    description: "1 in 7 people have O Negative",
    donors: " A-ve, B-ve, AB-ve, O-ve",
    recievers: "A+ve, AB+ve, B+ve, O+ve, A-ve, B-ve, AB-ve, O-ve",
  },
];

const GridBloodGroup = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/bloodGroups/add">
          Add New Blood Group
        </Button>
      </Box>
      <GridTable columns={columns} rows={rows} />
    </>
  );
};

export default GridBloodGroup;
