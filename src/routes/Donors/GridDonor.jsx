import React, { useEffect, useState } from "react";
import GridTable from "../../components/GridTable/GridTable";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { RiEditFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumbs";

import { getRequest } from "../../utils/server-request";
import { toast } from "react-toastify";

const BREADCRUMBS_OPTIONS = [{ title: "Donors", href: "/donors" }];

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
    field: "donor_age",
    headerName: "Donor Age",
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

const GridDonor = () => {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    try {
      await getRequest("donors", (res) => {
        toast.success(res.message);
        setDonors(res.data);
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <>
      <Breadcrumbs options={BREADCRUMBS_OPTIONS} />
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
