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
    field: "donors",
    headerName: "Donors",
    flex: 1,
  },
  {
    field: "patients",
    headerName: "Patients",
    flex: 1,
  },
  {
    field: "cross_match_code",
    headerName: "Cross Match Code",
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
        <IconButton LinkComponent={Link} to={`/cross-match/edit/${row.id}`}>
          <RiEditFill />
        </IconButton>
        <IconButton LinkComponent={Link} to={`/cross-match/view/${row.id}`}>
          <MdVisibility />
        </IconButton>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    donors: "Ashfaque",
    patients: "Ali",
    cross_match_code: "CMC-001",
  },
];

const GridCrossMatch = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={2}>
        <Button variant="contained" LinkComponent={Link} to="/cross-match/add">
          Add New Patient
        </Button>
      </Box>
      <GridTable columns={columns} rows={rows} />
    </>
  );
};

export default GridCrossMatch;
