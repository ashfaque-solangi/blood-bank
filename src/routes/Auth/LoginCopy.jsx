import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormPasswordInput from "../../components/Forms/FormPasswordInput";
import { red } from "@mui/material/colors";

function Login() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
      >
        <Typography variant="h4" fontWeight={600}>
          ABC Blood Bank
        </Typography>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            width: "100%",
          }}
        >
          <FormEmailInput name="email" label="Enter Email" />
          <FormPasswordInput name="password" label="Enter Password" />
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;
