import { TextField } from "@mui/material";
import React from "react";

function FormPasswordInput(props) {
  return (
    <TextField
      type="password"
      variant="outlined"
      fullWidth
      size="small"
      {...props}
    />
  );
}

export default FormPasswordInput;
