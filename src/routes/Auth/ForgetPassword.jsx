import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormPasswordInput from "../../components/Forms/FormPasswordInput";

function ForgetPassword() {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
        width: "100%",
        p: 2,
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        ABC Blood Bank
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        Reset Your Password Here !...
      </Typography>
      <Box display={"flex"} flexDirection={"column"} gap={1} width="80%">
        <FormEmailInput name="email" label="Enter Email" />
        <FormPasswordInput name="password" label="Enter Password" />
        <FormPasswordInput name="confirm-password" label="Confirm Password" />
        <Button variant="contained">Update Password</Button>
      </Box>
      <Box alignContent={"center"} alignItems={"center"}></Box>
    </Paper>
  );
}

export default ForgetPassword;
