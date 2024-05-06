import { Grid, Typography } from "@mui/material";
import React from "react";

function FormContainer({ children, title }) {
  return (
    <Grid container display={"flex"} alignItems={"center"} mb={1}>
      <Grid item xs={12} md={3}>
        <Typography variant="body1">{title}</Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  );
}

export default FormContainer;
