import { Box, Paper } from "@mui/material";
import React from "react";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <Paper sx={{ height: "70vh", p: 2, bgcolor: "white" }}>
      <SidebarMenu />
    </Paper>
  );
}

export default Sidebar;
