import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import FormEmailInput from "../../components/Forms/FormEmailInput";
import FormPasswordInput from "../../components/Forms/FormPasswordInput";
import { Link } from "react-router-dom";
import FormTextInput from "../../components/Forms/FormTextInput";

function Register() {
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
      <Box display={"flex"} flexDirection={"column"} gap={1} width="80%">
        <FormTextInput name="name" label="Enter Name" />
        <FormEmailInput name="email" label="Enter Email" />
        <FormPasswordInput name="password" label="Enter Password" />
        <Button variant="contained">Login</Button>
      </Box>
      <Box alignContent={"center"} alignItems={"center"}>
        <Typography component={Link} to="/login">
          Have an Account Please Login Here !...
        </Typography>
      </Box>
    </Paper>
  );
}

export default Register;
