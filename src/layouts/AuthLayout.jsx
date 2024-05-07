import { Box, Grid } from "@mui/material";
import React from "react";
import LOGO_BLOOD_BANK from "../assets/images/logo-blood-bank.png";

function AuthLayout({ children }) {
  return (
    <Grid container height="100vh">
      <Grid item display={{ xs: "none", md: "block" }} xs={7} height="100vh">
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="100vh"
        >
          <img
            src={LOGO_BLOOD_BANK}
            width={320}
            height={320}
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        md={5}
        xs={12}
        height="100vh"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width="100%"
        p={4}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
