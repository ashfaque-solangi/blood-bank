import React from "react";
import { Box, Button, IconButton, Grid } from "@mui/material";
import { RiEditFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import BloodGroupCard from "../../components/BloodGroups/BloodGroupCard";

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
    bloodGroup: "A +ve",
    description: "1 in 3 people have A Positive",
    receivers: ["A+ve", "AB+ve"],
    donors: ["A+ve", "A-", "O+ve", "O-ve"],
  },
  {
    id: 2,
    bloodGroup: "A -ve",
    description: "1 in 3 people have A Positive",
    receivers: ["A-ve", "A+ve", "AB-ve", "AB+ve"],
    donors: ["A-ve", "O-ve"],
  },
  {
    id: 3,
    bloodGroup: "B +ve",
    description: "1 in 3 people have A Positive",
    receivers: ["B+ve", "AB+ve"],
    donors: ["B+ve", "B-", "O+ve", "O-ve"],
  },
  {
    id: 4,
    bloodGroup: "B -ve",
    description: "1 in 3 people have A Positive",
    receivers: ["B-ve", "B+ve", "AB-ve", "AB+ve"],
    donors: ["B-ve", "O-ve"],
  },
  {
    id: 5,
    bloodGroup: "AB +ve",
    description: "1 in 3 people have A Positive",
    receivers: ["AB+ve"],
    donors: ["A+ve", "A-", "B+ve", "B-", "AB+ve", "AB-", "O+ve", "O-ve"],
  },
  {
    id: 6,
    bloodGroup: "AB -ve",
    description: "1 in 3 people have A Positive",
    receivers: ["AB-ve", "AB+ve"],
    donors: ["A-ve", "B-ve", "AB-ve", "O-ve"],
  },
  {
    id: 7,
    bloodGroup: "O +ve",
    description: "1 in 3 people have A Positive",
    receivers: ["A+ve", "B+ve", "AB+ve", "O+ve"],
    donors: ["O+ve", "O-ve"],
  },
  {
    id: 8,
    bloodGroup: "O -ve",
    description: "1 in 3 people have A Positive",
    receivers: [
      "A-ve",
      "A+ve",
      "B-ve",
      "B+ve",
      "AB-ve",
      "AB+ve",
      "O-ve",
      "O+ve",
    ],
    donors: ["O-ve"],
  },
];

const GridBloodGroup = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/blood-groups/add">
          Add New Blood Group
        </Button>
      </Box>
      <Grid container spacing={2}>
        {rows.map((row) => (
          <Grid item xs={12}>
            <BloodGroupCard {...row} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridBloodGroup;
