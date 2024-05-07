import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useWindowWidth } from "@react-hook/window-size";
import { Outlet } from "react-router";

function AppLayout() {
  const onlyWidth = useWindowWidth();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    setOpenSidebar(onlyWidth < 500);
  }, [onlyWidth]);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const sidebarProps = openSidebar
    ? { display: { xs: "block", md: "none" }, position: "fixed", zIndex: 1 }
    : { display: { xs: "none", md: "block" } };

  return (
    <>
      <Navbar handleSidebar={handleSidebar} />
      <Grid container my={1}>
        <Grid item md={2.5} sx={sidebarProps}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={9.5}>
          <Box px={2}>
            <Paper sx={{ p: 2 }}>
              <Outlet />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AppLayout;
